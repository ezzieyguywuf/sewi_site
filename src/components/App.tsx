import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Catalog from './Catalog'

function App() {

  return (
    <div className="App">
      <div className="App-column">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
