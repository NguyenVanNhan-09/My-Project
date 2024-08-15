import React, { createContext, useEffect, useState } from 'react'
import { TCategories } from '../interfaces/Categories'
import { Delete_Category, GET_ALL_Categories } from '../services/Categories'

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
    return (
        <categoriesCT.Provider
            value={{
                categories,
                handleDelete
            }}
        >
            {children}
        </categoriesCT.Provider>
    )
}

export default CategoriesContext
