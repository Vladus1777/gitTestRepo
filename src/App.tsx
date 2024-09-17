import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import CollectionLayout from "./pages/CollectionLayout";
import CollectionPage, {
  loader as collectionLoader,
} from "./pages/CollectionsPage";
import ErrorPage from "./pages/ErrorPage";
import CollectionDetailsPage, {
  loader as collectionDetailsLoader,
} from "./pages/CollectionDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <p>Home Page</p>,
      },
      {
        path: "collections",
        element: <CollectionLayout />,
        children: [
          {
            // collection list with preview
            index: true,
            element: <CollectionPage />,
            loader: collectionLoader,
          },
          {
            path: ":collectionId",
            children: [
              {
                // detailed collection page
                index: true,
                element: <CollectionDetailsPage />,
                loader: collectionDetailsLoader,
              },
              {
                path: "edit",
                element: <p>Edit Collection Page</p>,
              },
            ],
          },
          {
            path: "new",
            element: <p>New Collection Page</p>,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App
