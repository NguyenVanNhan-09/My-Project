import { useContext } from 'react'
import BannerBottom from '../../components/Client/BannerBottom'
import { productCT } from '../../contexts/ProductsContext'
import { TProduct } from '../../interfaces/Products'
import Product from '../../components/Client/Product'

const Home = () => {
    const { products } = useContext(productCT)
    return (
        <>
            <div className='font-[sans-serif]'>
                <div className='p-4 mx-auto lg:max-w-7xl sm:max-w-full'>
                    <div className='flex justify-between items-center mb-[48px] mt-[48px]'>
                        <div>
                            <h2 className='text-4xl font-extrabold text-gray-800 m-0'>Popular products</h2>
                        </div>
                        <div className='flex '>
                            <div className='rounded-full text-xs sm:text-sm min-w-fit px-4 bg-white border-[#B5B5B5] border self-center py-2 mr-2'>
                                Cameras
                            </div>
                            <div className='rounded-full text-xs sm:text-sm min-w-fit px-4 bg-white border-[#B5B5B5] border self-center py-2 mr-2'>
                                Laptops
                            </div>
                            <div className='rounded-full text-xs sm:text-sm min-w-fit px-4 bg-white border-[#B5B5B5] border self-center py-2 mr-2'>
                                Tablets
                            </div>
                            <div className='rounded-full text-xs sm:text-sm min-w-fit px-4 bg-white border-[#B5B5B5] border self-center py-2 mr-2'>
                                Mouse
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6'>
                        {products.map((product: TProduct) => (
                            <Product key={product.id} data={product} />
                        ))}
                    </div>
                </div>
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
