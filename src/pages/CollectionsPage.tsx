import { Link, useLoaderData } from 'react-router-dom'

import Card from '../components/Card'
import LinkButton from '../components/Button/LinkButton'
import { auth, getCollections } from '../../firebase/firebase'

const CollectionPage: React.FC = () => {
    const { collections } = useLoaderData()
    // const collections = null

    if (!collections) {
        return (
            <div>
                <p>No collections found</p>
                <LinkButton to="new">Add Collection</LinkButton>
            </div>
        )
    }

    const collectionsEntries = Object.entries(collections)
    console.log(collectionsEntries)
    return (
        <div>
            <ul
                className="flex flex-wrap gap-4 portrait:grid-cols-1"
                // "h-full columns-1 gap-1 lg:gap-2 sm:columns-2 lg:columns-3 xl:columns-4"
            >
                {collectionsEntries.map((collection) => {
                    const date = new Date(
                        collection[1].editedAt
                    ).toLocaleString()

                    return (
                        <li key={collection[0]}>
                            <Link
                                to={collection[1].id}
                                className="mainOutline flex h-full max-w-xs transform flex-col gap-2 rounded-lg bg-white p-6 hover:animate-pulse hover:bg-gray-50"
                            >
                                <h5 className="truncate text-lg font-bold tracking-tight">
                                    {collection[1].name}
                                </h5>
                                <p className="text-gray-500">
                                    {collection[1].description}
                                </p>
                                <p className="ml-auto text-xs font-semibold">
                                    {`Edited: ${date}`}
                                </p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            {/* <Gallery /> */}

            <div className="absolute bottom-0 right-0 m-4 flex flex-col gap-4">
                <LinkButton to="new">Add Collection</LinkButton>
            </div>
        </div>
    )
}

export default CollectionPage

export async function loader() {
    const collections = await getCollections(auth.currentUser?.uid)
    console.log('getCollections', collections)

    return { collections }
}
