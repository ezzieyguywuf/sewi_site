import './Navbar.css'
import React from 'react';
import logo from '../res/sewi_logo.png';
import Navlink from './Navlink';

function Navbar() {
  return (
    <div className="navbar">
        <img className="navitem" src={logo} alt="logo" />
        <Navlink target="#!" text="Home" />
        <Navlink target="#!" text="Premium" />
        <Navlink target="#!" text="Catalog" />
        <Navlink target="#!" text="Contact" right={true} />
    </div>
  );
}

export default Navbar;
