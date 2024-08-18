import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { cartCT } from '../../contexts/CartContext'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { TCart } from '../../interfaces/Cart'
import { joiResolver } from '@hookform/resolvers/joi'
import { toast } from 'react-toastify'

const schema = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.string().required(),
    address: Joi.string().required().min(3),
    method_pay: Joi.string().required(),
    voucher: Joi.string().allow('').optional()
})

const Checkout = () => {
    const navi = useNavigate()
    const isAccessToken = JSON.parse(localStorage.getItem('user')!)?.accessToken
    const { cartItems, HandleDeleteItem, decreaQty, increaseQty, totalPrice, HandleAdd, ClearCartItems } =
        useContext(cartCT)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TCart>({ resolver: joiResolver(schema) })

    // Submit
    const onSubmit = (cart: TCart) => {
        if (isAccessToken) {
            if (cartItems.length === 0) {
                toast.warn('There are no products in the cart!', { position: 'top-center' })
                return
            } else {
                try {
                    HandleAdd(cart, cartItems, totalPrice)
                    ClearCartItems()
                    navi('/')
                } catch (error) {
                    toast.error(`${error}`, { position: 'top-center' })
                }
            }
        } else {
            toast.error('You need to log in to continue payment!', { position: 'top-center' })
        }
    }
    return (
        <>
            <div className='bg-white w-full flex justify-center pt-28 pb-40'>
                <div className='font-sans max-w-5xl max-md:max-w-xl mx-autopy-4 z-10'>
                    <h1 className='text-3xl font-bold text-gray-800 text-center z-10'>My Cart</h1>

                    <div className='grid md:grid-cols-3 gap-8 mt-16 z-10'>
                        <div className='md:col-span-2 space-y-4'>
                            {cartItems.length > 0 ? (
                                <>
                                    {cartItems.map((item: any, index: any) => (
                                        <div key={index}>
                                            <div className='grid grid-cols-3 items-start gap-4'>
                                                <div className='col-span-2 flex items-start gap-4'>
                                                    <div className='w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md'>
                                                        <img
                                                            src={item.thumbnail}
                                                            className='w-full h-full object-contain'
                                                        />
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <h3 className='text-base font-bold text-gray-800'>
                                                            {item.name}
                                                        </h3>
                                                        <p className='text-xs font-semibold text-gray-500 mt-0.5'>
                                                            Size: {item.size}
                                                        </p>

                                                        <button
                                                            type='button'
                                                            className='mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0'
                                                            onClick={() => HandleDeleteItem(item.id)}
                                                        >
                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                className='w-4 fill-current inline'
                                                                viewBox='0 0 24 24'
                                                            >
                                                                <path
                                                                    d='M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z'
                                                                    data-original='#000000'
                                                                ></path>
                                                                <path
                                                                    d='M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z'
                                                                    data-original='#000000'
                                                                ></path>
                                                            </svg>
                                                            REMOVE
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className='flex flex-col items-end'>
                                                    <h4 className='text-lg max-sm:text-base font-bold text-gray-800'>
                                                        $ {item.price}
                                                    </h4>

                                                    <div className='mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md'>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            className='w-2.5 fill-current cursor-pointer'
                                                            viewBox='0 0 124 124'
                                                            onClick={() => decreaQty(item.id)}
                                                        >
                                                            <path
                                                                d='M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z'
                                                                data-original='#000000'
                                                            ></path>
                                                        </svg>

                                                        <span className='mx-3 font-bold'>{item.qty}</span>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            className='w-2.5 fill-current cursor-pointer'
                                                            viewBox='0 0 42 42'
                                                            onClick={() => increaseQty(item.id)}
                                                        >
                                                            <path
                                                                d='M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z'
                                                                data-original='#000000'
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className='border-gray-300' />
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <span>You don't have any products in your cart yet!</span>
                                </>
                            )}
                        </div>

                        <div className='bg-gray-100 rounded-md p-4 h-max'>
                            <h3 className='text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2'>
                                Your information
                            </h3>

                            <form onSubmit={handleSubmit(onSubmit)} className='mt-6'>
                                <div className='grid gap-y-4'>
                                    <div className='relative flex flex-col items-center'>
                                        <input
                                            type='text'
                                            {...register('name')}
                                            placeholder='Your name'
                                            className={`px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b outline-none ${
                                                errors.name ? 'border-red-500' : 'focus:border-gray-800'
                                            }`}
                                        />
                                        {errors.name && (
                                            <p className='text-red-500 text-xs mt-1'>Bạn cần nhập đúng name</p>
                                        )}
                                    </div>
                                    <div className='relative flex flex-col items-center'>
                                        <input
                                            type='text'
                                            {...register('phone')}
                                            placeholder='Your phone number'
                                            className={`px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b outline-none ${
                                                errors.phone ? 'border-red-500' : 'focus:border-gray-800'
                                            }`}
                                        />
                                        {errors.phone && (
                                            <p className='text-red-500 text-xs mt-1'>Bạn cần nhập đúng số điện thoại</p>
                                        )}
                                    </div>
                                    <div className='relative flex flex-col items-center'>
                                        <input
                                            type='text'
                                            {...register('address')}
                                            placeholder='Your address'
                                            className='px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b outline-none'
                                        />
                                        {errors.phone && (
                                            <p className='text-red-500 text-xs mt-1'>Bạn cần nhập đúng số điện thoại</p>
                                        )}
                                    </div>
                                    <div className='relative flex flex-col items-center'>
                                        <input
                                            type='text'
                                            {...register('voucher', { required: false })}
                                            placeholder='Voucher'
                                            className={`px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b outline-none ${
                                                errors.voucher ? 'border-red-500' : 'focus:border-gray-800'
                                            }`}
                                        />
                                        {errors.voucher && (
                                            <p className='text-red-500 text-xs mt-1'>{errors.voucher.message}</p>
                                        )}
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <input
                                                className='mr-2 w-4 h-4 cursor-pointer'
                                                type='radio'
                                                id='cash'
                                                value={'cash'}
                                                {...register('method_pay')}
                                            />
                                            <label htmlFor='cash'>Cash</label>
                                        </div>
                                        <div>
                                            <input
                                                className='mr-2 w-4 h-4 cursor-pointer'
                                                type='radio'
                                                id='online'
                                                value={'online payment'}
                                                {...register('method_pay')}
                                            />
                                            <label htmlFor='online'>Online Payment</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between pt-3'>
                                    <div className=''>Shipping</div>
                                    <span className=''>free</span>
                                </div>
                                <div className='flex justify-between pt-3'>
                                    <div className=''>Total</div>
                                    <span className=''>$ {totalPrice}</span>
                                </div>
                                <button
                                    type='submit'
                                    className='text-sm mt-3 px-4 py-2.5 w-full font-semibold tracking-wide bg-[#eda515] hover:bg-[#1b5a7d] text-white rounded-md'
                                >
                                    Checkout
                                </button>
                                <button
                                    type='button'
                                    onClick={() => navi('/')}
                                    className='text-sm mt-3 px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent border-[#eda515] border hover:bg-[#eda515] text-[#1b5a7d] hover:text-white rounded-md'
                                >
                                    Continue shopping
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
