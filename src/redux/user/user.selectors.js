import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCart = state => state.cart;

export const selectCurrentUser = createSelector(
   [selectUser],
   (user) => user.currentUser
);


