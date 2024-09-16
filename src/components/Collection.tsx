import { CollectionList } from "./CollectionList";
import { TCollectionItem } from "../types/collectionType";

const DUMMY_COLLECTION_ITEMS: Array<TCollectionItem> = [
  { name: "Chi0", id: "id0" },{name: 'Chi1', id: 'id1'}
];

export const Collection: React.FC = () => {
  return (
    <>
      <CollectionList name="Collection 1" id="id1" items={DUMMY_COLLECTION_ITEMS} galleryMode={true}/>
    </>
  );
};
