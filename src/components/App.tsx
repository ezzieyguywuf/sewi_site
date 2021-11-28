import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import {CatalogItem, CatalogProps} from './CatalogItem'

type ApiResponse = {
  Count: number,
  Items: CatalogProps[],
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
          const catalogItem : CatalogProps = {...item}
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
