import React from 'react';
import './CatalogItem.css'

interface CatalogProps {
    img_path: string,
    img_alt: string
}

function CatalogItem(props: CatalogProps) {
  return (
    <div className="catalog-item">
      <img src={props.img_path} alt={props.img_alt}></img>
    </div>
  );
}

export default CatalogItem;
