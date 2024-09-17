import { useLoaderData } from 'react-router-dom'
import { getCollectionById } from '../mock/mockFunctions'
// import { Collection } from '../components/Collection'
// import { TCollectionItem } from '../types/collectionType'

const CollectionDetailsPage: React.FC = () => {
	const { collection } = useLoaderData()

	return (
		<>
			<div>
				{/* <Collection
					name="Collection 1"
					id="id1"
					items={DUMMY_COLLECTION_ITEMS}
				/> */}
				<p>{collection[0].name}</p>
				<p>{collection[0].id}</p>
				<ul>
					{collection[0].items.map((item) => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default CollectionDetailsPage

export async function loader({ params }) {
	const collectionId = params.collectionId
	const collection = await getCollectionById(collectionId)
	return { collection }
}
