import { FC } from "react";
import { CatalogProps } from "./CatalogItem";
import { CatalogEditButton } from "./CatalogEditButton";

export interface CatalogEditorProps extends CatalogProps {
  id: number;
}

const CatalogEditorItem: FC<CatalogEditorProps> = (props: CatalogEditorProps) => {
  return (
    <div className="catalog-editor-row" key={props.id}>
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
