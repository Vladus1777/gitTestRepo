import { Link, useLoaderData } from 'react-router-dom'
import { Collection } from '../components/Collection'
import { getCollections } from '../mock/mockFunctions'

const CollectionPage: React.FC = () => {
	const { collections } = useLoaderData()

	return (
		<>
			<div>
				{collections.map((collection) => {
					return <Link to={collection.id}>{collection.name}</Link>
				})}
			</div>
		</>
	)
}

export default CollectionPage

export async function loader() {
	const collections = await getCollections();
	console.log('hola', collections)

	return { collections }
}
