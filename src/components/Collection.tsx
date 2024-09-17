import { useState } from "react";
import { TCollection } from "../types/collectionType";
import { CollectionItem } from "./CollectionItem";

export const Collection: React.FC<TCollection> = (props) => {
  const [galleryMode, setGalleryMode] = useState(false);

  return (
    <>
      <h1>{props.name}</h1>
      <button onClick={() => setGalleryMode((prevState) => !prevState)}>{`${
        galleryMode ? "Disable" : "Enable"
      } gallery mode`}</button>
      <ul>
        {props.items.map((item) => (
          <CollectionItem name={item.name} id={item.id} img={item.img}/>
        ))}
      </ul>
    </>
  );
};
