import { useRef, useState } from "react"
import { Header } from "./Header"
import { validator }  from "../utils/validate"

export const Login = () =>{
    const [isSignIn,setIsSignIn]=useState(true)

    const toggleSignInForm=()=>{
       setIsSignIn(!isSignIn);
    }
    
  const email=useRef(null);
  const password=useRef(null);

    const handleButton=()=>{
        //validate form data
        
        
        // console.log(email.current.value);
        // console.log(password.current.value);
        const msg=validator(email.current.value,password.current.value);
        console.log(msg);
    }
    return(
        <div>
            <Header />
            <div className="absolute ">
               <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_small.jpg" alt="logo"></img>
            </div>
          
            <form onSubmit={(e)=>e.preventDefault()} className=" w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white rounded-md bg-opacity-80">
            <h1 className=" text-3xl py-4 font-bold">{isSignIn ? "Sign In" : "Sign Up" }</h1>
                 {!isSignIn &&    <input type="text" placeholder="Enter Full Name" className="p-4 my-4 text-gray bg-gray-800 w-full" />}

                <input ref={email} type="email" placeholder="Enter Email" className="p-4 my-4 text-gray bg-gray-800 w-full" />
                <input ref={password} type="password" placeholder="Enter password" className="p-4 my-4 text-white bg-gray-800 w-full"/>
                <button className="bg-red-800 text-white p-4 my-6 rounded-lg w-full" onClick={handleButton}>{isSignIn ?"Sign In" :"Sign Up"}</button>

                <p className="py-4 cursor-pointer" onClick={toggleSignInForm} >{isSignIn?"New to Netflix ? Sign Up Now" :"Sign In"}</p>
            </form>
        </div>
    )
}