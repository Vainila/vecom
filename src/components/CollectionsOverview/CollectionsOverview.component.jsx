import React from "react";


import CollectionPreview from "../CollectionPreview/CollectionPreview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./CollectionOverview.styles.scss";
import { createStructuredSelector } from 'reselect';
import { connect } from "react-redux";



const CollectionOverview = ({ collections }) => {

   
   return (<div className="collections-overview">   {

      collections.map(({ id, ...otherCollectionProps }) => (
         <CollectionPreview key={id} {...otherCollectionProps} />
      ))
   }
   </div>);
}

const mapStateToProps = createStructuredSelector({
   collections: selectCollectionsForPreview,
});


export default connect(mapStateToProps)(CollectionOverview);