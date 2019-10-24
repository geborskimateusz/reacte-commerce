import CartActionTypes from "./cart-types";

const initialState = {
  hidden: true
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART_HIDDEN:
        console.log('toogle')
      return {
        ...state,
        hidden: !state.hidden
      };

    default:
      return {
        ...state
      };
  }
};

export default cartReducer;
