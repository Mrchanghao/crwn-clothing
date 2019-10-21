import React from 'react';
import './Header.scss'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../logo.svg'
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => {
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
      </nav>
    </header>
  );
}


export default Header;
