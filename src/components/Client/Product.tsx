import { Link } from 'react-router-dom'
import { TProduct } from '../../interfaces/Products'

type Props = {
    data: TProduct
}

const Product = ({ data }: Props) => {
    return (
        <>
            <Link
                to={`/detail/${data.id}`}
                className='border border-[#B6B6B6] shadow-md overflow-hidden rounded-[19.67px] cursor-pointer hover:-translate-y-2 transition-all relative event_hover min-h-[332px]'
            >
                <div className='bg-[#87BCD9] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18px'
                        className='fill-red-400 inline-block'
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
                        src={data.thumbnail}
                        alt='Product 1'
                        className='h-full w-[282.28px] min-h-[168.18px] object-contain'
                    />
                </div>
                <div className='p-6 w-[100%] remove'>
                    <h3 className='text-lg font-extrabold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis'>
                        {data.name}
                    </h3>
                    <h4 className='text-lg text-gray-800 font-bold mt-2'>${data.price}</h4>

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
                    <div className=' border border-[#87BCD9] rounded-[19px] flex flex-1 items-center justify-around ml-4 mr-4 w-[204.58px] h-[60px] bg-[#87BCD9]'>
                        <p className='text-[19px] text-white'>Add to cart</p>
                        <i className='ti-shopping-cart text-[15.5px] bg-[#EDA415] px-2 py-2 rounded-full text-white'></i>
                    </div>
                    <div className='border border-[#87BCD9] rounded-[19px] w-[70.81px] h-[60px] flex items-center justify-center mr-4 bg-[#87BCD9]'>
                        <i className='ti-eye text-[23px] text-white'></i>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Product
