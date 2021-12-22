import './Navbar.css'
import React from 'react';
import logo from '../res/sewi_logo.png';
import Navlink from './Navlink';

function Navbar() {
  const navlinkdata = [
    {target: '/', text:'Home'},
    {target: '#!', text:'Premium'},
    {target: '/catalog', text:'Catalog'},
    undefined, // this will separate the "left" from the "right" data
    {target: '#!', text:'Contact'},
    {target: '/login', text:'Login'},
  ];

  const navlinks = navlinkdata.map((data, index) => {
      if (data === undefined) {
        return <div key={index} className="filler"></div>
      } else {
        return <div key={index}><Navlink {...data} /> </div>
      }
  }
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
