import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
    children: React.ReactNode
    role: number
}

const PrivateRoutes = ({ children, role }: Props) => {
    const navigate = useNavigate()
    const [hasConfirmed, setHasConfirmed] = useState(false)

    useEffect(() => {
        if (role !== 2 && !hasConfirmed) {
            const isConfirm = window.confirm('Bạn không có quyền đăng nhập admin!!! Chuyển hướng về trang chính ngay?')
            if (isConfirm) {
                setHasConfirmed(true)
                navigate('/')
            }
        }
    }, [role, hasConfirmed, navigate])

    if (role === 2) {
        return <>{children}</>
    } else {
        return (
            <div className='text-red-500 h-[100vh] w-full flex justify-center items-center'>
                Cảnh báo: Bạn không có quyền admin !!!!
            </div>
        )
    }
}

export default PrivateRoutes
