import { CatalogProps } from "./CatalogItem";
import { useEffect, SetStateAction, Dispatch } from 'react';
import "./ItemEditor.css"

export interface ItemEditorProps extends CatalogProps {
  setModalState: Dispatch<SetStateAction<boolean>>;
}

export function ItemEditor(props: ItemEditorProps) {

  useEffect(() => {
    const handleEscape = (event: any) => {
      if (event.key === "Escape") {
        props.setModalState(false);
      }
    };

    document.addEventListener("keydown", handleEscape, false);

    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    }
  }, [props]);

  return (
    <div className="modal" >
      <div className="editor-modal">
        Item Editor
      </div>
    </div>
   )
}
