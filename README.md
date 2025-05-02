
                                           <-----NETFLIX GPT--------->
1. ===INSTALATION===

#create react app using 
npx create-react-app netflix-gpt

#remove unnessary data in files

#install tailwandcss
npm install -D tailwindcss@3
npx tailwindcss init
<--------------------------------->
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

<--------------------------------->
#update index.css file
@tailwind base;
@tailwind components;
@tailwind utilities;


<--------------------------------->
#now you can use tailwant but make sure invoke index.css in every file that your using....



#for routing need to install react-router-dom
npm -D i react-router-dom

<--------------------------------->
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
<---------------------------------------->
before deploy u need run a command for production deploy in order to deploy codebase correctly..
->npm run build  (it will create a index.html file in buld folder)
and this build folder must be chosen while deploying in firebase and root folder or directory ..
<--------------------------------->
-Used FIREBASE FOR DEPLOYING AND EMAIL AUTHENTICATION.
STEPS:
->LOGING TO FIREBASE
->CREATE NEW PROJECT AND GIVE NAME
->COMPLETE FOUR STEPS
->REGISTER APP
->ADD FIRE BASE SDK IN CODE BASE AS "FIREBASE.JS"
->INSTALL FIREBASE CLI
->DEPLOY COMMANDS
 FIREBASE LOGIN
 FIREBASE INIT
 FIREBASE DEPLOY 

<--------------------------------->
->IMPLEMENTED SIGN IN AND SIGN UP TO FIREBASE AND STORES DATA.
BY->
->IN FIREBASE DOCUMENTAION  SIGNIN WITH EMAIL AND PASSWORD YOU CAN USE THE LOGIC(USE WEB MODULAR API CODE)
->IN FIREBASE DOCUMENTAION  SIGNIN WITH EMAIL AND PASSWORD YOU CAN USE THE LOGIC(USE WEB MODULAR API CODE)



---------------------------------------------------------
->now taking token from user after signin
->now we are using token to validate user in the all routes of app
->so we need redux to store this . so need to install redux by 2 commands..
->npm i @reduxjs/toolkit
->npm i react-redux
->create userStore with redux


---------------------------------------------------------------------
-TO NAVIGATE ROUTES WE USED "USE NAVIGATE HOOK"

- USED REDUXSTORE FOR  USERSLICE DATA TEMPORARLY TILL USER SIGN FOR USER MANAGE

-IMPLEMENTED SIGNOUT

-Implemented bug fixes of routes and profile picture..

-Unsubscribed onAuth change callback..



