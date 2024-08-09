import React from 'react'
import ProductsContext from './ProductsContext'
import CategoriesContext from './CategoriesContext'
import UsersContext from './UsersContext'

type Props = {
    children: React.ReactNode
}

const ContextProviders = ({ children }: Props) => {
    return (
        <ProductsContext>
            <CategoriesContext>
                <UsersContext>{children}</UsersContext>
            </CategoriesContext>
        </ProductsContext>
    )
}

export default ContextProviders
