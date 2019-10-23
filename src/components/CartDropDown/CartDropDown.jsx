import React from 'react';
import './CartDropDown.scss';
import CustomButton from '../CustomButton/CustomButton';

export default function CartDropDown() {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <CustomButton>Go to Check</CustomButton>
    </div>
  )
}
