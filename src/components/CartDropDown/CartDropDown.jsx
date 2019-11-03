import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import {withRouter} from 'react-router-dom';
import './CartDropDown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import {selectCartItems} from '../../redux/cart/cart.selector';
import { toggleCartHidden } from "../../redux/cart/cartAction";

function CartDropDown({cartItems, history, dispatch}) {
  
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ?
          cartItems.map(cartitem => <CartItem key={cartitem.id} item={cartitem} />)
          : <span className='empty-message'>Cart is Empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}>Go to Check</CustomButton>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown))