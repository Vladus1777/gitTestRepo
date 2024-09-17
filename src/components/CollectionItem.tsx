import { TCollectionItem } from '../types/collectionType'

export const CollectionItem: React.FC<TCollectionItem> = (props) => {
	return (
		<div>
			<p className="text-[20px]">{props.name}</p>
		</div>
	)
}
