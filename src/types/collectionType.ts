export type TCollection = {
    name: string
    id: string
    img: string
    items: TCollectionItem[]
}

export type TCollectionFormData = {
    name: string
    id: string
    description: string
    image: string
    createdAt: number
    editedAt: number
    createdBy: string
}

export type TCollectionItemFormData = {
    name: string
    id: string
    description: string
    image: string
    createdAt: number
    editedAt: number
    createdBy: string
}

export type TCollectionItem = {
    name: string
    id: string
    description: string
    image: string
    createdAt: number
    editedAt: number
}
