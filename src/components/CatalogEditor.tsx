import { useEffect, useState } from 'react';
import { ApiResponse } from "./Catalog";
import { CatalogProps } from "./CatalogItem";
import { CatalogEditButtonProps } from "./CatalogEditButton";
import { ItemEditor } from "./ItemEditor";
import CatalogEditorItem from "./CatalogEditorItem";
import "./CatalogEditor.css";

function CatalogEditor() {
  const [showModal, setShowModal] = useState(false);
  const [catalogItems, setCatalogItems] = useState([]);
  const [cachedProps, setCachedProps] = useState<CatalogProps>({
    product_code: "",
    price: 0,
    img_path: "",
    img_alt: "",
    brief: "",
    detailed: undefined,
    tech: [],
  });

  const edit = (props: CatalogProps) => {
    setCachedProps(props);
    setShowModal(true);
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
        {showModal ? <ItemEditor {...cachedProps} /> : catalogItems}
      </div>
    </div>
  );
}

export default CatalogEditor;
