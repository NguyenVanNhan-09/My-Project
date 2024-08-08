const Footer = () => {
    return (
        <>
            <footer className='w-full bg-[#E2F4FF]'>
                <div className='mx-auto max-w-[1314px] px-4 pt-5 sm:px-6 lg:px-8 '>
                    <div className='border-b border-gray-200 py-10 flex justify-around items-center flex-col gap-8 lg:gap-0 lg:flex-row bg-white rounded-[20px]'>
                        <div className='block'>
                            <h3 className='font-manrope text-3xl font-bold mb-2 text-center lg:text-left text-[#1B5A7D]'>
                                Subscribe newsletter
                            </h3>
                        </div>
                        <div className='flex items-center flex-col gap-4 lg:flex-row'>
                            <button className='h-14 py-3.5 px-7 bg-[#EDA415] shadow-sm rounded-full text-white font-bold min-w-[388px] flex justify-between items-center'>
                                <div>Email address</div>
                                <span className='ti-export'></span>
                            </button>
                        </div>
                        <div className='flex items-center'>
                            <span className='ti-headphone  text-[45px] mr-4 text-[#EDA415]'></span>
                            <div>
                                <h4 className='text-[14px]'>Call us 24/7 :</h4>
                                <p className='text-[14px]'>(+62) 0123 567 789</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid  grid-cols-2 min-[690px]:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-2 pt-14 pb-10 max-w-xs mx-auto min-[690px]:max-w-2xl lg:max-w-full'>
                        <div className='col-span-full mb-10 lg:col-span-1 lg:mb-0'>
                            <a href='#' className='flex justify-center lg:justify-start'>
                                <img src='../../public/image/logo-11.png' className='w-[140px] h-[40px]' alt='' />
                            </a>
                            <p className='py-8 text-gray-500 lg:max-w-[183px] text-center lg:text-left border-b border-black'>
                                64 st james boulevard hoswick , ze2 7zj
                            </p>
                            <div className='mt-6'>
                                <div className='flex mt-4 space-x-6 sm:mt-0'>
                                    <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                                        <svg
                                            className='w-5 h-5'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            aria-hidden='true'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </a>
                                    <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                                        <svg
                                            className='w-5 h-5'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            aria-hidden='true'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </a>
                                    <a href='#' className='text-gray-500 hover:text-gray-900 dark:hover:text-white'>
                                        <svg
                                            className='w-5 h-5'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            aria-hidden='true'
                                        >
                                            <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='flex col-span-full mb-10 lg:col-span-3 lg:mb-0'>
                            <div className='lg:mx-auto text-left '>
                                <h1 className='text-lg text-[#1B5A7D] font-medium mb-7 text-[26px]'>Find product</h1>
                                <ul className='text-sm list-disc'>
                                    <li className='mb-6'>
                                        <a href='#' className='text-[#1B5A7D] text-[19px]  hover:text-gray-900'>
                                            Brownze arnold
                                        </a>
                                    </li>
                                    <li className='mb-6'>
                                        <a href='#' className=' text-[#1B5A7D] text-[19px]  hover:text-gray-900'>
                                            Chronograph blue
                                        </a>
                                    </li>
                                    <li className='mb-6'>
                                        <a href='#' className=' text-[#1B5A7D] text-[19px]  hover:text-gray-900'>
                                            Smart phones
                                        </a>
                                    </li>
                                    <li className='mb-6'>
                                        <a href='#' className=' text-[#1B5A7D] text-[19px]  hover:text-gray-900'>
                                            Automatic watch
                                        </a>
                                    </li>
                                    <li className='mb-6'>
                                        <a href='#' className=' text-[#1B5A7D] text-[19px]  hover:text-gray-900'>
                                            Hair straighteners
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='lg:mx-auto text-left '>
                                <h1 className='text-lg text-[#1B5A7D] font-medium mb-7 text-[26px]'>Get help</h1>
                                <ul className='text-sm list-disc transition-all duration-500'>
                                    <li className='mb-6'>
                                        <a href='#' className='text-[#1B5A7D] text-[19px] hover:text-gray-900'>
                                            About us
                                        </a>
                                    </li>
                                    <li className='mb-6'>
                                        <a href='#' className=' text-[#1B5A7D] text-[19px] hover:text-gray-900'>
                                            Contact us
                                        </a>
                                    </li>
                                    <li className='mb-6'>
                                        <a href='#' className=' text-[#1B5A7D] text-[19px] hover:text-gray-900'>
                                            Return policy
                                        </a>
                                    </li>
                                    <li className='mb-6'>
                                        <a href='#' className=' text-[#1B5A7D] text-[19px] hover:text-gray-900'>
                                            Privacy policy
                                        </a>
                                    </li>
                                    <li className='mb-6'>
                                        <a href='#' className=' text-[#1B5A7D] text-[19px] hover:text-gray-900'>
                                            Payment policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='lg:mx-auto text-left '>
                                <h1 className='text-lg text-[#1B5A7D] font-medium mb-7 text-[26px]'>About</h1>
                                <ul className='text-sm list-disc transition-all duration-500'>
                                    <li className='mb-6'>
                                        <a
                                            href='#'
                                            className='text-[#1B5A7D] text-[19px] whitespace-nowrap hover:text-gray-900'
                                        >
                                            News
                                        </a>
                                    </li>
                                    <li className='mb-6'>
                                        <a
                                            href='#'
                                            className=' text-[#1B5A7D] text-[19px] whitespace-nowrap hover:text-gray-900'
                                        >
                                            Sevice
                                        </a>
                                    </li>
                                    <li className='mb-6'>
                                        <a
                                            href='#'
                                            className=' text-[#1B5A7D] text-[19px] whitespace-nowrap hover:text-gray-900'
                                        >
                                            Our policy
                                        </a>
                                    </li>
                                    <li className='mb-6'>
                                        <a
                                            href='#'
                                            className=' text-[#1B5A7D] text-[19px] whitespace-nowrap hover:text-gray-900'
                                        >
                                            Custmer care
                                        </a>
                                    </li>
                                    <li className='mb-6'>
                                        <a
                                            href='#'
                                            className=' text-[#1B5A7D] text-[19px] whitespace-nowrap hover:text-gray-900'
                                        >
                                            Faq's
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
