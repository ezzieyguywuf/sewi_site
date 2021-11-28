import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import {CatalogItem, CatalogProps} from './CatalogItem'
import ac from '../res/PAC1803711_air_conditioner.png'

type ApiItem = {
  detailed: string,
  brief: string,
  price: number,
  product_code: string
  tech: any
}
type ApiResponse = {
  Count: number,
  Items: ApiItem[],
  ResponseMetadata: any,
}

function App() {
  const [catalogItems, setCatalogItems] = useState([]);

  useEffect(() => {

    fetch('https://rznkssur86.execute-api.us-east-1.amazonaws.com/test/getitems')
      .then(response => response.json())
      .then((data: ApiResponse) => {
        let items = [] as any;
        for(const item of data.Items) {
          const catalogItem : CatalogProps = {
            ...item,
            img_path: ac,
            img_alt: "Aire Conditional"
          }
          items.push(CatalogItem(catalogItem));
        }

        setCatalogItems(items)
      })
  }, []);


  return (
    <div className="App">
      <Navbar />
      {catalogItems}
    </div>
  );
}

export default App;
