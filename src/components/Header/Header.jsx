import React from 'react';
import './Header.scss'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../logo.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';

const Header = ({currentUser, hidden}) => {
  console.log(currentUser)
  return (
    <header className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <nav className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        {
          currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
              Sign Out
            </div>
          ) : (
            <Link className='option' to='/signin'>Sign In</Link>
          )
        }
        <CartIcon />
      </nav>
      {
        hidden ? <CartDropDown /> : null
      }
    </header>
  );
};

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => {
  return {
    currentUser,
    hidden
  };
}


export default connect(mapStateToProps)(Header);
