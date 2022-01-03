import { FC } from "react";
import { CatalogProps } from "./CatalogItem";
import { CatalogEditButton, CatalogEditButtonProps } from "./CatalogEditButton";

const CatalogEditorItem: FC<CatalogProps> = (props: CatalogProps) => {
  const edit = () => {
    console.log("edit requested");
  }
  const buttonProps: CatalogEditButtonProps = {
    clicked: edit,
    props: props,
  };

  return (
    <div className="catalog-editor-row" >
      <div className="catalog-editor-item">{props.product_code}</div>
      <div className="catalog-editor-item">{props.brief}</div>
      <div className="catalog-editor-item">${props.price.toFixed(2)}</div>
      <div className="catalog-editor-button">
        <CatalogEditButton {...buttonProps} />
      </div>
    </div>
  );
}

export default CatalogEditorItem;
