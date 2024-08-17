import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { TProduct } from '../interfaces/Products'
import { Create_Product, Delete_Product, GET_ALL_Products, Update_Product } from '../services/Products'
import { toast } from 'react-toastify'
import ConfirmModal from '../components/Admin/Confirm'
type Props = {
    children: React.ReactNode
}
export const productCT = createContext({} as any)
const ProductsContext = ({ children }: Props) => {
    const [products, setProducts] = useState<TProduct[]>([])
    const [showModal, setShowModal] = useState<boolean>(false)
    const [deleteId, setDeleteId] = useState<string | number | null>(null)
    const [shouldFetch, setShouldFetch] = useState<boolean>(false)
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await GET_ALL_Products()
                setProducts(data)
            } catch (error) {
                toast.error(`${error}`, { position: 'top-center' })
            }
        }

        fetchProducts()
    }, [shouldFetch])

    // Create
    const handleAdd = async (product: TProduct) => {
        const data = await Create_Product(product)
        if (data) {
            toast.success('Add product successfully !!!', { position: 'top-center' })
        } else {
            toast.error('Error create product.', { position: 'top-center' })
        }
        setProducts([...products, data])
    }
    // Update
    const handleUpdate = async (id: number | string, product: TProduct) => {
        const data = await Update_Product(id, product)
        if (data) {
            const newProducts = products.filter((product) => (product.id == id ? data : product))
            setProducts(newProducts)
            setShouldFetch(!shouldFetch)
            toast.success('update successfully !!!', { position: 'top-center' })
        } else {
            toast.error('Error update product.', { position: 'top-center' })
        }
    }
    // Delete
    const handleDelete = async (id: any) => {
        setDeleteId(id)
        setShowModal(true)
    }

    const confirmDelete = async () => {
        const data = await Delete_Product(deleteId as any)
        if (data) {
            setProducts(products.filter((product) => product.id !== deleteId))
        } else {
            toast.error('Error deleting product.', { position: 'top-center' })
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
            <ConfirmModal show={showModal} onClose={() => setShowModal(false)} onConfirm={confirmDelete} />
        </productCT.Provider>
    )
}

export default ProductsContext
