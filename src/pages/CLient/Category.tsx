import BannerBottom from '../../components/Client/BannerBottom'

const Category = () => {
    return (
        <>
            <nav aria-label='Breadcrumb' className=' flex items-center py-6 bg-[#FDFDFD]'>
                <ol className='flex items-center gap-1 text-sm text-gray-600 ml-[110px] mr-[110px]'>
                    <li>
                        <a href='#' className='block transition hover:text-gray-700'>
                            <span className='sr-only'> Home </span>

                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-4 w-4'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    strokeWidth='2'
                                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                                />
                            </svg>
                        </a>
                    </li>

                    <li className='rtl:rotate-180'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path
                                fill-rule='evenodd'
                                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                clip-rule='evenodd'
                            />
                        </svg>
                    </li>

                    <li>
                        <a href='#' className='block transition hover:text-gray-700'>
                            Category
                        </a>
                    </li>

                    <li className='rtl:rotate-180'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path
                                fill-rule='evenodd'
                                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                clip-rule='evenodd'
                            />
                        </svg>
                    </li>

                    <li>
                        <a href='#' className='block transition hover:text-gray-700'>
                            Men's clothing
                        </a>
                    </li>
                </ol>
            </nav>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 ml-[110px] mr-[110px] mt-10 mb-10'>
                <div className='rounded-lg h-screen bg-gray-200'>
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
                                            value=''
                                            className='w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
                                            checked
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
                                            checked
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
                                            checked
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
                                            checked
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
                                            checked
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
                                            checked
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
                                            checked
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
                                            checked
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
                                            checked
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
                                            checked
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
                                            checked
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
                <div className='rounded-lg lg:col-span-2'>
                    <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-xl:gap-2 gap-3'>
                        <a
                            href='client/product-detail/{{item.id}}'
                            className='border border-[#B6B6B6] shadow-md overflow-hidden rounded-[19.67px] cursor-pointer hover:-translate-y-2 transition-all relative event_hover min-h-[332px]'
                        >
                            <div className='bg-[#87BCD9] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='18px'
                                    className='fill-gray-800 inline-block'
                                    viewBox='0 0 64 64'
                                >
                                    <path
                                        d='M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z'
                                        data-original='#000000'
                                    ></path>
                                </svg>
                            </div>
                            <div className='w-11/12 h-[168.18px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4'>
                                <img
                                    src='{{item.image}}'
                                    alt='Product 1'
                                    className='h-full w-[282.28px] min-h-[168.18px] object-contain'
                                />
                            </div>
                            <div className='p-6  w-[100%] remove'>
                                <h3 className='text-lg font-extrabold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis'>
                                    title
                                </h3>
                                <h4 className='text-lg text-gray-800 font-bold mt-2'>price</h4>

                                <div className='flex space-x-2 mt-6'>
                                    <svg
                                        className='w-5 fill-[#facc15]'
                                        viewBox='0 0 14 13'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                                    </svg>
                                    <svg
                                        className='w-5 fill-[#facc15]'
                                        viewBox='0 0 14 13'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                                    </svg>
                                    <svg
                                        className='w-5 fill-[#facc15]'
                                        viewBox='0 0 14 13'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                                    </svg>
                                    <svg
                                        className='w-5 fill-[#CED5D8]'
                                        viewBox='0 0 14 13'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                                    </svg>
                                    <svg
                                        className='w-5 fill-[#CED5D8]'
                                        viewBox='0 0 14 13'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                                    </svg>
                                </div>
                            </div>
                            <div className='absolute bottom-[10%] justify-between w-full mb-4 event_move'>
                                <div className='border border-[#87BCD9] rounded-[19px] flex flex-1 items-center justify-around ml-4 mr-4 w-[204.58px] h-[60px] bg-[#87BCD9]'>
                                    <p className='text-[19px]'>add to cart</p>
                                    <i className='ti-shopping-cart text-[15.5px] bg-[#EDA415] px-2 py-2 rounded-full text-white'></i>
                                </div>
                                <div className='border border-[#87BCD9] rounded-[19px] w-[70.81px] h-[60px] flex items-center justify-center mr-4 bg-[#87BCD9]'>
                                    <i className='ti-eye text-[23px]'></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <BannerBottom />
        </>
    )
}

export default Category
