export type TCollectionItem = {
	name: string
	id: string
}

export type TCollection = {
	name: string
	id: string
	items: Array<TCollectionItem>
}
