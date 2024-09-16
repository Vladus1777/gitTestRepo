import { TCollection } from "../types/collectionType";
import { CollectionItem } from "./CollectionItem";

export const CollectionList: React.FC<TCollection> = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      {props.galleryMode && <p>Gallery mode enabled.</p>}
      <ul>
        {props.items.map((item) => (
          <CollectionItem name={item.name} id={item.id} />
        ))}
      </ul>
    </>
  );
};
