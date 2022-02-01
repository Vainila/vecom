import React from "react";


import CollectionPreview from "../CollectionPreview/CollectionPreview.component";
import { selectCollections } from "../../redux/shop/shop.selectors";

import "./CollectionOverview.styles.scss";
import { createStructuredSelector } from 'reselect';
import { connect } from "react-redux";


const CollectionOverview = ({ collections }) => (
   <div className="collections-overview">

      {

         collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
         ))
      }
   </div>
)

const mapStateToProps = createStructuredSelector({
   collections: selectCollections,
});


export default connect(mapStateToProps)(CollectionOverview);