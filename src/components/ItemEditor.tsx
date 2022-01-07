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
  const [price, setPrice] = useState(props.price);
  const [tech, setTech] = useState(props.tech);
  const [img_alt, setImgAlt] = useState(props.img_alt);

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

  function updateTech(name: string, value: string) {
      const newTech = {...props.tech, name: name, value: value}
      setTech(newTech);
  };

  const techTableRows = tech === undefined ?
    <></> :
    props.tech.map(({name, value}) => {
      return (
        <div className="table-row">
          <label className="table-label">{name}</label>
          <input
            type="text"
            className="table-input"
            value={value}
            onChange={(e) => updateTech(name, e.target.value)}
          />
        </div>
      );
    });
  const techTable = tech === undefined ?
    <></> :
    <div className="table">
      {techTableRows}
      <div className="table-row">
        <button>Add Technical Info</button>
      </div>
    </div>;
  const image = props.img_path === "" ?
    <div>
      <div className="table-row">
        <button>Add Image</button>
      </div>
    </div> :
    <>
      <div className="table-row">
        <img src={props.img_path} alt={props.img_alt}></img>
      </div>
      <div className="table-row">
        <label className="table-label">Image Description</label>
        <input
          type="text"
          className="table-input"
          value={img_alt}
          required={true}
          onChange={(e) => setImgAlt(e.target.value)}
        />
      </div>
      <div className="table-row">
        <button>Change Image</button>
      </div>
    </>;

    // img_path: string,
    // img_alt: string,
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
            <label className="table-label">Price</label>
            <input
              type="number"
              min="0"
              step="0.01"
              className="table-input"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
          </div>
        </div>
        {techTable}
        {image}
        <button>Save</button>
      </form>
    </div>
  );
}
