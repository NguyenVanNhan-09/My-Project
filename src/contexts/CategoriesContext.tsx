import React, { createContext, useEffect, useState } from 'react'
import { TCategories } from '../interfaces/Categories'
import { Create_Category, Delete_Category, GET_ALL_Categories, Update_Category } from '../services/Categories'
import { toast } from 'react-toastify'
import ConfirmModal from '../components/Admin/Confirm'

type Props = {
    children: React.ReactNode
}

export const categoriesCT = createContext({} as any)

const CategoriesContext = ({ children }: Props) => {
    const [categories, setCategories] = useState<TCategories[]>([])
    const [shouldFetch, setShouldFetch] = useState<boolean>(false)
    const [deleteId, setDeleteId] = useState<string | number | null>(null)
    const [showModal, setShowModal] = useState<boolean>(false)
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await GET_ALL_Categories()
                setCategories(data)
            } catch (error) {
                console.error('Có lỗi xảy ra:', error)
            }
        }

        fetchCategories()
    }, [shouldFetch])

    const handleDelete = async (id: number | string) => {
        setDeleteId(id)
        setShowModal(true)
    }

    const confirmDelete = async () => {
        const data = await Delete_Category(deleteId as any)
        if (data) {
            alert('Delete Successfully!!!')
            setCategories(categories.filter((category: TCategories) => category.id !== deleteId))
        } else {
            alert('error delete !!!')
        }
    }

    const handleUpdate = async (id: number | string, category: TCategories) => {
        const data = await Update_Category(id, category)
        if (data) {
            const newCategory = categories.filter((category) => (category.id == id ? data : category))
            setCategories(newCategory)
            setShouldFetch(!shouldFetch)
            toast.success('update successfully !!!', { position: 'top-center' })
        } else {
            toast.error('Error update product.', { position: 'top-center' })
        }
    }

    const handleAdd = async (user: TCategories) => {
        const data = await Create_Category(user)
        if (data) {
            toast.success('Add product successfully !!!', { position: 'top-center' })
        } else {
            toast.error('Error create product.', { position: 'top-center' })
        }
        setCategories([...categories, data])
    }
    return (
        <categoriesCT.Provider
            value={{
                categories,
                handleDelete,
                handleUpdate,
                handleAdd
            }}
        >
            {children}
            <ConfirmModal show={showModal} onClose={() => setShowModal(false)} onConfirm={confirmDelete} />
        </categoriesCT.Provider>
    )
}

export default CategoriesContext
