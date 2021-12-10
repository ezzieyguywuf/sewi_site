import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Catalog from './Catalog'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
