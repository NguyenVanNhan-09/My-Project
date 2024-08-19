export interface TCart {
    name: string
    email: string
    phone: string
    address: string
    method_pay: string
    items: TCartItem
    total: number
    id: number
    voucher: string
}

export interface TCartItem {
    id?: number | string
    qty: number
    name: string
    brand: string
    gender: string
    price: number
    thumbnail: string
    is_in_inventory: boolean
}
