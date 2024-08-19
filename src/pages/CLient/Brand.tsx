import { useContext } from 'react'
import { productCT } from '../../contexts/ProductsContext'
import { useParams } from 'react-router-dom'
import { TProduct } from '../../interfaces/Products'
import Product from '../../components/Client/Product'
import BannerBottom from '../../components/Client/BannerBottom'
import { brandsCT } from '../../contexts/BrandsContext'
import { TBrands } from '../../interfaces/Brands'
import Nav from '../../components/Nav'

const Brand = () => {
    const { id } = useParams()
    const { products } = useContext(productCT)
    const { brands } = useContext(brandsCT)
    const keyMain = 'Brand'
    const nameBrand = brands.find((brand: TBrands) => brand.id === id)?.name
    const imageBrand = brands.find((brand: TBrands) => brand.id === id)?.thumbnail
    const keyNext = [nameBrand]
    return (
        <>
            <Nav keyword={keyNext} keyMain={keyMain} />
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
