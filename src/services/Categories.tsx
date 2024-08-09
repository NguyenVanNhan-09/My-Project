import instance from '../API'
import { TCategories } from '../interfaces/Categories'
export const GET_ALL_Categories = async () => {
    try {
        const { data } = await instance.get('/categories')
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const GET_BY_ID_Category = async (id: number | string) => {
    try {
        const { data } = await instance.get(`/categories/${id}`)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const Create_Category = async (category: TCategories) => {
    try {
        const { data } = await instance.post('/categories', category)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const Delete_Category = async (id: number | string) => {
    try {
        const { data } = await instance.delete(`/categories/${id}`)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const Update_Category = async (id: number | string, category: TCategories) => {
    try {
        const { data } = await instance.patch(`/categories/${id}`, category)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
