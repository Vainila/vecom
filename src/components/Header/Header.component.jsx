import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";



const HeaderComponent = ({ currentUser }) => (
   <div className="header">
      <Link to="/" className="logo-container">
         <Logo className="logo" />
      </Link>
      <div className="options">
         <Link className="option" to="/shop">
            SHOP
         </Link>
         <Link className="option" to="/shop">
            CONTACT
         </Link>
         {
            currentUser ?
               <div className="option" onClick={() => auth.signOut()}>
                  SIGN OUT
               </div>
               : <Link className="option" to={"/sign"}>
                  SIGN IN
               </Link>
         }
      </div>
   </div>
);


const mapStatetoProps = state => ({
   currentUser: state.user.currentUser,

})

export default connect(mapStatetoProps)(HeaderComponent);