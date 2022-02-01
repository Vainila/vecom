import React from "react";
import "./collection.styles.scss";


import CollectionItem from '../../components/CollectionItem/CollectionItem.component';
import { useMatch, useLocation } from "react-router-dom";


const Collection = (props)=>{
   // const location = useLocation();

   
   return(
   <div className="category">
      {console.log(props)}
      <h2>CATEGORY PAGE</h2>
   </div>
);}

export default Collection;