import cartActionTypes from './cartTypes';


export const toggleCartHidden = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_HIDDEN
  }
}