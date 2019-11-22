import React from 'react';
import {CustomButtonContainer} from './CustomButton.styles';

const CustomButton = ({children, ...props}) => {
  // console.log('customButton render')
  return (
    <CustomButtonContainer {...props}>
      {children}
    </CustomButtonContainer>
  );
}

export default CustomButton;
