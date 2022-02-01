import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Collection from "../collection/collection.component";

import CollectionOverview from './../../components/CollectionsOverview/CollectionsOverview.component';

const ShopPage = (props) => {
   
   return (
      <div className="shop-page">
         {
            <Routes >
               <Route index path={"/"} element={<CollectionOverview/>}/>
               <Route path={`:id`} element={<Collection/>}/>
               
               
            </Routes>
         }
      </div>
   )
}

export default ShopPage;