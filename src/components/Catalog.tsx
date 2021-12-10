import { useEffect, useState } from 'react';
import {CatalogItem, CatalogProps} from './CatalogItem'

type ApiResponse = {
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
        for(const item of data.Items) {
          const catalogItem : CatalogProps = {...item}
          items.push(CatalogItem(catalogItem));
        }

        setCatalogItems(items)
      })
  }, []);

  return (<div>{catalogItems}</div>);
}

export default Catalog;
