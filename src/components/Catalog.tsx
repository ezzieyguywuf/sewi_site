import { useEffect, useState } from 'react';
import {CatalogItem, CatalogProps} from './CatalogItem'
import './Catalog.css'

export type ApiResponse = {
  Count: number,
  Items: CatalogProps[],
  ResponseMetadata: any,
}

function Catalog() {
  const [catalogItems, setCatalogItems] = useState([]);

  useEffect(() => {

    fetch('https://rznkssur86.execute-api.us-east-1.amazonaws.com/test/getitems')
      .then(response => response.json())
      .then((data: ApiResponse) => {
        let items = [] as any;
        let key = 0;
        for(const item of data.Items) {
          const catalogItem : CatalogProps = {...item}
          items.push(<CatalogItem {...catalogItem} key={key} />);
          key += 1;
        }

        setCatalogItems(items)
      })
  }, []);

  return (<div className="catalog">{catalogItems}</div>);
}

export default Catalog;
