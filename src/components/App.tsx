import React from 'react';
import './App.css';
import Navbar from './Navbar'
import {CatalogItem, CatalogProps} from './CatalogItem'
import ac from '../res/PAC1803711_air_conditioner.png'

function App() {
  const catalogItemProps : CatalogProps= {
    product_code: "PAC1803711",
    price: 413.40,
    img_path: ac,
    img_alt: "Air Conditional",
    brief: "AIRE ACONDICIONADO SPLIT DE ALTA EFICIENCIA",
    detailed: "INCLUYE 3M DE TUBO DE COBRE Y CABLES DE CONEXIÓN",
    tech: [
      {
        name: "BTU",
        value: "18.000",
      },
      {
        name: "Poder",
        value: "220V / 60HZ",
      },
      {
        name: "Efficiencia",
        value: "10.5 SEER - 14 SEER",
      },
      {
        name: "REFRIGERANTE",
        value: "R-410ª",
      }
    ]
  };

  return (
    <div className="App">
      <Navbar />
      <CatalogItem {...catalogItemProps}/>
    </div>
  );
}

export default App;
