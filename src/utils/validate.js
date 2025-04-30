export const validator=(email,password)=>{
    const emailValidator=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordValidator=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

   if(!emailValidator) return "Email is not valid";
   if(!passwordValidator) return "password is not valid";

   return null;

}