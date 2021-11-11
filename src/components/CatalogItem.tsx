import React from 'react';
import './CatalogItem.css'
import {CatalogTechnicalInfo, TechnicalInformation} from './CatalogTechnicalInfo'

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
      <div className="catalog-price catalog-subitem">${props.price.toFixed(2)}</div>
      <div className="catalog-brief catalog-subitem">{props.brief}</div>
      {(() => {if (props.detailed !== undefined) {
        return <div className="catalog-detailed catalog-subitem">{props.detailed}</div>
      }})()}
      <div className="catalog-table catalog-subitem">
        <CatalogTechnicalInfo data={props.tech}/>
      </div>
    </div>
  );
}
