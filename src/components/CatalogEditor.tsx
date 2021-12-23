import { useEffect, useState } from 'react';
import { ApiResponse } from "./Catalog";
import { CatalogProps } from "./CatalogItem";
import CatalogEditorItem from "./CatalogEditorItem";

function CatalogEditor() {
  const [catalogItems, setCatalogItems] = useState([]);

  useEffect(() => {

    fetch('https://rznkssur86.execute-api.us-east-1.amazonaws.com/test/getitems')
      .then(response => response.json())
      .then((data: ApiResponse) => {
        let items = [] as any;
        let key = 0;
        for(const item of data.Items) {
          const props : CatalogProps = {...item}
          items.push(<div key={key}><CatalogEditorItem {...props} /></div>);
          key += 1;
        }

        setCatalogItems(items)
      })
  }, []);
  return (
    <>
      <h1>Hello. This is the catalog editor</h1>
      {catalogItems}
    </>
  );
}

export default CatalogEditor;
