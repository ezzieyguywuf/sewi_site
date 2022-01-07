import { CatalogProps } from "./CatalogItem";
import { useState, useEffect, SetStateAction, Dispatch, SyntheticEvent } from 'react';
import "./ItemEditor.css"

export interface ItemEditorProps extends CatalogProps {
  setModalState: Dispatch<SetStateAction<boolean>>;
}

export function ItemEditor(props: ItemEditorProps) {
  const [product_code, setProductCode] = useState(props.product_code);
  const [brief, setBrief] = useState(props.brief);
  const [detailed, setDetailed] = useState(props.detailed);

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

    // price: number,
    // img_path: string,
    // img_alt: string,
    // brief: string,
    // detailed: string | undefined,
    // tech: TechnicalInformation[],
  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="editor-modal">
        <div className="table">
          <div className="table-row">
            <label className="table-label"> Product Code</label>
            <input
              type="text"
              className="table-input"
              value={product_code}
              onChange={(e) => setProductCode(e.target.value)}
            />
          </div>
          <div className="table-row">
            <label className="table-label"> Brief Description</label>
            <input
              type="text"
              className="table-input"
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
            />
          </div>
          <div className="table-row">
            <label className="table-label">Extended Description</label>
            <input
              type="text"
              className="table-input"
              value={detailed}
              onChange={(e) => setDetailed(e.target.value)}
            />
          </div>
          <div className="table-row">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
