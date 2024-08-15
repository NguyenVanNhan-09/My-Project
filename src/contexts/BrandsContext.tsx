import React, { createContext, useEffect, useState } from 'react'
import { TBrands } from '../interfaces/Brands'
import { Delete_Brand, GET_ALL_Brands } from '../services/Brands'
import { TProduct } from '../interfaces/Products'
import { GET_ALL_Products_By_Brands } from '../services/Products'

type Props = {
    children: React.ReactNode
}

export const brandsCT = createContext({} as any)

const BrandsContext = ({ children }: Props) => {
    const [brands, setBrands] = useState<TBrands[]>([])
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const data = await GET_ALL_Brands()
                setBrands(data)
            } catch (error) {
                console.error('Có lỗi xảy ra:', error)
            }
        }

        fetchBrands()
    }, [])
    const handleDelete = async (id: number | string) => {
        const isConfirm = confirm('You sure???')
        if (isConfirm) {
            const data = await Delete_Brand(id)
            if (data) {
                alert('Delete Successfully!!!')
                setBrands(brands.filter((brand: TBrands) => brand.id !== id))
            } else {
                alert('error delete !!!')
            }
        }
    }
    return (
        <brandsCT.Provider
            value={{
                brands,
                handleDelete
            }}
        >
            {children}
        </brandsCT.Provider>
    )
}

export default BrandsContext
