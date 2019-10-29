import { SHOP_DATA } from "../../pages/shop/shop.data";
import ShopActionTypes from "./shop.types";

const initialState = {
  collections:[]
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {

    case ShopActionTypes.SET_COLLECTIONS: {
      console.log(action.payload)
      return {
        ...state,
        collections: action.payload
      }
    }
     

    default:
      return state;
  }
};

export default shopReducer;
