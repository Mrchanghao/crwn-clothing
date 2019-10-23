import React from 'react';
import './Header.scss'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../logo.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';

const Header = ({currentUser}) => {
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
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  };
}


export default connect(mapStateToProps)(Header);
