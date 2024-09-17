import { TCollectionItem } from "../types/collectionType";

export const CollectionItem: React.FC<TCollectionItem> = (props) => {
  return (
    <li>
      <p className="text-[10px]">{props.name}</p>
      <img src={props.img} alt={props.name}/>
    </li>
  );
};
