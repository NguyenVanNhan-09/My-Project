import React, { createContext, useEffect, useState } from 'react'
import { TCategories } from '../interfaces/Categories'
import { GET_ALL_Categories } from '../services/Categories'

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
    return (
        <categoriesCT.Provider
            value={{
                categories
            }}
        >
            {children}
        </categoriesCT.Provider>
    )
}

export default CategoriesContext
