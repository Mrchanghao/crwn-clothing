import React from 'react';
import './CartItem.scss';

export default function CartItem({item: {imageUrl, price, name, quantity }}) {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'> {quantity} X {price}</span>
      </div>
    </div>
  )
}