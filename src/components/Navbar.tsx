import './Navbar.css'
import React from 'react';

function Navbar() {
  return (
    <ul>
      <li><a className="active" href="#!">Home</a></li>
      <li><a href="#!">Premium</a></li>
      <li><a href="#!">Catalog</a></li>
      <li className="right"><a href="#!">Contact</a></li>
    </ul>
  );
}

export default Navbar;
