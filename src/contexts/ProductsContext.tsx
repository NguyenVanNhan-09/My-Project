import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { TProduct } from '../interfaces/Products'
import { Create_Product, Delete_Product, GET_ALL_Products, Update_Product } from '../services/Products'
type Props = {
    children: React.ReactNode
}
export const productCT = createContext({} as any)
const ProductsContext = ({ children }: Props) => {
    const [products, setProducts] = useState<TProduct[]>([])
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await GET_ALL_Products() // Gọi hàm và lấy dữ liệu
                setProducts(data)
            } catch (error) {
                console.error('Có lỗi xảy ra:', error)
            }
        }

        fetchProducts()
    }, [])

    // Create
    const handleAdd = async (product: TProduct) => {
        const data = await Create_Product(product)
        if (data) {
            alert('Add product successfully!!!')
        } else {
            alert('error !!!')
        }
        setProducts([...products, data])
    }
    // Update
    const handleUpdate = async (id: number | string, product: TProduct) => {
        const data = await Update_Product(id, product)
        if (data) {
            alert('update successfully !!!')
            setProducts(products.filter((product) => (product.id == id ? data : product)))
        } else {
            alert('error update !!!')
        }
    }
    // Delete
    const handleDelete = async (id: number | string) => {
        const isConfirm = confirm('You sure???')
        if (isConfirm) {
            const data = await Delete_Product(id)
            if (data) {
                alert('Delete Successfully!!!')
                setProducts(products.filter((product: TProduct) => product.id !== id))
            } else {
                alert('error delete !!!')
            }
        }
    }

    return (
        <productCT.Provider
            value={{
                products,
                handleAdd,
                handleUpdate,
                handleDelete
            }}
        >
            {children}
        </productCT.Provider>
    )
}

export default ProductsContext
