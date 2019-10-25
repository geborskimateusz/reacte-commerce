import CartActionTypes from "./cart-types";
import {addItemToCart} from './cart.utils';

const initialState = {
  hidden: true,
  cartItems: [
    {
      id: 1,
      name: 'Brown Brim',
      imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      price: 25,
      quantity: 4
    },
    {
      id: 2,
      name: 'Brown Brim',
      imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      price: 25,
      quantity: 4
    }
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    
      case CartActionTypes.ADD_ITEM:
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        }

    default:
      return {
        ...state
      };
  }
};

export default cartReducer;
