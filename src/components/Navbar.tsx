import './Navbar.css'
import React from 'react';
import logo from '../res/sewi_logo.png';
import Navlink from './Navlink';

function Navbar() {
  return (
    <div className="navbar">
        <img className="navitem" src={logo} alt="logo" />
        <ul>
          <Navlink key="0" target="#!" text="Home" />
          <Navlink key="1" target="#!" text="Premium" />
          <Navlink key="2" target="#!" text="Catalog" />
          <Navlink key="3" target="#!" text="Contact" right={true} />
        </ul>
    </div>
  );
}

export default Navbar;
