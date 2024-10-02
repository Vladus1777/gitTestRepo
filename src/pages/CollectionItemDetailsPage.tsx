import { Link, redirect, useParams, useRouteLoaderData } from 'react-router-dom'
import {
    getCollectionItem,
    removeCollectionItem,
} from '../../firebase/firebase'
import LinkButton from '../components/Button/LinkButton'
import Button from '../components/Button/Button'
import { Avatar } from '../components/Avatar'
import { Tag } from '../components/Tag'

const CollectionItemDetailsPage: React.FC = () => {
    const { collectionItem } = useRouteLoaderData('collectionItemRoot')
    const params = useParams()

    return (
        <div className="mainOutline mx-auto max-w-screen-sm space-y-4 rounded-lg p-8 shadow-lg">
            <div className="flex justify-between">
                <h1 className="truncate">{collectionItem.name}</h1>
                <div className="flex items-center gap-4 text-nowrap">
                    <p>
                        Last Edited:{' '}
                        {new Date(collectionItem.editedAt).toLocaleString()}
                    </p>
                    <Link to={`/${collectionItem.createdBy}/collections`}>
                        {collectionItem.createdBy}
                    </Link>
                    <Avatar className="imgH" src="/logo.png" />
                </div>
            </div>
            <p className="text-gray-500">{collectionItem.description}</p>
            {collectionItem.smartLink && (
                <p>
                    <div className="flex justify-between">
                        <p>Smart Links:</p>
                        <Link to="smart-links">See All</Link>
                    </div>
                    <ul className="flex gap-2">
                        <li>https://console.firebase.google.com/</li>
                        <li>https://www.youtube.com/</li>
                    </ul>
                </p>
            )}
            {collectionItem.tags && (
                <p>
                    Tags:
                    <ul className="flex gap-2">
                        <li>
                            <Tag className="bg-orange-400">Fire</Tag>
                        </li>
                        <li>
                            <Tag className="bg-blue-500">water</Tag>
                        </li>
                    </ul>
                </p>
            )}
            {collectionItem.surveys && (
                <p>
                    <div className="flex justify-between">
                        <p>Surveys:</p>
                        <Link to="surveys">See All</Link>
                    </div>
                    <ul className="flex gap-2">
                        <li>https://console.firebase.google.com/</li>
                        <li>https://www.youtube.com/</li>
                    </ul>
                </p>
            )}
            {collectionItem.subcollections && <p>Subcollections:</p>}
            <div className="flex flex-col items-end gap-2">
                <LinkButton to="edit">Edit</LinkButton>
                <Button
                    onClick={async () => {
                        await removeCollectionItem(
                            params.userId,
                            params.collectionId,
                            params.itemId
                        )
                        return redirect('../')
                    }}
                >
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default CollectionItemDetailsPage

export async function loader({ params }) {
    const collectionId = params.collectionId
    const userId = params.userId
    const itemId = params.itemId

    const collectionItem = await getCollectionItem(userId, collectionId, itemId)

    return { collectionItem }
}
