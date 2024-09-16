import { Collection } from '../components/Collection'
import { TCollectionItem } from '../types/collectionType'

import classes from './CollectionPage.module.css'

const DUMMY_COLLECTION_ITEMS: Array<TCollectionItem> = [
	{ name: 'Chi0', id: 'id0' },
	{ name: 'Chi1', id: 'id1' },
]

export const CollectionPage: React.FC = () => {
	return (
		<>
			<header className={classes.collection}>
				<Collection
					name="Collection 1"
					id="id1"
					items={DUMMY_COLLECTION_ITEMS}
				/>
				<Collection
					name="Collection 2"
					id="id2"
					items={DUMMY_COLLECTION_ITEMS}
				/>
			</header>
		</>
	)
}
