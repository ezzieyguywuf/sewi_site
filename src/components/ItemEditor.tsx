import { CatalogProps } from "./CatalogItem";
import { useEffect, SetStateAction, Dispatch, SyntheticEvent } from 'react';
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

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
  }

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="editor-modal">
        <table>
        <tr>
          <label >Product Code
            <input type="text" defaultValue={props.product_code} />
          </label>
        </tr>
        <tr>
          <input type="submit" value="Submit" />
        </tr>
        </table>
      </form>
    </div>
  );
}
