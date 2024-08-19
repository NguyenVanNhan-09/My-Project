import instance from '../API'
import { TCart } from '../interfaces/Cart'
export const GET_ALL_Carts = () => {
    try {
        const data = instance.get('/carts')
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const GET_BY_ID_Cart = async (id: number | string) => {
    try {
        const { data } = await instance.get(`/carts/${id}`)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const Create_Cart = async (cart: TCart) => {
    try {
        const { data } = await instance.post('/carts', cart)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const Delete_Cart = async (id: number | string) => {
    try {
        const { data } = await instance.delete(`/carts/${id}`)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const Update_Cart = async (id: number | string, cart: TCart) => {
    try {
        const { data } = await instance.patch(`/carts/${id}`, cart)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
