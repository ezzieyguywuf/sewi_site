import { CatalogProps } from "./CatalogItem";

export interface CatalogEditButtonProps {
    clicked: (props: CatalogProps) => void,
    props: CatalogProps,
}

export function CatalogEditButton(props: CatalogEditButtonProps) {
  return (
    <button className="catalog-edit-button" onClick={() => props.clicked(props.props) }>edit</button>
  );
}
