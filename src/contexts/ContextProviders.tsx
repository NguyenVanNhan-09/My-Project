import React from 'react'
import ProductsContext from './ProductsContext'
import CategoriesContext from './CategoriesContext'
import UsersContext from './UsersContext'
import BrandsContext from './BrandsContext'
import CartContext from './CartContext'

type Props = {
    children: React.ReactNode
}

const ContextProviders = ({ children }: Props) => {
    return (
        <CartContext>
            <ProductsContext>
                <CategoriesContext>
                    <BrandsContext>
                        <UsersContext>{children}</UsersContext>
                    </BrandsContext>
                </CategoriesContext>
            </ProductsContext>
        </CartContext>
    )
}

export default ContextProviders
