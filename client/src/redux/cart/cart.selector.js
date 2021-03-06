import { createSelector } from 'reselect'

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    selectCart,
    cart => cart.cartItems
)

export const selectHidden = createSelector(
    selectCart,
    cart => cart.hidden 
)

export const selectCartItemsCount = createSelector(
    selectCartItems,
    cartItems => cartItems.reduce((count, item) => count += item.quantity, 0)
)

export const selectCartItemsTotal = createSelector(
    selectCartItems,
    cartItems => cartItems.reduce((count, item) => count += item.quantity * item.price, 0)
)


