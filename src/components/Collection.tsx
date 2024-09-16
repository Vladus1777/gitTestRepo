import { useState } from 'react'

import { TCollection } from '../types/collectionType'
import { CollectionItem } from './CollectionItem'

import classes from './Collection.module.css'

export const Collection: React.FC<TCollection> = (props) => {
	const [galleryMode, setGalleryMode] = useState(false)

	return (
		<>
			<h1>{props.name}</h1>
			<button
				onClick={() => setGalleryMode((prevState) => !prevState)}
			>{`${galleryMode ? 'Disalbe' : 'Enable'} gallery mode`}</button>
			<ul className={classes['collection-list']}>
				{props.items.map((item) => (
					<CollectionItem name={item.name} id={item.id} />
				))}
			</ul>
		</>
	)
}
