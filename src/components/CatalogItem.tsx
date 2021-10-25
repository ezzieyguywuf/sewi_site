import React from 'react';
import ac from '../res/PAC1803711_air_conditioner.png'
import './CatalogItem.css'


function CatalogItem() {
  return (
    <div className="catalog-item">
      <img src={ac} alt="air conditioner"></img>
    </div>
  );
}

export default CatalogItem;
