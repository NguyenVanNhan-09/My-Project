import { useContext, useEffect, useState } from 'react'
import { brandsCT } from '../../../contexts/BrandsContext'
import { TBrands } from '../../../interfaces/Brands'
import { productCT } from '../../../contexts/ProductsContext'
import { TProduct } from '../../../interfaces/Products'
import ChangeStatus from '../../../components/Admin/ChangeStatus'
import AddBrand from './AddBrandList'
import UpdateBrand from './UpdateBrand'

const BrandsList = () => {
    const { brands, handleDelete } = useContext(brandsCT)
    const { products } = useContext(productCT)
    const [idBrand, setIdBrand] = useState<number | string | null>(null)
    const [modalType, setModalType] = useState<string | null>(null)
    const showChangeStatus = (id: any) => {
        setModalType('changeStatus')
        setIdBrand(id)
    }
    const showChangeUpdate = (id: any) => {
        setModalType('update')
        setIdBrand(id)
    }
    useEffect(() => {
        const modalStatus = document.getElementById('modal_change_status') as HTMLDialogElement
        const modalUpdate = document.getElementById('modal_update_brand') as HTMLDialogElement
        if (modalType === 'changeStatus' && idBrand !== null) {
            modalStatus?.showModal()
        } else if (modalType === 'update' && idBrand !== null) {
            modalUpdate?.showModal()
        }
        return () => {
            setModalType(null)
        }
    }, [idBrand, modalType])

    return (
        <>
            <div className='relative flex flex-col w-full h-full text-gray-70 bg-clip-border px-12 py-5 '>
                <div className='bg-white rounded-2xl'>
                    <div className='relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border'>
                        <div className='flex items-center justify-between gap-8 mb-4'>
                            <div>
                                <h5 className='block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
                                    Brands list
                                </h5>
                                <p className='block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700'>
                                    See information about all brands
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 shrink-0 sm:flex-row'>
                                <button
                                    className='flex select-none items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                                    type='button'
                                    onClick={() =>
                                        (document.getElementById('modal_add_brand') as HTMLDialogElement)?.showModal()
                                    }
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        aria-hidden='true'
                                        strokeWidth='2'
                                        className='w-4 h-4'
                                    >
                                        <path d='M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z'></path>
                                    </svg>
                                    Add brand
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                            <div></div>
                            <div className='w-full md:w-72'>
                                <div className='relative h-10 w-full min-w-[200px]'>
                                    <div className='absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth='1.5'
                                            stroke='currentColor'
                                            aria-hidden='true'
                                            className='w-5 h-5'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
                                        placeholder=' '
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Search
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 px-0 overflow-scroll'>
                        <table className='w-full mt-4 text-left table-auto min-w-max'>
                            <thead>
                                <tr>
                                    <th className='p-4 border-y border-blue-gray-100 bg-blue-gray-50/50'>
                                        <p className='block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70'>
                                            Brand
                                        </p>
                                    </th>
                                    <th className='p-4 border-y border-blue-gray-100 bg-blue-gray-50/50'>
                                        <p className='block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70'>
                                            Quantity_inventory
                                        </p>
                                    </th>
                                    <th className='p-4 border-y border-blue-gray-100 bg-blue-gray-50/50'>
                                        <p className='block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70'>
                                            Status
                                        </p>
                                    </th>
                                    <th className='p-4 border-y border-blue-gray-100 bg-blue-gray-50/50'>
                                        <p className='block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70'>
                                            Actions
                                        </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {brands.map((brand: TBrands) => (
                                    <tr key={brand.id}>
                                        <td className='p-4 border-b border-blue-gray-50'>
                                            <div className='flex items-center gap-3'>
                                                <img
                                                    src={brand.thumbnail}
                                                    alt='John Michael'
                                                    className='relative inline-block h-9 w-9 !rounded-full object-cover object-center'
                                                />
                                                <div>
                                                    <p className='block font-sans text-lg antialiased font-normal leading-normal text-blue-gray-900'>
                                                        {brand.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='p-4 border-b border-blue-gray-50'>
                                            <div className='flex flex-col'>
                                                {products.filter((product: TProduct) => product.brand === brand.id)
                                                    .length !== 0 ? (
                                                    <>
                                                        <div>
                                                            Inventory:
                                                            <span className='pl-3 font-semibold'>
                                                                {
                                                                    products.filter(
                                                                        (product: TProduct) =>
                                                                            product.brand === brand.id
                                                                    ).length
                                                                }
                                                            </span>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                                                            <span className='text-red-600'>Not Products</span>
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                        <td className='p-4 border-b border-blue-gray-50'>
                                            <div className='w-max'>
                                                {brand.status ? (
                                                    <>
                                                        <button
                                                            onClick={() => showChangeStatus(brand.id)}
                                                            type='button'
                                                            className='relative text-center grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20'
                                                        >
                                                            <span className=''>On sale</span>
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            onClick={() => showChangeStatus(brand.id)}
                                                            type='button'
                                                            className='relative text-center grid items-center px-2 py-1 font-sans text-xs font-bold text-red-900 uppercase rounded-md select-none whitespace-nowrap bg-red-500/20'
                                                        >
                                                            <span className=''>Stop selling</span>
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </td>

                                        <td className='p-4 border-b border-blue-gray-50'>
                                            <button
                                                className='relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                                                type='button'
                                                onClick={() => showChangeUpdate(brand.id)}
                                            >
                                                <span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        viewBox='0 0 24 24'
                                                        fill='currentColor'
                                                        aria-hidden='true'
                                                        className='w-4 h-4'
                                                    >
                                                        <path d='M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z'></path>
                                                    </svg>
                                                </span>
                                            </button>
                                            <button
                                                className='relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                                                type='button'
                                                onClick={() => handleDelete(brand.id)}
                                            >
                                                <span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className='w-4 h-4 fill-red-500 hover:fill-red-700'
                                                        viewBox='0 0 24 24'
                                                        fill='currentColor'
                                                        aria-hidden='true'
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
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='flex items-center justify-between p-4 border-t border-blue-gray-50'>
                        <p className='block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900'>
                            Page 1 of 10
                        </p>
                        <div className='flex gap-2'>
                            <button
                                className='select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                                type='button'
                            >
                                Previous
                            </button>
                            <button
                                className='select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                                type='button'
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {idBrand !== null && (
                <>
                    <UpdateBrand id={idBrand} />
                    <ChangeStatus id={idBrand} valueTrue={'On sale'} valueFalse={'Stop selling'} />
                </>
            )}
            <AddBrand />
        </>
    )
}

export default BrandsList
