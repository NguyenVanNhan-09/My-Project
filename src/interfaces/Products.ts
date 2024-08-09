export interface TProduct {
    id?: number | string
    name: string
    brand: string
    gender: string
    category: string
    price: number
    description: string
    is_in_inventory: boolean
    thumbnail: string
    images: string[]
}
