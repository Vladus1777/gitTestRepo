import { TCollectionItem } from '../types/collectionType'

import classes from './Collection.module.css'

export const CollectionItem: React.FC<TCollectionItem> = (props) => {
	return (
		<div className={classes['collection-item']}>
			<p>{props.name}</p>
		</div>
	)
}
