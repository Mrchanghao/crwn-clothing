import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
  const priceForStripe = price * 100;

  const publishedKey = 'pk_test_K5giOWXC1cC7koImVeYxRM7g'
  
  const onToken = (token) => {
    console.log(token)
    alert('payment success')
  }
  
  return (
    <StripeCheckout 
      label='Payment'
      name='CRWN clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Cuz.svg'
      description={`total is $${price}`}
      amount={priceForStripe}
      panelLabel='Payment'
      token={onToken}
      stripeKey={publishedKey}
    />
  )
}
// test 4242 4242 4242 4242   01/20 123

export default StripeButton;
