import { useContext, useState } from 'react'
import BannerBottom from '../../components/Client/BannerBottom'
import { productCT } from '../../contexts/ProductsContext'
import { TProduct } from '../../interfaces/Products'
import { useParams } from 'react-router-dom'
import Product from '../../components/Client/Product'
import Nav from '../../components/Nav'
import { categoriesCT } from '../../contexts/CategoriesContext'
import { TCategories } from '../../interfaces/Categories'

const Category = () => {
    const { id } = useParams()
    const { products } = useContext(productCT)
    const { categories } = useContext(categoriesCT)
    const [checked, setChecked] = useState(false)

    const handleChange = (event: any) => {
        setChecked(event.target.checked)
    }

    const keyMain = 'Category'
    const keyNext = [categories.find((cate: TCategories) => cate.id === id)?.name]
    return (
        <>
            <Nav keyword={keyNext} keyMain={keyMain} />

            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7 lg:gap-8 ml-[110px] mr-[110px] mt-10 mb-10'>
                <div className='rounded-lg lg:col-span-2 h-scree'>
                    <span className='text-red-500'>
                        Cảnh báo: Chức năng này chưa được phát triển không thể xử dụng !!!
                    </span>
                    <div className='flex h-screen flex-col justify-between border-e bg-white'>
                        <div className='px-4 py-6'>
                            <div className='flex justify-between'>
                                <h2>Category</h2>
                                <p>reset</p>
                            </div>
                            <ul className='mt-6 space-y-1 border-black border-b pb-3'>
                                <li className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <input
                                            id='checked-checkbox'
                                            type='checkbox'
                                            className='w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
                                            checked={checked}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor='checked-checkbox'
                                            className='text-sm font-normal cursor-pointer text-gray-600'
                                        >
                                            men's clothing
                                        </label>
                                    </div>
                                    <div>10</div>
                                </li>
                                <li className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <input
                                            id='checked-checkbox'
                                            type='checkbox'
                                            value=''
                                            className='w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
                                            checked={checked}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor='checked-checkbox'
                                            className='text-sm font-normal cursor-pointer text-gray-600'
                                        >
                                            jewelery
                                        </label>
                                    </div>
                                    <div>6</div>
                                </li>
                                <li className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <input
                                            id='checked-checkbox'
                                            type='checkbox'
                                            value=''
                                            className='w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
                                            checked={checked}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor='checked-checkbox'
                                            className='text-sm font-normal cursor-pointer text-gray-600'
                                        >
                                            electronics
                                        </label>
                                    </div>
                                    <div>5</div>
                                </li>
                                <li className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <input
                                            id='checked-checkbox'
                                            type='checkbox'
                                            value=''
                                            className='w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
                                            checked={checked}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor='checked-checkbox'
                                            className='text-sm font-normal cursor-pointer text-gray-600'
                                        >
                                            women's clothing
                                        </label>
                                    </div>
                                    <div>5</div>
                                </li>
                                <li className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <input
                                            id='checked-checkbox'
                                            type='checkbox'
                                            value=''
                                            className='w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
                                            checked={checked}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor='checked-checkbox'
                                            className='text-sm font-normal cursor-pointer text-gray-600'
                                        >
                                            Laptops
                                        </label>
                                    </div>
                                    <div>6</div>
                                </li>
                                <li className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <input
                                            id='checked-checkbox'
                                            type='checkbox'
                                            value=''
                                            className='w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
                                            checked={checked}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor='checked-checkbox'
                                            className='text-sm font-normal cursor-pointer text-gray-600'
                                        >
                                            Tablets
                                        </label>
                                    </div>
                                    <div>3</div>
                                </li>
                                <li className='flex justify-between '>
                                    <div className='flex items-center'>
                                        <input
                                            id='checked-checkbox'
                                            type='checkbox'
                                            value=''
                                            className='w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
                                            checked={checked}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor='checked-checkbox'
                                            className='text-sm font-normal cursor-pointer text-gray-600'
                                        >
                                            Cameras
                                        </label>
                                    </div>
                                    <div>2</div>
                                </li>
                            </ul>

                            <div className=''>
                                <h2>Avaliability</h2>
                            </div>
                            <ul className='mt-6 space-y-1 border-black border-b pb-3'>
                                <div className='flex justify-between'>
                                    <h2>0 selected</h2>
                                    <p>reset</p>
                                </div>
                                <li className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <input
                                            id='checked-checkbox'
                                            type='checkbox'
                                            value=''
                                            className='w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
                                            checked={checked}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor='checked-checkbox'
                                            className='text-sm font-normal cursor-pointer text-gray-600'
                                        >
                                            In stock
                                        </label>
                                    </div>
                                    <div>10</div>
                                </li>
                                <li className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <input
                                            id='checked-checkbox'
                                            type='checkbox'
                                            value=''
                                            className='w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
                                            checked={checked}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor='checked-checkbox'
                                            className='text-sm font-normal cursor-pointer text-gray-600 opacity-80'
                                        >
                                            Out of stock
                                        </label>
                                    </div>
                                    <div>0</div>
                                </li>
                            </ul>

                            <div className=''>
                                <h2>Product type</h2>
                            </div>
                            <ul className='mt-6 space-y-1 border-black border-b pb-3'>
                                <div className='flex justify-between'>
                                    <h2>0 selected</h2>
                                    <p>reset</p>
                                </div>
                                <li className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <input
                                            id='checked-checkbox'
                                            type='checkbox'
                                            value=''
                                            className='w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
                                            checked={checked}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor='checked-checkbox'
                                            className='text-sm font-normal cursor-pointer text-gray-600'
                                        >
                                            Smart-watchh
                                        </label>
                                    </div>
                                    <div>5</div>
                                </li>
                            </ul>

                            <div className=''>
                                <h2>Brand</h2>
                            </div>
                            <ul className='mt-6 space-y-1 border-black border-b pb-3'>
                                <div className='flex justify-between'>
                                    <h2>0 selected</h2>
                                    <p>reset</p>
                                </div>
                                <li className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <input
                                            id='checked-checkbox'
                                            type='checkbox'
                                            value=''
                                            className='w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
                                            checked={checked}
                                            onChange={handleChange}
                                        />
                                        <label
                                            htmlFor='checked-checkbox'
                                            className='text-sm font-normal cursor-pointer text-gray-600'
                                        >
                                            Smart-watch
                                        </label>
                                    </div>
                                    <div>5</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='rounded-lg lg:col-span-5'>
                    <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-xl:gap-2 gap-3'>
                        {products
                            .filter((product: TProduct) => product.category === id)
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

export default Category
