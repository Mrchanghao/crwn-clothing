import cartActionTypes from './cartTypes';
import { addItemToCart } from './cart.util';

const INITIAL_STATE = {
  hidden: false,
  cartItems: []
};


const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
};

export default cartReducer;
