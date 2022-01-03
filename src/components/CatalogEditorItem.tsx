import { FC } from "react";
import { CatalogEditButton, CatalogEditButtonProps } from "./CatalogEditButton";

const CatalogEditorItem: FC<CatalogEditButtonProps> = (props: CatalogEditButtonProps) => {
  return (
    <div className="catalog-editor-row" >
      <div className="catalog-editor-item">{props.props.product_code}</div>
      <div className="catalog-editor-item">{props.props.brief}</div>
      <div className="catalog-editor-item">${props.props.price.toFixed(2)}</div>
      <div className="catalog-editor-button">
        <CatalogEditButton {...props} />
      </div>
    </div>
  );
}

export default CatalogEditorItem;
