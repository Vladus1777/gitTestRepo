import { Link, redirect, useParams, useRouteLoaderData } from 'react-router-dom'
import { getCollection, removeCollection } from '../../firebase/firebase'
import LinkButton from '../components/Button/LinkButton'
import Button from '../components/Button/Button'
import { Avatar } from '../components/Avatar'
import Card from '../components/Card'
import Tabs, { TabsItem } from '../components/Tabs/Tabs'
import { Tag } from '../components/Tag'

const CollectionDetailsPage: React.FC = () => {
    const { collection } = useRouteLoaderData('collectionsDetailsRoot')
    const params = useParams()

    let itemsList = null
    if (collection.itemsList) {
        itemsList = Object.entries(collection.itemsList)
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <Tabs>
                    <TabsItem
                        to=""
                        leftIcon={
                            <svg
                                className="me-2 size-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        }
                    >
                        Surveys
                    </TabsItem>
                    <TabsItem
                        to="subcollections"
                        leftIcon={
                            <svg
                                className="me-2 size-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        }
                    >
                        Subcollections
                    </TabsItem>
                    <TabsItem
                        to="smart-links"
                        leftIcon={
                            <svg
                                className="me-2 size-4 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        }
                    >
                        Smart links
                    </TabsItem>
                </Tabs>
                <div className="flex items-center gap-2">
                    <Tag className="bg-gray-400">Public</Tag>
                    <Button>Upvote</Button>
                </div>
            </div>
            {/* <hr /> */}
            <div className="space-y-4">
                <div className="flex justify-between">
                    <h1 className="truncate">{collection.name}</h1>
                    <div className="flex items-center gap-4 text-nowrap">
                        <p>
                            Last Edited:{' '}
                            {new Date(collection.editedAt).toLocaleString()}
                        </p>
                        <Link to={`/${collection.createdBy}/collections`}>
                            {collection.createdBy}
                        </Link>
                        <Avatar className="imgH" src="/logo.png" />
                    </div>
                </div>
                <p className="text-gray-500">{collection.description}</p>
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
                <p>Subcollections:</p>
                <ul className="flex gap-4 rounded-lg bg-gray-100 p-4">
                    {itemsList &&
                        itemsList.map((item) => {
                            return (
                                <li key={item[1].id}>
                                    <Card label={item[1].name} to={item[1].id}>
                                        <p>{item[1].description}</p>
                                    </Card>
                                </li>
                            )
                        })}
                    <li>
                        <Card className="p-0" to="collection-item-form">
                            <p className="flex justify-center">
                                <svg
                                    className="size-8 text-gray-500 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M14 17h6m-3 3v-6M4.857 4h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 9.143V4.857C4 4.384 4.384 4 4.857 4Zm10 0h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857h-4.286A.857.857 0 0 1 14 9.143V4.857c0-.473.384-.857.857-.857Zm-10 10h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 19.143v-4.286c0-.473.384-.857.857-.857Z"
                                    />
                                </svg>
                            </p>
                        </Card>
                    </li>
                </ul>
                <div className="flex flex-col items-end gap-2">
                    <LinkButton to="collection-item-form">
                        Add Collection Item
                    </LinkButton>
                    <LinkButton to="edit">Edit</LinkButton>
                    <Button
                        onClick={async () => {
                            await removeCollection(
                                params.userId,
                                params.collectionId
                            )
                            return redirect('..')
                        }}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CollectionDetailsPage

export async function loader({ params }) {
    const collectionId = params.collectionId
    const userId = params.userId

    const collection = await getCollection(userId, collectionId)
    console.log(collection)

    return { collection }
}
