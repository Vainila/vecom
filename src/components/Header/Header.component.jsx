import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.scss";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {HomePage} from "./../../pages/HomePage/HomePage.component";




const HeaderComponent = ()=>(
   <div className="header">
      <Link to="/" className="logo-container">
         <Logo className="logo"/>
      </Link>
      <div className="options">
         <Link className="option" to="/shop">
            SHOP
         </Link>
         <Link className="option" to="/shop">
            CONTACT
         </Link>

      </div>
   </div>
)


export default HeaderComponent;