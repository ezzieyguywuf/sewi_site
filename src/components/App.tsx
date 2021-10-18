import React from 'react';
import logo from '../res/sewi_logo.png';
import './App.css';
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <Navbar />
    </div>
  );
}

export default App;
