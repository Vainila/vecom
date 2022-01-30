import React from "react"
import FormInput from "../FormInput/FormInput.component";

import "./SignIn.styles.scss";
import CustomButton from "../CustomButton/CustomButton.component";
import {auth,  signInWithGoogle } from "../../firebase/firebase.utils";


class SignIn extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         password: "",
         email: "",

      }
   }
   handleSubmit =async event => {
      event.preventDefault();


      const {email, password} = this.state;

      try {
         await auth.signInWithEmailAndPassword(email, password);
         this.setState({email: '', password});

      }catch(error){
         console.log(error)
      }
      
      
      this.setState({ email: '', password: '' });
   }
   handleChange = (event) => {
      const { value, name } = event.target;
      this.setState({ [name]: value });
   }

   render() {
      return (
         <div className="sign-in">
            <h2 className="sign__title">I already have an account</h2>
            <span className="sign__subtitle">Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
               <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} required label={"email"} />
               <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} required label={"password"} />

               <div className="buttons">

                  <CustomButton type="submit">
                     SING IN
                  </CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                     SIGN IN WITH GOOGLE
                  </CustomButton>
               </div>
            </form>
         </div>
      );
   }
}


export default SignIn;