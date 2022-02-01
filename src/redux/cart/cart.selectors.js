import {createSelector} from "reselect";
// import { selectCartItems } from './cart.selectors';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
   [selectCart],
   (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
   [selectCartItems],
   
   (cartItems) => cartItems.reduce(
      (total, cartItem )=>total + cartItem.quantity,0
   )
)