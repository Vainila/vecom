import React from "react";
import { Link } from "react-router-dom";
import Directory from "../../components/directory/directory.component";


import "./HomePage.styles.scss";

const HomePage = (props) => {
   console.log(props);
   return (
   <div className="homepage">
      
      <Directory/>
   </div>);
}


export default HomePage;