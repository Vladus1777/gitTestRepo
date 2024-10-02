import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import CollectionLayout from './pages/CollectionLayout'
import CollectionPage, {
    loader as collectionLoader,
} from './pages/CollectionsPage'
import ErrorPage from './pages/ErrorPage'
import CollectionDetailsPage, {
    loader as collectionDetailsLoader,
} from './pages/CollectionDetailsPage'
import CollectionForm, {
    action as collectionFormAction,
} from './components/Form/CollectionForm'
import UserLayout from './pages/UserLayout'
import CollectionItemForm, {
    action as collectionItemFormAction,
} from './components/Form/CollectionItemForm'
import CollectionItemDetailsPage, {
    loader as collectionItemLoader,
} from './pages/CollectionItemDetailsPage'
import AuthForm from './components/Form/AuthForm'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: (
                    <>
                        <p className="first-letter:float-start first-letter:mr-2 first-letter:text-5xl first-letter:font-bold first-line:uppercase first-line:tracking-widest">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit nobis praesentium dolor magnam sequi
                            dolores aliquid facere repellat! Maxime nobis
                            assumenda neque rerum enim, unde ipsum molestias
                            animi repellendus quas accusamus molestiae dolore
                            consequuntur sunt. Voluptate recusandae modi fugit
                            laborum magnam. Eligendi, minima. Nesciunt
                            aspernatur corporis quasi, facere tempora similique
                            ducimus qui non exercitationem nisi veniam facilis
                            atque accusamus minima beatae odit assumenda error
                            architecto natus praesentium. Temporibus provident
                            id modi enim, qui at eaque quam quis corporis
                            blanditiis. Similique minima eius, distinctio
                            voluptatum harum pariatur quas quidem dolor debitis
                            alias molestiae nobis vero soluta reiciendis
                            sapiente esse dolores voluptate.s
                        </p>
                    </>
                ),
            },
            {
                path: ':userId',
                element: <UserLayout />,
                children: [
                    {
                        path: 'collections',
                        loader: collectionLoader,
                        element: <CollectionLayout />,
                        id: 'collectionsRoot',
                        children: [
                            {
                                index: true,
                                // change to collectionS page
                                element: <CollectionPage />,
                                loader: collectionLoader,
                            },
                            {
                                path: ':collectionId',
                                loader: collectionDetailsLoader,
                                id: 'collectionsDetailsRoot',
                                children: [
                                    {
                                        index: true,
                                        element: <CollectionDetailsPage />,
                                        // useRouteLoaderData('collectionsDetailsRoot')
                                    },
                                    {
                                        path: 'edit',
                                        element: (
                                            <CollectionForm method="PATCH" />
                                        ),
                                        // useRouteLoaderData('collectionsDetailsRoot')
                                        action: collectionFormAction,
                                    },
                                    {
                                        path: ':itemId',
                                        loader: collectionItemLoader,
                                        id: 'collectionItemRoot',
                                        children: [
                                            {
                                                index: true,
                                                element: (
                                                    <CollectionItemDetailsPage />
                                                ),
                                                // useRouteLoaderData('collectionItemRoot')
                                            },
                                            {
                                                path: 'edit',
                                                element: (
                                                    <CollectionItemForm method="PATCH" />
                                                ),
                                                // useRouteLoaderData('collectionItemRoot')
                                                action: collectionItemFormAction,
                                            },
                                        ],
                                    },
                                    {
                                        path: 'collection-item-form',
                                        element: (
                                            <CollectionItemForm method="POST" />
                                        ),
                                        action: collectionItemFormAction,
                                    },
                                ],
                            },
                            {
                                path: 'new',
                                element: <CollectionForm method="POST" />,
                                action: collectionFormAction,
                            },
                        ],
                    },
                ],
            },
            {
                path: 'auth',
                element: (
                    <>
                        <AuthForm />
                    </>
                ),
            },
        ],
    },
])

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
