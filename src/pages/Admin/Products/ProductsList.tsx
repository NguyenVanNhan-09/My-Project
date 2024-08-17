import { useContext, useEffect, useState } from 'react'
import { productCT } from '../../../contexts/ProductsContext'
import { TProduct } from '../../../interfaces/Products'
import { categoriesCT } from '../../../contexts/CategoriesContext'
import { TCategories } from '../../../interfaces/Categories'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import ChangeStock from '../../../components/Admin/changeStock'
import Pagination from '../../../components/Admin/Pagination'
import { brandsCT } from '../../../contexts/BrandsContext'
import { TBrands } from '../../../interfaces/Brands'

const ProductsList = () => {
    const { products, handleDelete } = useContext(productCT)
    const { categories } = useContext(categoriesCT)
    const { brands } = useContext(brandsCT)
    const [idProduct, setIdProduct] = useState<number | null>(null)
    const [modalType, setModalType] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const itemsPerPage = 10
    console.log(idProduct)
    const showUpdate = (id: any) => {
        setModalType('update')
        setIdProduct(id)
    }

    const showChangeStock = (id: any) => {
        setModalType('changeStock')
        setIdProduct(id)
    }
    useEffect(() => {
        const modal = document.getElementById('modal_update_product') as HTMLDialogElement
        const stockModal = document.getElementById('modal_change_stock') as HTMLDialogElement

        if (modalType === 'update' && idProduct !== null) {
            modal?.showModal()
        } else if (modalType === 'changeStock' && idProduct !== null) {
            stockModal?.showModal()
        }

        // Reset modal type after showing
        return () => {
            setModalType(null)
        }
    }, [idProduct, modalType])
    const handlePageChange = (selectedPage: number) => {
        setCurrentPage(selectedPage)
    }

    // Phân trang dữ liệu
    const offset = currentPage * itemsPerPage
    const currentItems = products.slice(offset, offset + itemsPerPage)
    const reversedItems = [...currentItems].reverse()
    const pageCount = Math.ceil(products.length / itemsPerPage)
    return (
        <>
            <section className='bg-[#eeeeee] dark:bg-gray-900 py-3 sm:py-5 h-[100vh]'>
                <div className='px-4 mx-auto max-w-screen-2xl lg:px-12 h-full'>
                    <div className='relative flex flex-col justify-between w-full h-full overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg'>
                        <div>
                            <div className='flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4'>
                                <div className='flex items-center flex-1 space-x-4'>
                                    <h5>
                                        <span className='text-gray-500'>All Products:</span>
                                        <span className='dark:text-black'>123456</span>
                                    </h5>
                                    <h5>
                                        <span className='text-gray-500'>Total sales:</span>
                                        <span className='dark:text-black'>$88.4k</span>
                                    </h5>
                                </div>
                                <div className='flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3'>
                                    <button
                                        type='button'
                                        className='flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-[#1b5a7d] bg-white border border-[#eea216] rounded-lg focus:outline-none hover:bg-[#eea216] hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                                        onClick={() => {
                                            ;(
                                                document.getElementById('modal_add_product') as HTMLDialogElement
                                            )?.showModal()
                                        }}
                                    >
                                        <svg
                                            className='h-3.5 w-3.5 mr-2'
                                            fill='currentColor'
                                            viewBox='0 0 20 20'
                                            xmlns='http://www.w3.org/2000/svg'
                                            aria-hidden='true'
                                        >
                                            <path
                                                clipRule='evenodd'
                                                fillRule='evenodd'
                                                d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
                                            />
                                        </svg>
                                        Add new product
                                    </button>

                                    <button
                                        type='button'
                                        className='flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-[#1b5a7d] bg-white border border-[#eea216] rounded-lg focus:outline-none hover:bg-[#eea216] hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                                    >
                                        <svg
                                            className='w-4 h-4 mr-2'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth='2'
                                            stroke='currentColor'
                                            aria-hidden='true'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
                                            />
                                        </svg>
                                        Export
                                    </button>
                                </div>
                            </div>
                            {/* Table */}
                            <div className='overflow-x-auto'>
                                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                        <tr>
                                            <th scope='col' className='p-4'>
                                                <div className='flex items-center'>
                                                    <input
                                                        id='checkbox-all'
                                                        type='checkbox'
                                                        className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                                    />
                                                    <label htmlFor='checkbox-all' className='sr-only'>
                                                        checkbox
                                                    </label>
                                                </div>
                                            </th>
                                            <th scope='col' className='px-4 py-3'>
                                                Product
                                            </th>
                                            <th scope='col' className='px-4 py-3'>
                                                Brand
                                            </th>
                                            <th scope='col' className='px-4 py-3'>
                                                Category
                                            </th>
                                            <th scope='col' className='px-4 py-3'>
                                                Price
                                            </th>
                                            <th scope='col' className='px-4 py-3'>
                                                Rating
                                            </th>
                                            <th scope='col' className='px-4 py-3'>
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reversedItems.map((product: TProduct) => (
                                            <tr
                                                key={product.id}
                                                className='border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                            >
                                                <td className='w-4 px-4 py-3'>
                                                    <div className='flex items-center'>
                                                        <input
                                                            id={`checkbox-table-search-${product.id}`}
                                                            type='checkbox'
                                                            onClick={(e) => e.stopPropagation()}
                                                            className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                                        />
                                                        <label
                                                            htmlFor={`checkbox-table-search-${product.id}`}
                                                            className='sr-only'
                                                        >
                                                            checkbox
                                                        </label>
                                                    </div>
                                                </td>
                                                <th
                                                    scope='row'
                                                    className='flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                                                >
                                                    <img
                                                        src={product.thumbnail}
                                                        alt='Product Image'
                                                        className='w-auto h-8 mr-3'
                                                    />
                                                    {product.name}
                                                </th>
                                                <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                                    {brands.find((brand: TBrands) => product.brand === brand.id)
                                                        ?.name || 'Unkown'}
                                                </td>
                                                <td className='px-4 py-2'>
                                                    <span className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                                        {categories.find(
                                                            (category: TCategories) => product.category === category.id
                                                        )?.name || 'Unknown'}
                                                    </span>
                                                </td>
                                                <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                                    ${product.price}
                                                </td>
                                                <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                                    {product.is_in_inventory ? (
                                                        <button
                                                            type='button'
                                                            onClick={() => showChangeStock(product.id)}
                                                            className='w-max'
                                                        >
                                                            <div className='relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20'>
                                                                <span className=''>In Stock</span>
                                                            </div>
                                                        </button>
                                                    ) : (
                                                        <button
                                                            type='button'
                                                            onClick={() => showChangeStock(product.id)}
                                                            className='w-max'
                                                        >
                                                            <div className='relative grid items-center px-2 py-1 font-sans text-xs font-bold text-black uppercase rounded-md select-none whitespace-nowrap bg-red-500/20'>
                                                                <span className=''>Out Stock</span>
                                                            </div>
                                                        </button>
                                                    )}
                                                </td>
                                                <td className='px-4 py-2'>
                                                    <button
                                                        className='mr-4'
                                                        title='Edit'
                                                        type='button'
                                                        onClick={() => showUpdate(product.id)}
                                                    >
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            className='w-5 fill-blue-500 hover:fill-blue-700'
                                                            viewBox='0 0 348.882 348.882'
                                                        >
                                                            <path
                                                                d='m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z'
                                                                data-original='#000000'
                                                            />
                                                            <path
                                                                d='M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z'
                                                                data-original='#000000'
                                                            />
                                                        </svg>
                                                    </button>

                                                    <button
                                                        onClick={() => handleDelete(product.id)}
                                                        className='mr-4'
                                                        title='Delete'
                                                    >
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            className='w-5 fill-red-500 hover:fill-red-700'
                                                            viewBox='0 0 24 24'
                                                        >
                                                            <path
                                                                d='M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z'
                                                                data-original='#000000'
                                                            />
                                                            <path
                                                                d='M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z'
                                                                data-original='#000000'
                                                            />
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
                    </div>
                </div>
            </section>
            {idProduct !== null && (
                <>
                    <UpdateProduct id={idProduct} />
                    <ChangeStock id={idProduct} />
                </>
            )}
            <AddProduct />
        </>
    )
}

export default ProductsList
