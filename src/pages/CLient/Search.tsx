import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GET_ALL_Products_By_Description, GET_ALL_Products_By_Name } from '../../services/Products'
import { TProduct } from '../../interfaces/Products'
import Product from '../../components/Client/Product'

const Search = () => {
    const [search] = useSearchParams()
    const [productsSearch, setProductsSearch] = useState<TProduct[]>([])
    const keyword = search.get('keywords')
    useEffect(() => {
        const fetchProductById = async () => {
            try {
                // Dùng Promise.all để tất cả function chạy cùng 1 lúc
                const [dataName, dataDesc]: [TProduct[], TProduct[]] = await Promise.all([
                    GET_ALL_Products_By_Name(keyword as string),
                    GET_ALL_Products_By_Description(keyword as string)
                ])
                // Nối mảng
                const mergedData = [...dataName, ...dataDesc]
                // self: Chính là mảng mergedData
                const uniqueProducts = mergedData.filter(
                    // Lặp những id nào trùng
                    (product, index, self) => index === self.findIndex((p) => p.id === product.id)
                )
                setProductsSearch(uniqueProducts)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }
        fetchProductById()
    }, [keyword])

    return (
        <>
            <div className='font-[sans-serif]'>
                <div className='p-4  mx-auto lg:max-w-7xl sm:max-w-full'>
                    <div className='flex justify-between items-center mb-[48px] mt-[48px]'>
                        <div>
                            <h2 className='text-4xl font-extrabold text-gray-800 m-0'>Keyword search: {keyword}</h2>
                        </div>
                    </div>
                    <div className='mb-20'>
                        {productsSearch.length > 0 ? (
                            <>
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6'>
                                    {productsSearch.map((product: TProduct, index: number) => (
                                        <Product key={index} data={product} />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className='flex justify-center text-red-500'>No products found with that keyword</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
