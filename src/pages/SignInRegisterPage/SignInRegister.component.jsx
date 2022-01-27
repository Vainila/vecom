import React from "react";
import SignIn from "../../components/Signin/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";

import "./SingInRegister.styles.scss";


const SignInRegisterPage = ()=>{
   return (
      <div className="signInRegister">
         <SignIn/>
         <SignUp/>
      </div>

   );
}


export default SignInRegisterPage;