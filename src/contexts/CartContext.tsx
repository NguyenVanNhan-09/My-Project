import React, { createContext, useEffect, useState } from 'react'
import { TCart } from '../interfaces/Cart'
import instance from '../API'
import { toast } from 'react-toastify'
import { Delete_Cart, GET_ALL_Carts } from '../services/Carts'
import ConfirmModal from '../components/Admin/Confirm'

type Props = {
    children: React.ReactNode
}

export const cartCT = createContext({} as any)

type CartItem = {
    id?: number | string
    qty: number
    name: string
    brand: string
    gender: string
    price: number
    thumbnail: string
    size: string
}

const CartContext = ({ children }: Props) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const jsonCartData = localStorage.getItem('cart')
        return jsonCartData ? JSON.parse(jsonCartData) : []
    })
    const [carts, setCarts] = useState<TCart[]>([])
    const [deleteId, setDeleteId] = useState<string | number | null>(null)
    const [showModal, setShowModal] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
        const fetchCarts = async () => {
            try {
                const { data } = await GET_ALL_Carts()
                setCarts(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCarts()
    }, [cartItems])

    // Số lượng item trong cart
    const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0)

    // Tổng số tiền các item trong cart
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0)

    // Tăng số lượng
    const increaseQty = (id: number | string) => {
        const currentCartItem = cartItems.find((item) => item.id === id)
        if (currentCartItem) {
            const newItem = cartItems.map((item) => {
                if (item.id === id) {
                    return { ...item, qty: item.qty + 1 }
                } else {
                    return item
                }
            })
            setCartItems(newItem)
        }
    }

    // Giảm số lượng
    const decreaQty = (id: number | string) => {
        const currentCartItem = cartItems.find((item) => item.id === id)
        if (currentCartItem) {
            if (currentCartItem.qty == 1) {
                HandleDeleteItem(id)
            } else {
                const newItem = cartItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, qty: item.qty - 1 }
                    } else {
                        return item
                    }
                })
                setCartItems(newItem)
            }
        }
    }

    // Thềm vào giỏ hàng
    const HandleAddCart = (product: CartItem) => {
        if (product) {
            const currentCartItem = cartItems.find((item) => item.id === product.id)
            if (currentCartItem) {
                const newItem = cartItems.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, qty: item.qty + product.qty }
                    } else {
                        return item
                    }
                })
                toast.success('Add to cart successfully !!!', { position: 'top-left' })
                setCartItems(newItem)
            } else {
                const newItem = { ...product, qty: product.qty }
                toast.success('Add to cart successfully !!!', { position: 'top-left' })
                setCartItems([...cartItems, newItem])
            }
        } else {
            toast.error('Error !!!', { position: 'top-center' })
        }
    }

    // Xóa item khỏi cart
    const HandleDeleteItem = (id: string | number) => {
        // Tìm đến phần tử cần xóa trong mảng cartItems
        const currentCartItemIndex = cartItems.findIndex((item) => item.id === id)
        const newItem = [...cartItems]
        if (newItem) {
            newItem.splice(currentCartItemIndex, 1)
            toast.success('Delete successfully !!!', { position: 'top-left' })
            setCartItems(newItem)
        } else {
            toast.error('Error !!!', { position: 'top-center' })
        }
    }

    // Xóa hết items trong cartItems
    const ClearCartItems = async () => {
        setCartItems([])
    }

    // Thêm cart vào db.json
    const HandleAdd = async (cart: TCart, cartItems: TCart, totalPrice: number) => {
        try {
            const data = await instance.post('/carts', {
                ...cart,
                items: cartItems,
                total: totalPrice
            })
            if (data) {
                toast.success('Order placed successfully.', { position: 'top-center' })
            } else {
                toast.warn('Order placement failed!', { position: 'top-center' })
            }
        } catch (error) {
            toast.error('Error !!!', { position: 'top-center' })
        }
    }

    // Xóa cart
    const HandleDelete = async (id: number | string) => {
        setDeleteId(id)
        setShowModal(true)
    }
    const confrimDelete = async () => {
        const data = await Delete_Cart(deleteId as any)
        if (data) {
            setCarts(carts.filter((cart) => cart.id !== deleteId))
        } else {
            toast.error('Error deleting product.', { position: 'top-center' })
        }
    }

    return (
        <cartCT.Provider
            value={{
                cartItems,
                cartQty,
                totalPrice,
                increaseQty,
                decreaQty,
                HandleAddCart,
                HandleDeleteItem,
                ClearCartItems,
                HandleAdd,
                carts,
                HandleDelete
            }}
        >
            {children}
            <ConfirmModal show={showModal} onClose={() => setShowModal(false)} onConfirm={confrimDelete} />
        </cartCT.Provider>
    )
}

export default CartContext
