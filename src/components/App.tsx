import React from 'react';
import './App.css';
import Navbar from './Navbar'
import CatalogItem from './CatalogItem'
import ac from '../res/PAC1803711_air_conditioner.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <CatalogItem img_path={ac} img_alt="Air Conditioner"/>
    </div>
  );
}

export default App;
