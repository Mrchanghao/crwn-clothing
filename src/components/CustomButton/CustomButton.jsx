import React from 'react';
import './CustomButton.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
  console.log('customButton render')
  return (
    <button 
      className={`${inverted ? 'inverted': ''} 
        ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
      {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;
