import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { createStructuredSelector } from "reselect";


import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cartIcon/CartIcon.component";
import CartDropdown from "../CartDropdown/CartDropDown.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from './../../redux/user/user.selectors';


const HeaderComponent = ({ currentUser, hidden }) => (
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
         <CartIcon />
      </div>
      {
         hidden ? null : <CartDropdown />
      }
   </div>
);


const mapStatetoProps = createStructuredSelector({
   currentUser : selectCurrentUser,
   hidden : selectCartHidden
})

export default connect(mapStatetoProps)(HeaderComponent);