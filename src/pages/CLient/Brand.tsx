import { useContext } from 'react'
import { productCT } from '../../contexts/ProductsContext'
import { Link, useParams } from 'react-router-dom'
import { TProduct } from '../../interfaces/Products'
import Product from '../../components/Client/Product'
import BannerBottom from '../../components/Client/BannerBottom'
import { brandsCT } from '../../contexts/BrandsContext'
import { TBrands } from '../../interfaces/Brands'

const Brand = () => {
    const { id } = useParams()
    const { products } = useContext(productCT)
    const { brands } = useContext(brandsCT)
    const nameBrand = brands.find((brand: TBrands) => brand.id === id)?.name
    const imageBrand = brands.find((brand: TBrands) => brand.id === id)?.thumbnail
    return (
        <>
            <nav aria-label='Breadcrumb' className=' flex items-center py-6 bg-[#FDFDFD]'>
                <ol className='flex items-center gap-1 text-sm text-gray-600 ml-[110px] mr-[110px]'>
                    <li>
                        <Link to={'/'} className='block transition hover:text-gray-700'>
                            <span className='sr-only'> Home </span>

                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-4 w-4'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                                />
                            </svg>
                        </Link>
                    </li>

                    <li className='rtl:rotate-180'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path
                                fillRule='evenodd'
                                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </li>

                    <li>
                        <div className='block transition hover:text-gray-700'>Brand</div>
                    </li>

                    <li className='rtl:rotate-180'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path
                                fillRule='evenodd'
                                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </li>

                    <li>
                        <div className='block transition hover:text-gray-700'>{nameBrand}</div>
                    </li>
                </ol>
            </nav>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7 lg:gap-8 ml-[110px] mr-[110px] mt-10 mb-40'>
                <div className='rounded-lg lg:col-span-2 w-full'>
                    <span className='flex justify-center text-4xl font-bold py-2 text-[#eda515]'>{nameBrand}</span>
                    <div className='h-[260px]'>
                        <div
                            className='object-contain h-full bg-center bg-no-repeat rounded-xl'
                            style={{ backgroundImage: `url(${imageBrand})` }}
                        />
                    </div>
                </div>
                <div className='rounded-lg lg:col-span-5'>
                    <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-xl:gap-2 gap-3'>
                        {products
                            .filter((product: TProduct) => product.brand === id)
                            .map((item: TProduct) => (
                                <Product key={item.id} data={item} />
                            ))}
                    </div>
                </div>
            </div>
            <BannerBottom />
        </>
    )
}

export default Brand
