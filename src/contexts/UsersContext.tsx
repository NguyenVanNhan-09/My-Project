import React, { createContext, useEffect, useState } from 'react'
import { TUsers } from '../interfaces/Users'
import { Create_User, Delete_User, GET_ALL_Users, Login_User, Register_User, Update_User } from '../services/Users'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
type Props = {
    children: React.ReactNode
}
export const userCT = createContext({} as any)
const UsersContext = ({ children }: Props) => {
    const navi = useNavigate()
    const [users, setUsers] = useState<TUsers[]>([])
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await GET_ALL_Users()
                setUsers(data)
            } catch (error) {
                console.error('Có lỗi xảy ra:', error)
            }
        }

        fetchUsers()
    }, [])

    // Create
    const handleAdd = async (user: TUsers) => {
        const data = await Create_User(user)
        if (data) {
            alert('Add user successfully!!!')
        } else {
            alert('error !!!')
        }
        setUsers([...users, data])
    }
    // Update
    const handleUpdate = async (id: number | string, user: TUsers) => {
        const data = await Update_User(id, user)
        if (data) {
            setUsers(users.filter((user) => (user.id == id ? data : user)))
        } else {
            alert('error update !!!')
        }
    }
    // Delete
    const handleDelete = async (id: number | string) => {
        const isConfirm = confirm('You sure???')
        if (isConfirm) {
            const data = await Delete_User(id)
            if (data) {
                alert('Delete Successfully!!!')
                setUsers(users.filter((user: TUsers) => user.id !== id))
            } else {
                alert('error delete !!!')
            }
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
                alert(`Message Error: ${errorMessage}`)
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
        </userCT.Provider>
    )
}

export default UsersContext
