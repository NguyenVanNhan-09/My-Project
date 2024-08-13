import { useEffect, useState } from 'react'
import { TProduct } from '../../interfaces/Products'
import Product from './Product'
import { GET_ALL_Products_By_Cate } from '../../services/Products'

type Props = {
    IdCategory: number | string
    nameCategory: string
}

const Products = ({ IdCategory, nameCategory }: Props) => {
    const [products, setProduct] = useState<TProduct[]>([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await GET_ALL_Products_By_Cate(IdCategory)
                setProduct(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    }, [IdCategory])

    return (
        <>
            <div id={nameCategory} className='p-4 mx-auto lg:max-w-7xl sm:max-w-full'>
                <div className='flex justify-between items-center mb-[48px] mt-[48px]'>
                    <div>
                        <h2 className='text-4xl font-extrabold text-gray-800 m-0'>{nameCategory}</h2>
                    </div>
                </div>
                {/* List-product */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6'>
                    {products.map((product: TProduct) => (
                        <Product key={product.id} data={product} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products
