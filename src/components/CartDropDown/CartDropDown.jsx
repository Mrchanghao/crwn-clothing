import React from 'react';
import {connect} from 'react-redux';
import './CartDropDown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import {selectCartItems} from '../../redux/cart/cart.selector';

function CartDropDown(props) {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          props.cartItems.map(cartitem => <CartItem key={cartitem.id} item={cartitem} />)
        }
      </div>
      <CustomButton>Go to Check</CustomButton>
    </div>
  )
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown)