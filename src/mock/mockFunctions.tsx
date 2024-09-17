const DUMMY_COLLECTION_ITEMS = [
	{ name: 'Chi0', id: 'id0' },
	{ name: 'Chi1', id: 'id1' },
]

const DUMMY_COLLECTIONS = [
	{
		name: 'Collection 1',
		id: 'id1',
		items: DUMMY_COLLECTION_ITEMS,
	},
	{
		name: 'Collection 2',
		id: 'id2',
		items: DUMMY_COLLECTION_ITEMS,
	},
	{
		name: 'Collection 3',
		id: 'id3',
		items: DUMMY_COLLECTION_ITEMS,
	},
	{
		name: 'Collection 4',
		id: 'id4',
		items: DUMMY_COLLECTION_ITEMS,
	},
	{
		name: 'Collection 5',
		id: 'id5',
		items: DUMMY_COLLECTION_ITEMS,
	},
]

export async function getCollections() {
	await setTimeout(() => {
		console.log('getCollections()')
		return DUMMY_COLLECTIONS
	}, 1000)
}

export async function getCollectionById(id) {
	await setTimeout(() => {
		const filteredCollection = DUMMY_COLLECTIONS.filter(
			(collection) => collection.id === id
		)

		console.log('getCollectionById(id)', filteredCollection)

		return filteredCollection
	}, 1000)
}
