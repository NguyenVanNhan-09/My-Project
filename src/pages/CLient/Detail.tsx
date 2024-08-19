import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GET_BY_ID_Product } from '../../services/Products'
import { TProduct } from '../../interfaces/Products'
import Products from '../../components/Client/Products'
import { cartCT } from '../../contexts/CartContext'
import { toast } from 'react-toastify'
import ErrorsModal from '../../components/ErrorsModal'
import { useForm } from 'react-hook-form'
import { categoriesCT } from '../../contexts/CategoriesContext'
import { TCategories } from '../../interfaces/Categories'
import { TBrands } from '../../interfaces/Brands'
import { brandsCT } from '../../contexts/BrandsContext'

const Detail = () => {
    const { id } = useParams()
    const navigator = useNavigate()
    const { HandleAddCart } = useContext(cartCT)
    const { categories } = useContext(categoriesCT)
    const { brands } = useContext(brandsCT)
    const [product, setProduct] = useState<TProduct | null>(null)
    useEffect(() => {
        const fetchProductById = async () => {
            const data = await GET_BY_ID_Product(id as number | string)
            setProduct(data)
        }
        fetchProductById()
    }, [id])
    const nameCate = categories.find((cate: TCategories) => cate.id === product?.category)?.name
    const nameBrand = brands.find((brand: TBrands) => brand.id === product?.brand)?.name
    const { handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            size: '', // Giá trị mặc định của size
            quantity: 1 // Giá trị mặc định của quantity
        }
    })
    const size = watch('size')
    const quantity = watch('quantity')
    const onSubmit = (data: any) => {
        if (product?.is_in_inventory) {
            const { id, name, brand, gender, price, thumbnail } = product
            HandleAddCart({ id, name, brand, gender, price, thumbnail, size: data.size, qty: data.quantity })
            navigator('/checkout')
        } else {
            toast.warn('The product is out of stock.', { position: 'top-center' })
        }
    }
    const handleAddToCart = (data: any) => {
        if (product?.is_in_inventory) {
            const { id, name, brand, gender, price, thumbnail } = product
            HandleAddCart({ id, name, brand, gender, price, thumbnail, size: data.size, qty: data.quantity })
        } else {
            toast.warn('The product is out of stock.', { position: 'top-center' })
        }
    }

    return (
        <>
            <div className='font-sans p-8 tracking-wide max-lg:max-w-2xl mx-auto ml-[110px] mr-[110px]'>
                <div className='grid items-start grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='space-y-4 text-center lg:sticky top-8'>
                        <div className='bg-gray-100 p-4 flex items-center sm:h-[380px] rounded'>
                            <img
                                src={product?.thumbnail}
                                alt='productDetail'
                                className='w-full max-h-full object-contain object-top'
                            />
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <div className='bg-gray-100 p-4 flex items-center rounded sm:h-[182px]'>
                                <img
                                    src={product?.images[0]}
                                    alt='productDetail'
                                    className='w-full max-h-full object-contain object-top'
                                />
                            </div>

                            <div className='bg-gray-100 p-4 flex items-center rounded sm:h-[182px]'>
                                <img
                                    src={product?.images[1]}
                                    alt='productDetail'
                                    className='w-full max-h-full object-contain object-top'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='max-w-xl'>
                        <div>
                            <h2 className='text-2xl font-extrabold text-gray-800'>{product?.name}</h2>
                        </div>

                        <div className='mt-4'>
                            <h3 className='text-gray-800 text-3xl font-bold'>$ {product?.price}</h3>
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
                                Availability:
                                {product?.is_in_inventory ? (
                                    <>
                                        <span className='text-[#30BD57]  text-[16px]'>
                                            <span className='ti-check text-[#30BD57] text-[16px]'></span>In stock
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <span className='text-[#ee534f] text-[16px]'>
                                            <span className='ti-close text-[#ee534f] text-[16px]'></span>Out stock
                                        </span>
                                    </>
                                )}
                            </h1>
                        </div>
                        <div className='flex space-x-1 mt-4'>
                            <h1>
                                Brand:
                                <span className='text-[#30BD57]  text-[16px] ml-3'>{nameBrand}</span>
                            </h1>
                        </div>
                        <div className='flex space-x-1 pb-3 mt-4 border-b w-full border-[#BDBDBD]'>
                            <h1>
                                Gender: <span className='text-[#30BD57]  text-[16px]'>{product?.gender}</span>
                            </h1>
                        </div>

                        {/* Color: Sẽ phát triển sau */}
                        {/* <div className='flex space-x-1 mt-4 items-center'>
                            <h3 className='text-lg font-bold text-gray-800'>Choose a Color: </h3>
                            <div className='flex flex-wrap gap-4' onClick={() => onModalError()}>
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
                        </div> */}
                        <form action='' onSubmit={handleSubmit(onSubmit)}>
                            {/* Size */}
                            <div className='mt-10 flex items-center space-x-1'>
                                <h3 className='text-lg font-bold text-gray-800'>Sizes:</h3>
                                <div className='flex flex-wrap gap-4 ml-3'>
                                    {['SM', 'MD', 'LG', 'XL', 'XXL'].map((sizeOption) => (
                                        <button
                                            key={sizeOption}
                                            type='button'
                                            className={`w-12 h-11 border-2 hover:border-gray-800 font-semibold text-xs text-gray-800 rounded-lg flex items-center justify-center shrink-0 ${
                                                size === sizeOption ? 'border-gray-800' : ''
                                            }`}
                                            onClick={() => setValue('size', sizeOption)}
                                        >
                                            {sizeOption}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity */}
                            <div className='flex items-center mt-6 space-x-1'>
                                <h3 className='text-lg font-bold text-gray-800'>Quantity</h3>
                                <div className='flex divide-x border w-max rounded overflow-hidden'>
                                    <button
                                        type='button'
                                        className='bg-gray-100 w-12 h-10 font-semibold'
                                        onClick={() => {
                                            const currentQuantity = (quantity || 1) as number
                                            if (currentQuantity > 1) {
                                                setValue('quantity', currentQuantity - 1)
                                            }
                                        }}
                                    >
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
                                        {quantity || '1'}
                                    </button>
                                    <button
                                        type='button'
                                        className='bg-gray-800 text-white w-12 h-10 font-semibold'
                                        onClick={() => {
                                            const currentQuantity = (quantity || 1) as number
                                            setValue('quantity', currentQuantity + 1)
                                        }}
                                    >
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
                                <button
                                    type='submit'
                                    className='min-w-[200px] flex justify-center px-4 py-3 hover:opacity-45 text-white text-sm font-semibold  bg-[#EDA415] rounded-[20px]'
                                >
                                    Buy now
                                </button>
                                <button
                                    type='button'
                                    onClick={() => {
                                        handleAddToCart({ size, quantity })
                                    }}
                                    className='min-w-[200px] flex justify-center px-4 py-2.5 border  bg-[#EDA415]  text-white hover:bg-opacity-45 text-sm font-semibold  rounded-[20px]'
                                >
                                    Add to cart
                                </button>
                            </div>
                        </form>

                        <div className='flex space-x-1 mt-4'>
                            <h1>
                                Sku: <span className='text-[#30BD57]  text-[16px]'>{product?.id}</span>
                            </h1>
                        </div>
                        <div className='flex space-x-1 mt-4'>
                            <h1>
                                Category:
                                <span className='text-[#30BD57]  text-[16px]'>{nameCate}</span>
                            </h1>
                        </div>
                        <div className='flex flex-col mt-4'>
                            <h1 className='pb-2'>Description</h1>
                            <p className='text-[15px] text-[#5D5D5D] w-full'>{product?.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mb-6 mt-4 ml-[110px] mr-[110px]'>
                {/* <button
                        type='button'
                        className='px-6 py-2.5 rounded-full text-[#373737] border border-black border-solid text-sm tracking-wider font-semibold bg-transparent outline-none  hover:bg-gray-400 active:bg-blue-600 mr-4'
                    >
                        Description
                    </button> */}
                <button
                    type='button'
                    // onClick={() => onModalError()}
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
                <Products idBrand={String(product?.brand)} IdCategory={''} nameCategory={''} />
            </div>
            <ErrorsModal />
        </>
    )
}

export default Detail
