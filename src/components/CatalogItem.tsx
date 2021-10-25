import React from 'react';
import './CatalogItem.css'

export interface TechnicalInformation {
  name: string,
  value: string,
}

export interface CatalogProps {
    product_code: string,
    price: number,
    img_path: string,
    img_alt: string,
    brief: string,
    detailed: string | undefined,
    tech: TechnicalInformation[],
}

export function CatalogItem(props: CatalogProps) {
  return (
    <div className="catalog-item">
      <img src={props.img_path} alt={props.img_alt}></img>
    </div>
  );
}
