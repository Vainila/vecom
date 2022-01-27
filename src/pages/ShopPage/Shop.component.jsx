import React from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview.component";
import { SHOP_DATA } from "./SHOP_DATA";


class ShopPage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         collections: SHOP_DATA,
      }
      console.log(this.state);
   }
   render() {
      const { collections } = this.state;
      return (
         <div className="shop-page">
            {
               collections.map(({ id, ...otherCollectionProps }) => (
                  <CollectionPreview key={id} {...otherCollectionProps} />
               ))
            }
         </div>
      )
   }
}

export default ShopPage;