import { Collection } from '../components/Collection'
import { TCollectionItem } from '../types/collectionType'
import {getCollections} from '../mock/mockFunctions'
import { useEffect, useState } from 'react'

export const CollectionPage: React.FC = () => {
	const [items,setItems] = useState<TCollectionItem[]>([])

	useEffect(() => {
		const fetchCollections = async () => {
			const collections = await getCollections()
			setItems(collections[0].items)
		}
		fetchCollections()
	},[])

	return (
		<>
			<div>
				<Collection
					name="Collection 1"
					id="id1"
					img="https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg"
					items={items}
				/>
			</div>
		</>
	)
}
