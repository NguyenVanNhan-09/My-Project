import { useContext } from 'react'
import BannerBottom from '../../components/Client/BannerBottom'
import { productCT } from '../../contexts/ProductsContext'
import { TProduct } from '../../interfaces/Products'
import Product from '../../components/Client/Product'
import Products from '../../components/Client/Products'
import { categoriesCT } from '../../contexts/CategoriesContext'
import { TCategories } from '../../interfaces/Categories'

const Home = () => {
    const { products } = useContext(productCT)
    const { categories } = useContext(categoriesCT)

    return (
        <>
            <div className='font-[sans-serif]'>
                <div className='p-4 mx-auto lg:max-w-7xl sm:max-w-full'>
                    <div className='flex justify-between items-center mb-[48px] mt-[48px]'>
                        <div>
                            <h2 className='text-4xl font-extrabold text-gray-800 m-0'>Popular products</h2>
                        </div>
                        <div className='flex '>
                            {categories.map((item: TCategories) => (
                                <a
                                    href={`#${item.name}`}
                                    key={item.id}
                                    className='rounded-full text-xs sm:text-sm min-w-fit px-4 bg-white border-[#B5B5B5] border self-center py-2 mr-2'
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* List-product */}
                    <div
                        id='new-products'
                        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6'
                    >
                        {products
                            .reverse()
                            .slice(0, 8)
                            .map((product: TProduct) => (
                                <Product key={product.id} data={product} />
                            ))}
                    </div>
                </div>
                {/* list Products by category */}
                {categories.map((item: TCategories) => (
                    <Products idBrand={''} key={item.id} IdCategory={item.id} nameCategory={item.name} />
                ))}
            </div>
            {/* Phân trang */}
            <nav className='flex items-center gap-x-1 justify-center mt-10'>
                <div className='flex items-center gap-x-1'>
                    <span className='min-h-[16px] min-w-4 flex justify-center items-center border border-gray-200 py-[1px] px-[1px] rounded-full dark:border-[#ADADAD] dark:bg-white/10'></span>
                    <span className='min-h-[16px] min-w-4 flex justify-center items-center border border-gray-200 py-[1px] px-[1px] rounded-full dark:border-[#ADADAD] dark:bg-white/10'></span>
                    <span className='min-h-[16px] min-w-4 flex justify-center items-center border border-gray-200 py-[1px] px-[1px] rounded-full dark:border-[#ADADAD] dark:bg-white/10'></span>
                </div>
            </nav>
            <BannerBottom />
        </>
    )
}

export default Home
