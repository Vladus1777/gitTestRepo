import { Collection } from '../components/Collection'
import { TCollectionItem } from '../types/collectionType'

export const CollectionPage: React.FC = () => {
	return (
		<>
			<div>
				<Collection
					name="Collection 1"
					id="id1"
					items={DUMMY_COLLECTION_ITEMS}
				/>
			</div>
		</>
	)
}
