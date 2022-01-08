import { CatalogProps } from "./CatalogItem";
import { useState, useEffect, SetStateAction, Dispatch, SyntheticEvent } from 'react';
import "./ItemEditor.css"

export interface ItemEditorProps extends CatalogProps {
  setModalState: Dispatch<SetStateAction<boolean>>;
}

export function ItemEditor(props: ItemEditorProps) {
  const [cachedProps, setCachedProps] = useState(props);

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

  function updateTechName(oldName: string, newName: string) {
    const newTech = cachedProps.tech.map(({name, value}) => {
      if (name === oldName) {
        return {name: newName, value: value};
      } else {
        return {name: name, value: value};
      }
    })
    setCachedProps({...cachedProps, tech: newTech})
  };

  function updateTechValue(checkName: string, newValue: string) {
    const newTech = cachedProps.tech.map(({name, value}) => {
      if (name === checkName) {
        return {name: name, value: newValue};
      } else {
        return {name: name, value: value};
      }
    })
    setCachedProps({...cachedProps, tech: newTech});
  };

  const techTableRows = cachedProps.tech === undefined ?
    <></> :
    cachedProps.tech.map(({name, value}, idx) => {
      return (
        <div className="table-row" key={idx}>
          <input
            type="text"
            className="table-input"
            value={name}
            required={true}
            placeholder="name"
            onChange={(e) => updateTechName(name, e.target.value)}
          />
          <input
            type="text"
            className="table-input"
            value={value}
            required={true}
            placeholder="value"
            onChange={(e) => updateTechValue(name, e.target.value)}
          />
        </div>
      );
    });
  const techTable = cachedProps.tech === undefined ?
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
        <img src={props.img_path} alt={cachedProps.img_alt}></img>
      </div>
      <div className="table-row">
        <label className="table-label">Image Description</label>
        <input
          type="text"
          className="table-input"
          value={cachedProps.img_alt}
          required={true}
          onChange={(e) => setCachedProps({...cachedProps, img_alt: e.target.value})}
        />
      </div>
      <div className="table-row">
        <input type="file" accept="image/*" />
      </div>
    </>;

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="editor-modal">
        <div className="table">
          <div className="table-row">
            <label className="table-label"> Product Code</label>
            <input
              type="text"
              className="table-input"
              value={cachedProps.product_code}
              onChange={(e) => setCachedProps({...cachedProps, product_code: e.target.value})}
            />
          </div>
          <div className="table-row">
            <label className="table-label"> Brief Description</label>
            <input
              type="text"
              className="table-input"
              value={cachedProps.brief}
              onChange={(e) => setCachedProps({...cachedProps, brief: e.target.value})}
            />
          </div>
          <div className="table-row">
            <label className="table-label">Extended Description</label>
            <input
              type="text"
              className="table-input"
              value={cachedProps.detailed}
              onChange={(e) => setCachedProps({...cachedProps, detailed: e.target.value})}
            />
          </div>
          <div className="table-row">
            <label className="table-label">Price</label>
            <input
              type="number"
              min="0"
              step="0.01"
              className="table-input"
              value={cachedProps.price}
              onChange={(e) => setCachedProps({...cachedProps, price: parseFloat(e.target.value)})}
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
