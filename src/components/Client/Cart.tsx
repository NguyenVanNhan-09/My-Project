import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { useContext } from 'react'
import { cartCT } from '../../contexts/CartContext'
import { brandsCT } from '../../contexts/BrandsContext'
import { TBrands } from '../../interfaces/Brands'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
type Props = {
    change: boolean
    setChange: any
}

const Cart = ({ change, setChange }: Props) => {
    const navigator = useNavigate()
    const { cartItems, HandleDeleteItem, totalPrice } = useContext(cartCT)
    const { brands } = useContext(brandsCT)
    return (
        <>
            <Dialog open={change} onClose={setChange} className='relative z-50'>
                <DialogBackdrop
                    transition
                    className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0'
                />

                <div className='fixed inset-0 overflow-hidden'>
                    <div className='absolute inset-0 overflow-hidden'>
                        <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                            <DialogPanel
                                transition
                                className='pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700'
                            >
                                <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                                    <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                                        <div className='flex items-start justify-between'>
                                            <DialogTitle className='text-lg font-medium text-gray-900'>
                                                Cart
                                            </DialogTitle>
                                            <div className='ml-3 flex h-7 items-center'>
                                                <button
                                                    type='button'
                                                    onClick={() => setChange(false)}
                                                    className='relative -m-2 p-2 text-gray-400 hover:text-gray-500'
                                                >
                                                    <span className='absolute -inset-0.5' />
                                                    <span className='sr-only'>Close panel</span>
                                                    <XMarkIcon aria-hidden='true' className='h-6 w-6' />
                                                </button>
                                            </div>
                                        </div>
                                        {cartItems.length == 0 ? (
                                            <div className='flex items-center w-full h-full justify-center text-red-500'>
                                                No items in cart
                                            </div>
                                        ) : (
                                            <div className='mt-8'>
                                                <div className='flow-root'>
                                                    <ul role='list' className='-my-6 divide-y divide-gray-200'>
                                                        {cartItems.map((item: any, index: any) => (
                                                            <li key={index} className='flex py-6'>
                                                                <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                                                    <img
                                                                        src={item.thumbnail}
                                                                        className='h-full w-full object-cover object-center'
                                                                    />
                                                                </div>

                                                                <div className='ml-4 flex flex-1 flex-col'>
                                                                    <div>
                                                                        <div className='flex justify-between text-base font-medium text-gray-900'>
                                                                            <h3>
                                                                                <a href='#'>{item.name}</a>
                                                                            </h3>
                                                                            <p className='ml-4'>{item.price} $</p>
                                                                        </div>
                                                                        <p className='mt-1 text-sm text-gray-500'>
                                                                            {item.brand ? (
                                                                                brands.filter(
                                                                                    (brand: TBrands) =>
                                                                                        brand.id === item.brand
                                                                                )?.name
                                                                            ) : (
                                                                                <>
                                                                                    <span>not brand</span>
                                                                                </>
                                                                            )}
                                                                        </p>
                                                                    </div>
                                                                    <div className='flex flex-1 items-end justify-between text-sm'>
                                                                        <p className='text-gray-500'>{item.qty} qty</p>

                                                                        <div className='flex'>
                                                                            <button
                                                                                type='button'
                                                                                className='font-medium text-indigo-600 hover:text-indigo-500'
                                                                                onClick={() =>
                                                                                    HandleDeleteItem(item.id)
                                                                                }
                                                                            >
                                                                                Remove
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                                        <div className='flex justify-between text-base font-medium text-gray-900'>
                                            <p>Subtotal</p>
                                            <p>Total: ${totalPrice}</p>
                                        </div>
                                        <p className='mt-0.5 text-sm text-gray-500'>
                                            Shipping and taxes are calculated at checkout.
                                        </p>
                                        <div className='mt-6'>
                                            <button
                                                onClick={() => {
                                                    if (cartItems.length === 0) {
                                                        toast.warn('There are no products in the cart!', {
                                                            position: 'top-left'
                                                        })
                                                    } else {
                                                        setChange(false)
                                                        navigator('checkout')
                                                    }
                                                }}
                                                className='flex items-center w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                                            >
                                                Checkout procedure
                                            </button>
                                        </div>
                                        <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                                            <button
                                                type='button'
                                                className='font-medium text-indigo-600 hover:text-indigo-500'
                                                onClick={() => setChange(false)}
                                            >
                                                Continue shopping
                                                <span aria-hidden='true'> &rarr;</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default Cart
