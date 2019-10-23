import React from 'react';
import './CartIcon.scss';
import {ReactComponent as ShoppingBag} from '../../shopping-bag.svg'
import {toggleCartHidden} from '../../redux/cart/cartAction'
import {selectCartItemsCount} from '../../redux/cart/cart.selector';
import {connect} from 'react-redux'


const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingBag className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCa  rtHidden)
// })

// 기존의 글로벌 스테이트를 기반으로 새로운 속성을 계산

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})


export default connect(mapStateToProps, {toggleCartHidden})(CartIcon);