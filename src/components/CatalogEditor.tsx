import { useEffect, useState } from 'react';
import { ApiResponse } from "./Catalog";
import { CatalogEditorProps } from "./CatalogEditorItem";
import CatalogEditorItem from "./CatalogEditorItem";
import "./CatalogEditor.css";

function CatalogEditor() {
  const [catalogItems, setCatalogItems] = useState([]);

  useEffect(() => {

    fetch('https://rznkssur86.execute-api.us-east-1.amazonaws.com/test/getitems')
      .then(response => response.json())
      .then((data: ApiResponse) => {
        let items = [] as any;
        let key = 0;
        for(const item of data.Items) {
          const props : CatalogEditorProps = {id: key, ...item};
          items.push(<CatalogEditorItem {...props} />);
          key += 1;
        }

        setCatalogItems(items)
      })
  }, []);
  return (
    <div className="App-column">
      <div className="catalog-editor-table">
        {catalogItems}
      </div>
    </div>
  );
}

export default CatalogEditor;
