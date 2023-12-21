import React from 'react';
import Nav from './Nav'
import logo from '../assets/Logo2.svg'

function Header() {
  return (
    <>
      <header>
            <img src={logo} alt="Little Lemon logo"/>
            <Nav />
    </header>
    </>
  );
}

export default Header;