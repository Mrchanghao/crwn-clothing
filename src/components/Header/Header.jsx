import React from 'react';
import './Header.scss'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../logo.svg'

const Header = () => {
  return (
    <header className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <nav className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        {/* <Link></Link> */}
      </nav>
    </header>
  );
}


export default Header;
