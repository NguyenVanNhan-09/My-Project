import instance from '../API'
import { TUsers } from '../interfaces/Users'
export const GET_ALL_Users = async () => {
    try {
        const { data } = await instance.get('/users')
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const GET_BY_ID_User = async (id: number | string) => {
    try {
        const { data } = await instance.get(`/users/${id}`)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const Create_User = async (user: TUsers) => {
    try {
        const { data } = await instance.post('/users', user)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const Login_User = (user: TUsers) => {
    try {
        const data = instance.post('/login', user)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const Register_User = (user: TUsers) => {
    try {
        const data = instance.post('/register', user)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const Delete_User = async (id: number | string) => {
    try {
        const { data } = await instance.delete(`/users/${id}`)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const Update_User = async (id: number | string, user: TUsers) => {
    try {
        const { data } = await instance.patch(`/users/${id}`, user)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
