import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase";
import { signOut ,onAuthStateChanged} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {addUser,removeUser} from "../utils/userSlice";
import { useEffect } from "react";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


export const Header =() =>{
  const dispatch=useDispatch();
    const user=useSelector(store =>store.user)
    const navigate=useNavigate();

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
          
    }


    useEffect(()=>{
       
     const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,diaplayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,diaplayName:diaplayName,photoURL:photoURL}));
          navigate("/browse")
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          navigate("/");
   
        }
      });
      return () =>unsubscribe();
  },[]);

   const handleGptSearch=()=>{
      dispatch(toggleSearchView()); 
   }
    
   const handleLanguageChange= (e)=>{
      dispatch(changeLanguage(e.target.value));
   }

    const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
    return(
    <div className="absolute z-10  w-screen px-8 py-2 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
        <img className="w-44 md:mx-0 mx-auto" src={NETFLIX_LOGO}alt="netflix-logo"/>
     {user &&(
        <div className="flex p-2 justify-between">
          
       {showGptSearch &&
          <select onClick={handleLanguageChange} className="opacity-70 rounded-lg mt-2 mb-2 bg-black text-white">
          {SUPPORTED_LANGUAGES.map(lang=> (<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
       
        </select>
       }

          <button onClick={handleGptSearch} className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-md">{showGptSearch?"Home Page":"GPT Search"}</button>
           <img className="hidden md:block w-12 md:h-12 h-10 m-2 rounded-lg" src={user?.photoURL} alt="img" />
           <button onClick={handleSignOut} className="text-white font-bold">(Sign Out)</button>
       </div>
     )
       }
    
    </div>
    
    )
}