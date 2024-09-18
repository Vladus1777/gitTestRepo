import {
	Form,
	redirect,
	useActionData,
	useLoaderData,
	useNavigate,
	useNavigation,
} from 'react-router-dom'
import { addNewCollection } from '../mock/mockFunctions'

const CollectionForm = ({ method }) => {
	const navigate = useNavigate()
	const navigation = useNavigation()
	const loaderData = useLoaderData()
	const actionData = useActionData()

	// console.log('loaderData', loaderData)
	// console.log('actionData', actionData)

	// const collectionId = loaderData['collection'][0].id
	const isSubmitting = navigation.state === 'submitting'

	const cancelHandler = () => {
		navigate('..')
	}

	return (
		<Form method={method} className="bg-slate-500">
			{actionData && actionData.errors && (
				<ul>
					{actionData.errors.map((error, index) => (
						<li key={index}>{error}</li>
					))}
				</ul>
			)}
			<div className="mt-10 flex flex-col">
				<label>
					<span>Name</span>
					<input
						name="name"
						type="text"
						required
						defaultValue={
							loaderData
								? loaderData['collection'][0].id
								: undefined
						}
					/>
				</label>
				<label>
					<span>Image</span>
					<input
						name="image"
						type="url"
						required
						defaultValue={
							loaderData
								? loaderData['collection'][0].img
								: undefined
						}
					/>
				</label>
			</div>
			<div>
				{/* Needs disabled class */}
				<button
					type="button"
					onClick={cancelHandler}
					disabled={isSubmitting}
				>
					Cancel
				</button>
				<button disabled={isSubmitting}>Add Collection </button>
			</div>
		</Form>
	)
}

export default CollectionForm

// https://reactrouter.com/en/main/route/action#action
export async function action({ params, request }) {
	console.log('{ params, request }', { params, request })

	const data = await request.formData()

	const collectionData = {
		name: data.get('name'),
		image: data.get('image'),
	}

	// params is returned by default on this page
	// request is the http method sent by the form above

	if (request.method === 'POST') {
		const collectionId = params.collectionId
		// ...
	}

	const response = await addNewCollection({
		method: request.method,
		body: JSON.stringify(collectionData),
	})

	if (response.errors) {
		return response
	}
	// const newCollection = addNewCollection()

	return redirect('..')
}
