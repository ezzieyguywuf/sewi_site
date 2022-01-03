import { useEffect, useState } from 'react';
import { ApiResponse } from "./Catalog";
import { CatalogProps } from "./CatalogItem";
import { CatalogEditButtonProps } from "./CatalogEditButton";
import CatalogEditorItem from "./CatalogEditorItem";
import "./CatalogEditor.css";

function CatalogEditor() {
  const [catalogItems, setCatalogItems] = useState([]);

  const edit = (props: CatalogProps) => {
    console.log(`edit requested, code = ${props.product_code}`);
  }

  useEffect(() => {

    fetch('https://rznkssur86.execute-api.us-east-1.amazonaws.com/test/getitems')
      .then(response => response.json())
      .then((data: ApiResponse) => {
        let items = [] as any;
        let key = 0;
        for(const props of data.Items) {
          const buttonProps: CatalogEditButtonProps = {
            clicked: edit,
            props: props,
          };

          items.push(<CatalogEditorItem {...buttonProps} key={key} />);
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
