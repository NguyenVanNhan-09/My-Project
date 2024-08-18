const Banner = () => {
    return (
        <>
            <main className='bg-white relative overflow-hidden min-h-80'>
                <div className='bg-white flex relative z-20 items-center overflow-hidden'>
                    <div className='container mx-auto px-6 flex relative py-16 max-w-[1314px]'>
                        <div className='sm:w-2/3 lg:w-2/5 flex flex-col relative z-20'>
                            <span className='w-20 h-2 bg-white dark:bg-white mb-12'></span>
                            <h1 className='font-bebas-neue text-6xl sm:text-8xl font-black flex flex-col leading-none text-[#1B5A7D]'>
                                Nike Shoes
                            </h1>
                            <div className='flex mt-8'>
                                <a
                                    href='#'
                                    className='py-2 px-4 rounded-lg bg-[#EDA315] border-2 border-transparent hover:text-white text-white text-md mr-4 hover:bg-[#316887]'
                                >
                                    Shop now
                                </a>
                                <a
                                    href='#'
                                    className='py-2 px-4 rounded-lg bg-transparent border-2 border-[#EDA315] text-[#316887] hover:bg-[#EDA315] hover:text-white text-md'
                                >
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className='hidden sm:block sm:w-1/3 lg:w-3/5 relative'>
                            <img
                                src='../../../public/image/tennis-7968714_1920.png'
                                className='max-w-xs md:max-w-sm m-auto'
                            />
                        </div>
                    </div>
                </div>
                <div className='ml-[110px] mr-[110px] parent'>
                    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 w-full transition-transform duration-300'>
                        <a href='#' className='py-6 bg-white border border-[#A5A5A5] rounded-[20px]'>
                            <div className='flex items-center justify-around gap-4 h-full'>
                                <div className='overflow-hidden rounded-full'>
                                    <img
                                        src='https://e7.pngegg.com/pngimages/845/161/png-clipart-sneakers-shoe-shoes-fashion-baby-shoes-thumbnail.png'
                                        alt=''
                                        className='aspect-square w-20 rounded-lg object-contain'
                                    />
                                </div>
                                <div className=''>
                                    <h3 className='text-lg/tight font-medium text-gray-900'>Shoes</h3>
                                    <div>(6 item)</div>
                                </div>
                            </div>
                        </a>
                        <a href='#' className='py-6 bg-white border border-[#A5A5A5] rounded-[20px]'>
                            <div className='flex items-center justify-around gap-4 h-full'>
                                <div className='overflow-hidden rounded-full'>
                                    <img
                                        src='https://wp.inews.co.uk/wp-content/uploads/2024/07/SEI_214950149.jpg'
                                        alt=''
                                        className='aspect-square w-20 rounded-lg object-contain'
                                    />
                                </div>
                                <div className=''>
                                    <h3 className='text-lg/tight font-medium text-gray-900'>Clothers</h3>
                                    <div>(6 item)</div>
                                </div>
                            </div>
                        </a>
                        <a href='#' className='py-6 bg-white border border-[#A5A5A5] rounded-[20px]'>
                            <div className='flex items-center justify-around gap-4 h-full'>
                                <div className='overflow-hidden rounded-full'>
                                    <img
                                        src='../../../public/image/bowler-1295700_1280.png'
                                        alt=''
                                        className='aspect-square w-20 rounded-lg object-contain bg-center'
                                    />
                                </div>
                                <div className=''>
                                    <h3 className='text-lg/tight font-medium text-gray-900'>Hats</h3>
                                    <div>(6 item)</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Banner
