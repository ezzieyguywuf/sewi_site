import './Navbar.css'
import React from 'react';
import logo from '../res/sewi_logo.png';
import Navlink from './Navlink';

function Navbar() {
  const navlinkdata = [
    {target: '#!', text:'Home'},
    {target: '#!', text:'Premium'},
    {target: '#!', text:'Catalog'},
    {target: '#!', text:'Contact', right:true},
  ];

  const navlinks = navlinkdata.map((data, index) =>
    <Navlink key={index} {...data} />
  )

  return (
    <div className="navbar">
        <img className="navitem" src={logo} alt="logo" />
        {navlinks}
        <label htmlFor="hamburger" className="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" className="hamburger"/>
    </div>
  );
}

export default Navbar;
