import React from 'react';
import './CartIcon.scss';
import {ReactComponent as ShoppingBag} from '../../shopping-bag.svg'
import {toggleCartHidden} from '../../redux/cart/cartAction'
import {connect} from 'react-redux'


const CartIcon = ({toggleCartHidden}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingBag className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden)
// })


export default connect(null, {toggleCartHidden})(CartIcon);