const Detail = () => {
    return (
        <>
            <div className='font-sans p-8 tracking-wide max-lg:max-w-2xl mx-auto ml-[110px] mr-[110px]'>
                <div className='grid items-start grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='space-y-4 text-center lg:sticky top-8'>
                        <div className='bg-gray-100 p-4 flex items-center sm:h-[380px] rounded'>
                            <img
                                src='images'
                                alt='productDetail'
                                className='w-full max-h-full object-contain object-top'
                            />
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <div className='bg-gray-100 p-4 flex items-center rounded sm:h-[182px]'>
                                <img
                                    src='images'
                                    alt='productDetail'
                                    className='w-full max-h-full object-contain object-top'
                                />
                            </div>

                            <div className='bg-gray-100 p-4 flex items-center rounded sm:h-[182px]'>
                                <img
                                    src='images'
                                    alt='productDetail'
                                    className='w-full max-h-full object-contain object-top'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='max-w-xl'>
                        <div>
                            <h2 className='text-2xl font-extrabold text-gray-800'>title</h2>
                        </div>

                        <div className='mt-4'>
                            <h3 className='text-gray-800 text-3xl font-bold'>price</h3>
                        </div>

                        <div className='flex space-x-1 mt-4'>
                            <svg
                                className='w-5 fill-gray-800'
                                viewBox='0 0 14 13'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                            </svg>
                            <svg
                                className='w-5 fill-gray-800'
                                viewBox='0 0 14 13'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                            </svg>
                            <svg
                                className='w-5 fill-gray-800'
                                viewBox='0 0 14 13'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                            </svg>
                            <svg
                                className='w-5 fill-gray-800'
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

                            <button
                                type='button'
                                className='px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center !ml-4'
                            >
                                No reviews
                            </button>
                        </div>

                        <div className='flex space-x-1 mt-4'>
                            <h1>
                                Availability:{' '}
                                <span className='text-[#30BD57]  text-[16px]'>
                                    {' '}
                                    <span className='ti-check text-[#30BD57] text-[16px]'></span>In stock
                                </span>
                            </h1>
                        </div>
                        <div className='flex space-x-1 mt-4'>
                            <p className='text-[15px] pb-3 text-[#5D5D5D] border-b w-full border-[#BDBDBD]'>
                                Hurry up! only 34 productDetail left in stock!
                            </p>
                        </div>

                        {/* Color */}
                        <div className='flex space-x-1 mt-4 items-center'>
                            <h3 className='text-lg font-bold text-gray-800'>Choose a Color: </h3>
                            <div className='flex flex-wrap gap-4'>
                                <button
                                    type='button'
                                    className='w-6 h-6 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0'
                                ></button>
                                <button
                                    type='button'
                                    className='w-6 h-6 bg-gray-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0'
                                ></button>
                                <button
                                    type='button'
                                    className='w-6 h-6 bg-orange-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0'
                                ></button>
                                <button
                                    type='button'
                                    className='w-6 h-6 bg-red-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0'
                                ></button>
                            </div>
                        </div>

                        {/* Size */}
                        <div className='mt-10 flex items-center space-x-1'>
                            <h3 className='text-lg font-bold text-gray-800'>Sizes:</h3>
                            <div className='flex flex-wrap gap-4 ml-3'>
                                <button
                                    type='button'
                                    className='w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0'
                                >
                                    SM
                                </button>
                                <button
                                    type='button'
                                    className='w-12 h-11 border-2 hover:border-gray-800 border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0'
                                >
                                    MD
                                </button>
                                <button
                                    type='button'
                                    className='w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0'
                                >
                                    LG
                                </button>
                                <button
                                    type='button'
                                    className='w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0'
                                >
                                    XL
                                </button>
                                <button
                                    type='button'
                                    className='w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0'
                                >
                                    XXL
                                </button>
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className='flex items-center mt-6 space-x-1'>
                            <h3 className='text-lg font-bold text-gray-800'>Quantity</h3>
                            <div className='flex divide-x border w-max rounded overflow-hidden'>
                                <button type='button' className='bg-gray-100 w-12 h-10 font-semibold'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='w-3 fill-current inline'
                                        viewBox='0 0 124 124'
                                    >
                                        <path
                                            d='M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z'
                                            data-original='#000000'
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    type='button'
                                    className='bg-transparent w-12 h-10 font-semibold text-gray-800 text-lg'
                                >
                                    1
                                </button>
                                <button type='button' className='bg-gray-800 text-white w-12 h-10 font-semibold'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='w-3 fill-current inline'
                                        viewBox='0 0 42 42'
                                    >
                                        <path
                                            d='M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z'
                                            data-original='#000000'
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-4 mt-8 border-b w-full border-[#BDBDBD] pb-4'>
                            <a
                                href='client/cart/{{productDetail.id}}'
                                type='button'
                                className='min-w-[200px] flex justify-center px-4 py-3 hover:opacity-45 text-white text-sm font-semibold  bg-[#EDA415] rounded-[20px]'
                            >
                                Buy now
                            </a>
                            <a
                                href=''
                                type='button'
                                className='min-w-[200px] flex justify-center px-4 py-2.5 border  bg-[#EDA415]  text-white hover:bg-gray-50 text-sm font-semibold  rounded-[20px]'
                            >
                                Add to cart
                            </a>
                        </div>

                        <div className='flex space-x-1 mt-4'>
                            <h1>
                                Sku: <span className='text-[#30BD57]  text-[16px]'>01133-9-9</span>
                            </h1>
                        </div>
                        <div className='flex space-x-1 mt-4'>
                            <h1>
                                Category: <span className='text-[#30BD57]  text-[16px]'>20% off</span>
                            </h1>
                        </div>
                        <div className='flex space-x-1 mt-4'>
                            <h1>
                                Share: <span className='text-[#30BD57]  text-[16px]'>gg, fb, ig</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mb-6 mt-4 ml-[110px] mr-[110px]'>
                <button
                    type='button'
                    className='px-6 py-2.5 rounded-full text-[#373737] border border-black border-solid text-sm tracking-wider font-semibold bg-transparent outline-none  hover:bg-gray-400 active:bg-blue-600 mr-4'
                >
                    Description
                </button>
                <button
                    type='button'
                    className='px-6 py-2.5 rounded-full text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#003F62] hover:opacity-80 active:bg-purple-600'
                >
                    Reviews
                </button>
            </div>

            <div className=' ml-[110px] mr-[110px] h-[223px] w-[100wh] border border-black border-solid rounded-[20px] mb-14'>
                <div className='flex flex-col items-start justify-center h-full ml-10'>
                    <h2 className='text-[#003F62] text-[22px] font-bold'>Customer reviews</h2>
                    <p className='text-[#4F4F4F] text-[18px] mt-3 mb-3'>No reviews yet</p>
                    <div className='text-white text-[18px] bg-[#003F62] px-2 py-1'>Write a review</div>
                </div>
            </div>

            <div className='ml-[110px] mr-[110px] mb-[100px]'>
                <h2 className='text-[#003F62] text-[22px] font-bold mb-6'>Related product</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6 mt-6'>
                    <a
                        href='client/product-detail/item'
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
                                src='item'
                                alt='Product 1'
                                className='h-full w-[282.28px] min-h-[168.18px] object-contain'
                            />
                        </div>
                        <div className='p-6  w-[100%] remove'>
                            <h3 className='text-lg font-extrabold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis'>
                                item
                            </h3>
                            <h4 className='text-lg text-gray-800 font-bold mt-2'>item</h4>

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
        </>
    )
}

export default Detail
