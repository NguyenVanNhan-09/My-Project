import { useContext } from 'react'
import { cartCT } from '../../../contexts/CartContext'
import { TCart } from '../../../interfaces/Cart'

const CartsList = () => {
    const { carts, HandleDelete } = useContext(cartCT)
    return (
        <>
            <section className='bg-[#eeeeee] dark:bg-gray-900 py-3 sm:py-5 h-[100vh]'>
                <div className='px-4 mx-auto max-w-screen-2xl lg:px-12 h-full'>
                    <div className='relative flex flex-col justify-between w-full h-full overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg'>
                        <div>
                            <div className='flex px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4'>
                                <div className='flex items-center flex-1 space-x-4'>
                                    <h5>
                                        <span className='text-gray-500'>All Products:</span>
                                    </h5>
                                    <h5>
                                        <span className='text-gray-500'>Total sales:</span>
                                        <span className='dark:text-black'>$</span>
                                    </h5>
                                </div>
                                <div className='flex'>
                                    <form className='relative h-10 w-full min-w-[200px] mr-4'>
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
                                            placeholder=''
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Search
                                        </label>
                                    </form>
                                    <div className='flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3'>
                                        <button
                                            type='button'
                                            className='flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-[#1b5a7d] bg-white border border-[#eea216] rounded-lg focus:outline-none hover:bg-[#eea216] hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
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
                                    </div>
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
                                                Name
                                            </th>
                                            <th scope='col' className='px-4 py-3'>
                                                Phone
                                            </th>
                                            <th scope='col' className='px-4 py-3'>
                                                Address
                                            </th>
                                            <th scope='col' className='px-4 py-3'>
                                                Status
                                            </th>
                                            <th scope='col' className='px-4 py-3'>
                                                Items
                                            </th>
                                            <th scope='col' className='px-4 py-3'>
                                                Total
                                            </th>
                                            <th scope='col' className='px-4 py-3'>
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carts.map((cart: TCart, index: number) => (
                                            <tr
                                                key={index}
                                                className='border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'
                                            >
                                                <td className='w-4 px-4 py-3'>
                                                    <div className='flex items-center'>
                                                        <input
                                                            type='checkbox'
                                                            className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                                        />
                                                        <label className='sr-only'>checkbox</label>
                                                    </div>
                                                </td>
                                                <th
                                                    scope='row'
                                                    className='flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                                                >
                                                    {cart.name}
                                                </th>
                                                <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                                    {cart.phone}
                                                </td>
                                                <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                                    {cart.address}
                                                </td>
                                                <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                                    <button type='button' className='w-max'>
                                                        <div className='relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20'>
                                                            <span className=''>Paid</span>
                                                        </div>
                                                    </button>
                                                    {/* <button type='button' className='w-max'>
                                                        <div className='relative grid items-center px-2 py-1 font-sans text-xs font-bold text-black uppercase rounded-md select-none whitespace-nowrap bg-red-500/20'>
                                                            <span className=''>Unpaid</span>
                                                        </div>
                                                    </button> */}
                                                </td>
                                                <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                                    <button type='button' className='w-max'>
                                                        <div className='relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20'>
                                                            <span className=''>View</span>
                                                        </div>
                                                    </button>
                                                </td>
                                                <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                                    ${cart.total}
                                                </td>
                                                <td className='px-4 py-2'>
                                                    <button
                                                        className='mr-4'
                                                        title='Delete'
                                                        onClick={() => HandleDelete(cart.id)}
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartsList
