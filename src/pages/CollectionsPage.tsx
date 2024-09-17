import { Link, useLoaderData } from "react-router-dom";
// import { Collection } from '../components/Collection'
import { getCollections } from "../mock/mockFunctions";

const CollectionPage: React.FC = () => {
  const { collections } = useLoaderData();

  return (
    <ul className="h-full columns-1 gap-1 lg:gap-2 sm:columns-2 lg:columns-3 xl:columns-4">
      {collections.map((collection) => {
        return (
          <li className="">
            <Link to={collection.id}>
              {collection.name}
              <img src={collection.img} alt={collection.name} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CollectionPage;

export async function loader() {
  const collections = await getCollections();
  console.log("hola", collections);

  return { collections };
}
