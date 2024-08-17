import React, { createContext, useEffect, useState } from 'react'
import { TUsers } from '../interfaces/Users'
import { Create_User, Delete_User, GET_ALL_Users, Login_User, Register_User, Update_User } from '../services/Users'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ConfirmModal from '../components/Admin/Confirm'
import { toast } from 'react-toastify'
type Props = {
    children: React.ReactNode
}
export const userCT = createContext({} as any)
const UsersContext = ({ children }: Props) => {
    const navi = useNavigate()
    const [users, setUsers] = useState<TUsers[]>([])
    const [showModal, setShowModal] = useState<boolean>(false)
    const [deleteId, setDeleteId] = useState<string | number | null>(null)
    const [shouldFetch, setShouldFetch] = useState<boolean>(false)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await GET_ALL_Users()
                setUsers(data)
            } catch (error) {
                toast.error(`${error}`, { position: 'top-center' })
            }
        }

        fetchUsers()
    }, [shouldFetch])

    // Create
    const handleAdd = async (user: TUsers) => {
        const data = await Create_User(user)
        if (data) {
            toast.success('Add product successfully !!!', { position: 'top-center' })
            setShouldFetch(!shouldFetch)
        } else {
            toast.error('Error create product.', { position: 'top-center' })
        }
        setUsers([...users, data])
    }
    // Update
    const handleUpdate = async (id: number | string, user: TUsers) => {
        const data = await Update_User(id, user)
        if (data) {
            const newProducts = users.filter((user) => (user.id == id ? data : user))
            setUsers(newProducts)
            setShouldFetch(!shouldFetch)
            toast.success('update successfully !!!', { position: 'top-center' })
        } else {
            toast.error('Error update product.', { position: 'top-center' })
        }
    }
    // Delete
    const handleDelete = async (id: number | string) => {
        setDeleteId(id)
        setShowModal(true)
    }

    const confirmDelete = async () => {
        const data = await Delete_User(deleteId as any)
        if (data) {
            setUsers(users.filter((user: TUsers) => user.id !== deleteId))
        } else {
            toast.error('Error deleting product.', { position: 'top-center' })
        }
    }

    const handleRegister = async (user: TUsers) => {
        try {
            const { data } = await Register_User(user)
            if (data) {
                const isConfirm = confirm('register successfully, go to login now ?')
                if (isConfirm) {
                    // Mở modal đăng nhập
                    const loginModal = document.getElementById('my_modal_2') as HTMLDialogElement
                    if (loginModal) {
                        loginModal.showModal()
                    }
                }
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const errorMessage = error.response.data
                console.error(errorMessage)
                toast.error(`${errorMessage}`, { position: 'top-center' })
            } else {
                console.error('Lỗi không xác định')
            }
        }
    }
    const handleLogin = async (user: TUsers) => {
        try {
            const { data } = await Login_User(user)
            if (data) {
                const isConfirm = confirm('login successfully, go to home now ?')
                localStorage.setItem('user', JSON.stringify(data))
                if (isConfirm) {
                    const currentModal = document.getElementById('my_modal_2') as HTMLDialogElement
                    if (currentModal) {
                        currentModal.close()
                    }
                    navi('/')
                }
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const errorMessage = error.response.data
                console.error(errorMessage)
            } else {
                console.error('Lỗi không xác định')
            }
        }
    }
    return (
        <userCT.Provider
            value={{
                users,
                handleAdd,
                handleDelete,
                handleUpdate,
                handleRegister,
                handleLogin
            }}
        >
            {children}
            <ConfirmModal show={showModal} onClose={() => setShowModal(false)} onConfirm={confirmDelete} />
        </userCT.Provider>
    )
}

export default UsersContext
