import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";


import CollectionItem from '../../components/CollectionItem/CollectionItem.component';



const Collection = ({collection})=>{
   
   const {title, items} = collection;
   console.log()
   
   return(
   <div className="collection-page">
      <h2 className="title">
         {title}
      </h2>
      <div className="items">
         { items.map(item=>(
            <CollectionItem key={item.id} item={item} />
         ))}
      </div>
   </div>
);}


const mapStateToProps = (state, ownProps) =>({
   collection: selectCollection(Object.values(ownProps.match)[0])(state)
})

export default connect(mapStateToProps)(Collection);
