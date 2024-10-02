import {
    Form,
    redirect,
    useActionData,
    useNavigate,
    useNavigation,
} from 'react-router-dom'
import { useRouteLoaderData } from 'react-router-dom'
import { addNewCollection, updateCollection } from '../../../firebase/firebase'
import Button from '../Button/Button'
import Alert from '../Alert'
import { TCollectionFormData } from '../../types/collectionType'

let FIELDS = [
    ['name', 'Name'],
    ['description', 'Description'],
    ['image', 'Image'],
]

const CollectionForm = ({ method }) => {
    const navigate = useNavigate()
    const navigation = useNavigation()
    const actionData = useActionData()

    let collection
    if (method === 'PATCH') {
        const { collection: data } = useRouteLoaderData(
            'collectionsDetailsRoot'
        )
        collection = { ...data }
    }

    const isSubmitting = navigation.state === 'submitting'

    if (collection) {
        FIELDS = Object.entries(collection)
    }

    const cancelHandler = () => {
        navigate('..')
    }

    return (
        <section className="mx-auto max-w-2xl rounded-md border px-4 py-8 shadow-lg lg:py-8">
            <h2 className="mb-4 font-bold text-[--darkText] dark:text-[--lightText]">
                {collection ? 'Edit Collection' : 'Add Collection'}
            </h2>
            <Form method={method}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    {FIELDS.map(([key, value]) => {
                        return (
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor={key}
                                    className="mb-2 block text-sm font-medium text-[--darkText] dark:text-[--lightText]"
                                >
                                    {key}
                                </label>
                                <input
                                    // TODO
                                    type="text"
                                    name={key}
                                    id={key}
                                    className="dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[--darkText] focus:border-violet-500 focus:ring-4 focus:ring-violet-300 dark:border-gray-600 dark:bg-gray-700 dark:text-[--lightText] dark:placeholder-gray-400"
                                    defaultValue={value}
                                    required
                                />
                            </div>
                        )
                    })}
                    {actionData && actionData.errors && (
                        <ul className="sm:col-span-2">
                            {actionData.errors.map((error, index) => (
                                <li key={index}>
                                    <Alert message={error} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="mt-8 flex justify-end gap-4 sm:col-span-2">
                    <Button
                        light
                        onClick={cancelHandler}
                        disabled={isSubmitting}
                    >
                        Cancel
                    </Button>
                    <Button disabled={isSubmitting} type="submit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                            />
                        </svg>
                        {collection ? 'Apply Changes' : 'Add Collection'}
                    </Button>
                </div>
            </Form>
        </section>
    )
}

export default CollectionForm

export async function action({ params, request }) {
    const data = await request.formData()

    let response
    if (request.method === 'POST') {
        const collectionItemFormData: TCollectionFormData = {
            name: data.get('name'),
            id: Date.now().toString(),
            image: data.get('image'),
            description: data.get('description'),
            createdAt: Date.now(),
            editedAt: Date.now(),
            createdBy: params.userId,
        }

        console.log(collectionItemFormData)

        response = await addNewCollection(params.userId, collectionItemFormData)
    } else if (request.method === 'PATCH') {
        let collectionFormData = {}
        FIELDS.map(([key, value]) => (collectionFormData[key] = data.get(key)))

        response = await updateCollection(
            params.userId,
            params.collectionId,
            collectionFormData
        )
    }

    // if (response.errors) {
    //     return response
    // }

    return redirect('..')
}
