import './Navbar.css'
import React from 'react';
import logo from '../res/sewi_logo.png';

function Navbar() {
  return (
    <div className="navbar">
        <img className="navitem" src={logo} alt="logo" />
        <div className="navitem active">
          <a href="#!">Home</a>
        </div>
        <div className="navitem">
          <a href="#!">Premium</a>
        </div>
        <div className="navitem">
          <a href="#!">Catalog</a>
        </div>
        <div className="navitem rightalign">
          <a href="#!">Contact</a>
        </div>
    </div>
  );
}

export default Navbar;
