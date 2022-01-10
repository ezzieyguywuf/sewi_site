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

  function updateTechName(index: number, newName: string) {
    const newTech = cachedProps.tech.map(({name, value}, idx) => {
      if (idx === index) {
        return {name: newName, value: value};
      } else {
        return {name: name, value: value};
      }
    })
    setCachedProps({...cachedProps, tech: newTech})
  };

  function updateTechValue(index: number, newValue: string) {
    const newTech = cachedProps.tech.map(({name, value}, idx) => {
      if (idx === index) {
        return {name: name, value: newValue};
      } else {
        return {name: name, value: value};
      }
    })
    setCachedProps({...cachedProps, tech: newTech});
  };

  function addTechRow() {
    const newTech = [...cachedProps.tech, {name: "", value: ""}];
    setCachedProps({...cachedProps, tech: newTech});
  }

  function removeTechRow(index: number) {
    const newTech = [...cachedProps.tech.slice(0, index), ...cachedProps.tech.slice(index+1)];
    setCachedProps({...cachedProps, tech: newTech});
  }

  function updateImage(files: FileList | null) {
    if (files === null || files.length === 0) {
      return;
    } else {
      const image_file = files[0];
      console.log(`filename = ${image_file.name}`)
      fetch(`https://rznkssur86.execute-api.us-east-1.amazonaws.com/test/getpresignedurl?filename=${image_file.name}`)
        .then(response => response.json())
        .then((response) => {
          const url = response.body;
          const formData = new FormData();
          formData.append(image_file.name, image_file);
          const request = {
            method: "POST",
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formData
          }
          console.log(`url = ${url}`)
          console.log(`request = ${JSON.stringify(request)}`)
          fetch(url, request)
          .then(response => {
              if (!response.ok) {
                throw new Error('Network response not OK');
              }
            console.log(`response = ${JSON.stringify(response)}`);
            return response.json();
          })
          .then(result => console.log(`success: ${result}`))
          .catch(error => console.log(`error: ${error}`));
      })
    }
  }

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
            onChange={(e) => updateTechName(idx, e.target.value)}
          />
          <input
            type="text"
            className="table-input"
            value={value}
            required={true}
            placeholder="value"
            onChange={(e) => updateTechValue(idx, e.target.value)}
          />
          <input type="button" value="remove" onClick={(e) => removeTechRow(idx)}/>
        </div>
      );
    });
  const techTable = cachedProps.tech === undefined ?
    <></> :
    <div className="table">
      {techTableRows}
      <div className="table-row">
        <button onClick={addTechRow}>Add Technical Info</button>
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
        <img src={cachedProps.img_path} alt={cachedProps.img_alt}></img>
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
        <input type="file" accept="image/*" onChange={(e) => updateImage(e.target.files)}/>
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
