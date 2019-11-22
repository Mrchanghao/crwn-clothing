import React from 'react';
import {ReactComponent as Logo} from '../../logo.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selector';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './Header.styles'


const Header = ({currentUser, hidden}) => {
  console.log(currentUser)
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {
          currentUser ? (
            <OptionDiv onClick={() => auth.signOut()}>
              Sign Out
            </OptionDiv>
          ) : (
            <OptionLink to='/signin'>Sign In</OptionLink>
          )
        }
        <CartIcon />
      </OptionsContainer>
      {
        hidden ? <CartDropDown /> : null
      }
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);
