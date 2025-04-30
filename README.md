
                                           <-----NETFLIX GPT--------->
1. ===INSTALATION===

#create react app using 
npx create-react-app netflix-gpt

#remove unnessary data in files

#install tailwandcss
npm install -D tailwindcss@3
npx tailwindcss init

#update tailwind.config.js filw with content
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


#update index.css file
@tailwind base;
@tailwind components;
@tailwind utilities;

#now you can use tailwant but make sure invoke index.css in every file that your using....



#for routing need to install react-router-dom
npm -D i react-router-dom
2. ===Features===
 -LOGIN/SIGNUP
      -> SIGNIN/SIGNUP FORMS
      ->REDIRECT TO BROWSER PAGE
-HEAD
-MAIN BAR
-SEARCH BAR
-MOVIE SUGGESTIONS      
-ROUTING FORM
-FORM VALIDATION
use regex for validation
-USE REF HOOK
use ref for the getting data from form .