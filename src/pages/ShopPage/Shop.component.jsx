import React from "react";


import CollectionOverview from './../../components/CollectionsOverview/CollectionsOverview.component';

const ShopPage = () => {
   return (
      <div className="shop-page">
         {
            <CollectionOverview/>
         }
      </div>
   )
}

export default ShopPage;