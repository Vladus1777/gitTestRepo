import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import CollectionLayout from './pages/CollectionLayout'
import { CollectionPage } from './pages/CollectionPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <p>Error</p>,
		children: [
			{
				index: true,
				element: <p>Home Page</p>,
			},
			{
				path: 'collections',
				element: <CollectionLayout />,
				children: [
					{
						index: true,
						element: <CollectionPage />,
					},
					{
						path: ':collectionId',
						children: [
							{
								index: true,
								element: <p>Collection Page</p>,
							},
							{
								path: 'edit',
								element: <p>Edit Collection Page</p>,
							},
						],
					},
					{
						path: 'new',
						element: <p>New Collection Page</p>,
					},
				],
			},
		],
	},
])

const App = () => {
	return (
		<div style={{ backgroundColor: 'grey', height: '100vh' }}>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
