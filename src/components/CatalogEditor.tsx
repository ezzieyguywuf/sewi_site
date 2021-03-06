import { useEffect, useState } from 'react';
import { ApiResponse } from "./Catalog";
import { CatalogProps } from "./CatalogItem";
import { CatalogEditButtonProps } from "./CatalogEditButton";
import { ItemEditor, ItemEditorProps } from "./ItemEditor";
import CatalogEditorItem from "./CatalogEditorItem";
import "./CatalogEditor.css";

function CatalogEditor() {
  const [showModal, setShowModal] = useState(false);
  const [catalogItems, setCatalogItems] = useState([]);
  const [cachedProps, setCachedProps] = useState<ItemEditorProps>({
    product_code: "",
    price: 0,
    img_path: "",
    img_alt: "",
    brief: "",
    detailed: undefined,
    tech: [],
    setModalState: setShowModal,
  });

  const edit = (props: CatalogProps) => {
    setCachedProps({...props, setModalState: setShowModal});
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

  const catalogTable =
    <div className="catalog-editor-table">
      {catalogItems}
    </div>;
  return (
    <div className="App-column">
      {showModal ? <ItemEditor {...cachedProps} /> : catalogTable}
    </div>
  );
}

export default CatalogEditor;
