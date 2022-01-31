import React from "react"
import CollectionItem from "../CollectionItem/CollectionItem.component";
import "./CollectionPreview.styles.scss"


const CollectionPreview = ({ title, items }) => (
   <div className="collection-preview" >
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
         {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
            // <div key={item.id}>{item.name}</div>
           <CollectionItem key = {item.id} item={item}/>
            
         ))}
      </div>
   </div>
)

export default CollectionPreview;