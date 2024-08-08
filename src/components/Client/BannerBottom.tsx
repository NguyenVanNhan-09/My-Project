const BannerBottom = () => {
    const imageBanerBottom = '../../public/image/pexels-nao-triponez-1292081.png'
    return (
        <>
            <div
                className='bg-cover bg-center mb-14 h-auto text-white py-24 px-10 object-fill mt-12 ml-[110px] mr-[110px] rounded-[20px]'
                style={{
                    backgroundImage: `url(${imageBanerBottom})`
                }}
            >
                <div className='md:w-[100%]'>
                    <div className='flex justify-end'>
                        <div className='flex flex-col items-center'>
                            <a
                                href='#'
                                className='bg-[#EDA415] min-w-[134px] py-[0.85rem] px-8 text-white font-bold text-[14px] rounded-[20px] hover:bg-gray-200 hover:text-gray-800'
                            >
                                New laptop{' '}
                            </a>
                            <p className='text-[41px] font-bold text-[#2E8FC5]'>Sale up to 50% off</p>
                            <p className='text-[18px] mb-10 leading-none text-white'>12 inch hd display</p>
                            <a
                                href='#'
                                className='bg-[#EDA415] min-w-[134px] py-[0.85rem] px-8 text-white font-bold text-[14px] rounded-[20px] hover:bg-gray-200 hover:text-gray-800'
                            >
                                Shop now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerBottom
