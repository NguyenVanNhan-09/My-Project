import React, { createContext, useEffect, useState } from 'react'
import { TBrands } from '../interfaces/Brands'
import { Create_Brand, Delete_Brand, GET_ALL_Brands, Update_Brand } from '../services/Brands'
import { toast } from 'react-toastify'
import ConfirmModal from '../components/Admin/Confirm'

type Props = {
    children: React.ReactNode
}

export const brandsCT = createContext({} as any)

const BrandsContext = ({ children }: Props) => {
    const [brands, setBrands] = useState<TBrands[]>([])
    const [shouldFetch, setShouldFetch] = useState<boolean>(false)
    const [deleteId, setDeleteId] = useState<string | number | null>(null)
    const [showModal, setShowModal] = useState<boolean>(false)
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const data = await GET_ALL_Brands()
                setBrands(data)
            } catch (error) {
                toast.error(`${error}`, { position: 'top-center' })
            }
        }

        fetchBrands()
    }, [shouldFetch])

    const handleDelete = async (id: any) => {
        setDeleteId(id)
        setShowModal(true)
    }
    const confirmDelete = async () => {
        const data = await Delete_Brand(deleteId as any)
        if (data) {
            setBrands(brands.filter((brand) => brand.id !== deleteId))
        } else {
            toast.error('Error deleting product.', { position: 'top-center' })
        }
    }

    const handleUpdate = async (id: number | string, brand: TBrands) => {
        const data = await Update_Brand(id, brand)
        if (data) {
            const newBrand = brands.filter((brand) => (brand.id == id ? data : brand))
            setBrands(newBrand)
            setShouldFetch(!shouldFetch)
            toast.success('update successfully !!!', { position: 'top-center' })
        } else {
            toast.error('Error update product.', { position: 'top-center' })
        }
    }

    const handleAdd = async (user: TBrands) => {
        const data = await Create_Brand(user)
        if (data) {
            toast.success('Add product successfully !!!', { position: 'top-center' })
        } else {
            toast.error('Error create product.', { position: 'top-center' })
        }
        setBrands([...brands, data])
    }
    return (
        <brandsCT.Provider
            value={{
                brands,
                handleDelete,
                handleUpdate,
                handleAdd
            }}
        >
            {children}
            <ConfirmModal show={showModal} onClose={() => setShowModal(false)} onConfirm={confirmDelete} />
        </brandsCT.Provider>
    )
}

export default BrandsContext
