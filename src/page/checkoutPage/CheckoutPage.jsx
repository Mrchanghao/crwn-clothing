import React from 'react';
import './CheckoutPage.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selector";

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import StripeButton from '../../components/StripeButton/StripeButton';

const CheckoutPage = ({cartItems, total}) => {
  // console.log(cartItems)
  return (
    <section className='checkout-page'>
      <div className='checkout-header'>

        <div className='header-block'>
          <span>Product</span>
        </div>

        <div className='header-block'>
          <span>Description</span>
        </div>

        <div className='header-block'>
          <span>Qty</span>
        </div>

        <div className='header-block'>
          <span>Price</span>
        </div>

        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)
      }

      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
      <div className='test-warning'>
        use the test card
      </div>
      <br />
      <StripeButton price={total} />
    </section>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});



export default connect(mapStateToProps,)(CheckoutPage);
