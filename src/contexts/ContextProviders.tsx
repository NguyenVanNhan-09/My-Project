import React from 'react'
import ProductsContext from './ProductsContext'
import CategoriesContext from './CategoriesContext'
import UsersContext from './UsersContext'
import BrandsContext from './BrandsContext'

type Props = {
    children: React.ReactNode
}

const ContextProviders = ({ children }: Props) => {
    return (
        <ProductsContext>
            <CategoriesContext>
                <BrandsContext>
                    <UsersContext>{children}</UsersContext>
                </BrandsContext>
            </CategoriesContext>
        </ProductsContext>
    )
}

export default ContextProviders
