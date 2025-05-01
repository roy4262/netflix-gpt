import { useState } from "react";
import { Header } from "./Header";
import { validator } from "../utils/validate";

export const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMsg({ name: "", email: "", password: "" }); // clear errors
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleButton = () => {
    const { name, email, password } = formData;

    const errors = validator(isSignIn ? undefined : name, email, password);
    setErrorMsg(errors);

    const hasError = Object.values(errors).some((err) => err);
    if (hasError) return;

    // Proceed with authentication logic here
    console.log(isSignIn ? "Signing in..." : "Signing up...");
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_small.jpg"
          alt="background"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white rounded-md bg-opacity-80"
      >
        <h1 className="text-3xl py-4 font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <>
            <input
              name="name"
              type="text"
              placeholder="Enter Full Name"
              className="p-4 my-4 text-gray bg-gray-800 w-full"
              value={formData.name}
              onChange={handleChange}
            />
            <p className="text-red-600">{errorMsg.name}</p>
          </>
        )}

        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          className="p-4 my-4 text-gray bg-gray-800 w-full"
          value={formData.email}
          onChange={handleChange}
        />
        <p className="text-red-600">{errorMsg.email}</p>

        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          className="p-4 my-4 text-white bg-gray-800 w-full"
          value={formData.password}
          onChange={handleChange}
        />
        <p className="text-red-600 font-bold py-2 text-lg">{errorMsg.password}</p>

        <button
          className="bg-red-700 text-white p-4 my-6 rounded-lg w-full"
          onClick={handleButton}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};
