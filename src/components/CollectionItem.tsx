import { TCollectionItem } from '../types/collectionType'

export const CollectionItem: React.FC<TCollectionItem> = (props) => {
  return (
    <p>{props.name}</p>
  )
}
