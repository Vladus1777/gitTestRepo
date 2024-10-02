import { useRef } from 'react'
import {
    Form,
    redirect,
    useActionData,
    useNavigate,
    useNavigation,
} from 'react-router-dom'
import { useRouteLoaderData } from 'react-router-dom'
import {
    addNewCollection,
    authUser,
    sendUserEmailVerification,
    signInUser,
    signOutUser,
    unsubscribe,
    updateCollection,
    updateUserPassword,
    auth,
    reauthenticateUserWithCredential,
} from '../../../firebase/firebase'
import Button from '../Button/Button'
import Alert from '../Alert'
import { TCollectionFormData } from '../../types/collectionType'

// let FIELDS = [
//     ['name', 'Name'],
//     ['description', 'Description'],
//     ['image', 'Image'],
// ]

const AuthForm = ({ method }) => {
    const navigate = useNavigate()
    const navigation = useNavigation()
    // const actionData = useActionData()

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const isSubmitting = navigation.state === 'submitting'

    const cancelHandler = () => {
        navigate('..')
    }

    return (
        <section className="mx-auto max-w-2xl rounded-md border px-4 py-8 shadow-lg lg:py-8">
            <h2 className="mb-4 font-bold text-[--darkText] dark:text-[--lightText]">
                Auth Form
            </h2>
            <ul>
                <li>Email: {auth.currentUser?.email}</li>
                <li>displayName: {auth.currentUser?.displayName}</li>
            </ul>
            <Form method={method}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-[--darkText] dark:text-[--lightText]"
                        >
                            Email
                        </label>
                        <input
                            ref={emailRef}
                            type="email"
                            name="email"
                            id="email"
                            className="dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[--darkText] focus:border-violet-500 focus:ring-4 focus:ring-violet-300 dark:border-gray-600 dark:bg-gray-700 dark:text-[--lightText] dark:placeholder-gray-400"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-[--darkText] dark:text-[--lightText]"
                        >
                            Password
                        </label>
                        <input
                            ref={passwordRef}
                            type="password"
                            name="password"
                            id="password"
                            className="dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-[--darkText] focus:border-violet-500 focus:ring-4 focus:ring-violet-300 dark:border-gray-600 dark:bg-gray-700 dark:text-[--lightText] dark:placeholder-gray-400"
                            required
                        />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Button
                            light
                            onClick={() => {
                                console.log(emailRef.current.value)
                                console.log(passwordRef.current.value)
                            }}
                        >
                            Log Refs
                        </Button>
                        <Button
                            light
                            onClick={() => {
                                console.log(auth.currentUser)
                            }}
                        >
                            Log Current User
                        </Button>
                        <Button
                            light
                            onClick={() => {
                                authUser(
                                    emailRef.current.value,
                                    passwordRef.current.value
                                )
                            }}
                        >
                            Log In
                        </Button>
                        <Button
                            light
                            onClick={() =>
                                signInUser(
                                    emailRef.current.value,
                                    passwordRef.current.value
                                )
                            }
                        >
                            Sign In
                        </Button>
                        <Button light onClick={signOutUser}>
                            Sign Out
                        </Button>
                        <Button light onClick={sendUserEmailVerification}>
                            sendUserEmailVerification
                        </Button>
                        <Button
                            light
                            onClick={() =>
                                reauthenticateUserWithCredential(
                                    emailRef.current.value
                                )
                            }
                        >
                            reauthenticateUserWithCredential
                        </Button>
                        <Button
                            light
                            onClick={() =>
                                updateUserPassword(passwordRef.current.value)
                            }
                        >
                            updateUserPassword
                        </Button>
                        <Button light onClick={unsubscribe}>
                            Unsubscribe
                        </Button>
                    </div>
                    {/* {actionData && actionData.errors && (
                        <ul className="sm:col-span-2">
                            {actionData.errors.map((error, index) => (
                                <li key={index}>
                                    <Alert message={error} />
                                </li>
                            ))}
                        </ul>
                    )} */}
                </div>
                <div className="mt-8 flex justify-end gap-4 sm:col-span-2">
                    <Button
                        light
                        onClick={cancelHandler}
                        disabled={isSubmitting}
                    >
                        Cancel
                    </Button>
                    {/* <Button disabled={isSubmitting} type="submit">
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
                        Add Collection
                    </Button> */}
                </div>
            </Form>
        </section>
    )
}

export default AuthForm

// export async function action({ params, request }) {
//     const data = await request.formData()

//     let response
//     if (request.method === 'POST') {
//         const collectionItemFormData: TCollectionFormData = {
//             name: data.get('name'),
//             id: Date.now().toString(),
//             image: data.get('image'),
//             description: data.get('description'),
//             createdAt: Date.now(),
//             editedAt: Date.now(),
//             createdBy: params.userId,
//         }

//         console.log(collectionItemFormData)

//         response = await addNewCollection(params.userId, collectionItemFormData)
//     } else if (request.method === 'PATCH') {
//         let collectionFormData = {}
//         FIELDS.map(([key, value]) => (collectionFormData[key] = data.get(key)))

//         response = await updateCollection(
//             params.userId,
//             params.collectionId,
//             collectionFormData
//         )
//     }

//     // if (response.errors) {
//     //     return response
//     // }

//     return redirect('..')
// }
