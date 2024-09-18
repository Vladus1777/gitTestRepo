import { Link, useLoaderData } from 'react-router-dom'
import { getCollectionById } from '../mock/mockFunctions'
// import { Collection } from '../components/Collection'
// import { TCollectionItem } from '../types/collectionType'

const CollectionDetailsPage: React.FC = () => {
	// 2. Loades returen collection
	const { collection } = useLoaderData()

	return (
		<>
			<div>
				<p>{collection[0].name}</p>
				<p>{collection[0].id}</p>
				<ul>
					{collection[0].items.map((item) => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
			</div>
			<Link to="edit" className="border2 h-[10px] w-[10px]">
				Edit Collection
			</Link>
		</>
	)
}

export default CollectionDetailsPage

export async function loader({ params }) {
	const collectionId = params.collectionId
	const collection = await getCollectionById(collectionId)
	// 1. Returns collection
	return { collection }
}
