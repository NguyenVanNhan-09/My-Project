import axios from 'axios'
import instance from '../API'
import { TProduct } from '../interfaces/Products'
export const GET_ALL_Products = async () => {
    try {
        const { data } = await instance.get('/products')
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const GET_BY_ID_Product = async (id: number | string) => {
    try {
        const { data } = await instance.get(`/products/${id}`)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const Create_Product = async (product: TProduct) => {
    try {
        const { data } = await instance.post('/products', product)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const Delete_Product = async (id: number | string) => {
    try {
        const { data } = await instance.delete(`/products/${id}`)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const Update_Product = async (id: number | string, product: TProduct) => {
    try {
        const { data } = await instance.patch(`/products/${id}`, product)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const GET_ALL_Products_By_Cate = async (idCate: number | string) => {
    try {
        const response = await instance.get(`/products?category=${idCate}`)
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const UploadImageProductToCloudinary = async (formData: any) => {
    try {
        const { data } = await axios.post('https://api.cloudinary.com/v1_1/dbaq8kdwn/upload', formData)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const UploadFilesImagesToCloudinary = async (formData: any) => {
    try {
        const { data } = await axios.post('https://api.cloudinary.com/v1_1/dbaq8kdwn/image/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}
// http://localhost:3000/products?brand=addidas => tìm kiếm theo brand
// http://localhost:3000/products?name=admin => tìm kiếm theo name
// http://localhost:3000/products?is_in_inventory=false => tìm kiếm theo is_in_inventory

export const GET_ALL_Products_By_Brands = async (idBrand: number | string) => {
    try {
        const { data } = await instance.post(`/products?brand=${idBrand}`)
        return data
    } catch (error) {
        console.log(error)
    }
}
