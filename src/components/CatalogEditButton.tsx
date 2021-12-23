import { CatalogProps } from "./CatalogItem";

export function CatalogEditButton(props: CatalogProps) {
  const edit = () => {
    console.log("edit requested");
  }
  return (
    <button className="catalog-edit-button" onClick={edit}>edit</button>
  );
}
