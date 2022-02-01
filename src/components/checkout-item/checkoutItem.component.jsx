import { React } from 'react';

import "./checkoutItem.styles.scss";
import { connect } from 'react-redux';
import { cleartItemFromCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, clearItem}) =>{
   const { name, imageUrl, price, quantity } = cartItem;
   return (<div className="checkout-item">
      <div className="image-container">
         <img alt="item-img" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={()=>clearItem(cartItem)}> &#10005;</div>
   </div>);
}

const mapDispatchToProps = dispatch =>({
   clearItem: item => dispatch(cleartItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);