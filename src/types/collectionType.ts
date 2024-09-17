export type TCollectionItem = {
	name: string
	id: string
	img: string
}

export type TCollection = {
	name: string
	id: string
	img:string
	items: TCollectionItem[]
}
