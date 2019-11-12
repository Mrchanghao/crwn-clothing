/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './CheckoutItem.scss'
import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cartAction";

const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItem}) => {
  const {name, imageUrl, quantity, price} = cartItem
  
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img srcSet={imageUrl} alt='item' />
      </div>

      <span className='name'>{name}</span>

      <span className='quantity'>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10133;</div>
        
          <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => removeItem(cartItem)}>&#10134;</div>
      </span>
      <span className='price'>{price}</span>
      <span className='remove-button' onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
