import React, { createContext, useEffect, useState } from 'react'
import { TCategories } from '../interfaces/Categories'
import { Create_Category, Delete_Category, GET_ALL_Categories, Update_Category } from '../services/Categories'

type Props = {
    children: React.ReactNode
}

export const categoriesCT = createContext({} as any)

const CategoriesContext = ({ children }: Props) => {
    const [categories, setCategories] = useState<TCategories[]>([])
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
    }, [])
    const handleDelete = async (id: number | string) => {
        const isConfirm = confirm('You sure???')
        if (isConfirm) {
            const data = await Delete_Category(id)
            if (data) {
                alert('Delete Successfully!!!')
                setCategories(categories.filter((category: TCategories) => category.id !== id))
            } else {
                alert('error delete !!!')
            }
        }
    }
    const handleUpdate = async (id: number | string, category: TCategories) => {
        const data = await Update_Category(id, category)
        if (data) {
            alert('update successfully !!!')
            setCategories(categories.filter((category) => (category.id == id ? data : category)))
            location.reload()
        } else {
            alert('error update !!!')
        }
    }

    const handleAdd = async (user: TCategories) => {
        const data = await Create_Category(user)
        if (data) {
            alert('Add user successfully!!!')
            location.reload()
        } else {
            alert('error !!!')
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
        </categoriesCT.Provider>
    )
}

export default CategoriesContext
