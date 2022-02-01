import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";


import CollectionItem from '../../components/CollectionItem/CollectionItem.component';
import { useLocation, useParams } from "react-router-dom";


const Collection = ({collection})=>{
   const location = useLocation();
   
   console.log()
   
   return(
   <div className="category">
      {console.log(collection)}
      <h2>CATEGORY PAGE</h2>
   </div>
);}


const mapStateToProps = (state, ownProps) =>({
   collection: selectCollection(Object.values(ownProps.match)[0])(state)
})

export default connect(mapStateToProps)(Collection);
