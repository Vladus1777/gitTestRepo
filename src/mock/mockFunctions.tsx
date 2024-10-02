import { TCollection, TCollectionItem } from '../types/collectionType'
// add img for the meantime
const DUMMY_COLLECTION_ITEMS: TCollectionItem[] = [
	{
		name: 'Chi0',
		id: 'id0',
		img: 'https://via.placeholder.com/800x600',
	},
	{
		name: 'Chi1',
		id: 'id1',
		img: 'https://via.placeholder.com/800x600',
	},
]
// Collections 😀
const DUMMY_COLLECTIONS: TCollection[] = [
	{
		name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quod.',
		id: 'id1',
		items: DUMMY_COLLECTION_ITEMS,
		img: 'https://via.placeholder.com/400x450',
	},
	{
		name: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		id: 'id2',
		items: DUMMY_COLLECTION_ITEMS,
		img: 'https://via.placeholder.com/500x600',
	},
	{
		name: 'Lorem ipsum dolor sit.',
		id: 'id3',
		items: DUMMY_COLLECTION_ITEMS,
		img: 'https://via.placeholder.com/400x600',
	},
	{
		name: 'Lorem ipsum.',
		id: 'id4',
		items: DUMMY_COLLECTION_ITEMS,
		img: 'https://via.placeholder.com/350x200',
	},
	{
		name: 'Lorem ipsum dolor sit amet consectetur.',
		id: 'id5',
		items: DUMMY_COLLECTION_ITEMS,
		img: 'https://via.placeholder.com/500x450',
	},
]

export const getCollections = (): Promise<TCollection[]> =>
	new Promise((resolve) => {
		console.log('getCollections()')
		setTimeout(() => {
			resolve(DUMMY_COLLECTIONS)
		}, 1000)
	})

export const getCollectionById = (id: string): Promise<TCollection[]> =>
	new Promise((resolve) => {
		setTimeout(() => {
			const filterCollection = DUMMY_COLLECTIONS.filter(
				(collection) => collection.id === id
			)
			console.log('getCollection()', filterCollection)
			resolve(filterCollection)
		}, 1000)
	})

// el setTimeOut no funciona con asyncAwait

let httpStatus = 200

export const addNewCollection = async (formData) => {
	// ? replace resolve with reject for error handling
	return new Promise((resolve) => {
		setTimeout(() => {
			if (httpStatus === 500) {
				resolve({ errors: ['500'] })
			} else if (httpStatus === 404) {
				resolve({ errors: ['404'] })
			}
			resolve({ message: formData })
		}, 1000)
	})
}
