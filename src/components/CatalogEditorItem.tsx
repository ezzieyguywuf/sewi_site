import { FC } from "react";
import { CatalogProps } from "./CatalogItem";
import { CatalogEditButton } from "./CatalogEditButton";

const CatalogEditorItem: FC<CatalogProps> = (props: CatalogProps) => {
  return (
    <div className="catalog-editor-row" >
      <div className="catalog-editor-item">{props.product_code}</div>
      <div className="catalog-editor-item">{props.brief}</div>
      <div className="catalog-editor-item">${props.price.toFixed(2)}</div>
      <div className="catalog-editor-button">
        <CatalogEditButton {...props} />
      </div>
    </div>
  );
}

export default CatalogEditorItem;
