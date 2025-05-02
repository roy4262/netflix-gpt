import { useNavigate } from "react-router-dom";
import {auth} from "../utils/firebase";
import { signOut ,onAuthStateChanged} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {addUser,removeUser} from "../utils/userSlice";
import { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";

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
    return(
    <div className="absolute z-10  w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
        <img className="w-44" src={NETFLIX_LOGO}alt="netflix-logo"/>
     {user &&(
        <div className="flex p-2">
           <img className="w-12 h-12 rounded-lg" src={user?.photoURL} alt="img" />
           <button onClick={handleSignOut} className="text-white font-bold">(Sign Out)</button>
       </div>
     )
       }
    
    </div>
    
    )
}