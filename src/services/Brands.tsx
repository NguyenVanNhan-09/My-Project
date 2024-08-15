import instance from '../API'
import { TBrands } from '../interfaces/Brands'
export const GET_ALL_Brands = async () => {
    try {
        const { data } = await instance.get('/brands')
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const GET_BY_ID_Brand = async (id: number | string) => {
    try {
        const { data } = await instance.get(`/brands/${id}`)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const Create_Brand = async (brand: TBrands) => {
    try {
        const { data } = await instance.post('/brands', brand)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const Delete_Brand = async (id: number | string) => {
    try {
        const { data } = await instance.delete(`/brands/${id}`)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const Update_Brand = async (id: number | string, brand: TBrands) => {
    try {
        const { data } = await instance.patch(`/brands/${id}`, brand)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
