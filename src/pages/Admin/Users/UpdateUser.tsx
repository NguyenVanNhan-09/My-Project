import Joi from 'joi'
import { useContext, useEffect, useState } from 'react'
import { UploadImageProductToCloudinary } from '../../../services/Products'
import { TUsers } from '../../../interfaces/Users'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { userCT } from '../../../contexts/UsersContext'
import { FaAddressCard, FaEnvelope, FaLock, FaPhone, FaUpload, FaUser } from 'react-icons/fa'
import { GET_BY_ID_User } from '../../../services/Users'

type Props = {
    id: any
}
const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().min(6),
    phone: Joi.string().allow(''),
    address: Joi.string().allow(''),
    image: Joi.string()
})
const UpdateUser = ({ id }: Props) => {
    const { handleUpdate } = useContext(userCT)
    const [image, setImage] = useState<string>()

    const uploadImage = async (file: any) => {
        const formData = new FormData()
        formData.append('file', file[0])
        formData.append('upload_preset', 'o70gyljw')
        const image = await UploadImageProductToCloudinary(formData)
        setImage(image.url)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<TUsers>({
        resolver: joiResolver(schema)
    })

    useEffect(() => {
        if (id !== null) {
            ;(async () => {
                try {
                    const data = await GET_BY_ID_User(id)
                    reset({
                        name: data.name,
                        email: data.email,
                        password: data.password,
                        phone: data.phone,
                        address: data.address
                    })
                    setImage(data.image)
                } catch (error) {
                    console.log(error)
                }
            })()
        }
    }, [id])

    const onSubmit = (user: TUsers) => {
        handleUpdate(id, { ...user, image: image })
    }
    return (
        <>
            <dialog id='modal_update_user' className='modal'>
                <div className='modal-box flex-col w-full h-full font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4'>
                    <form method='dialog'>
                        <button className='btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2'>✕</button>
                    </form>
                    {/*  */}
                    <div className='w-full h-full mx-auto p-6 bg-white rounded-lg'>
                        <h2 className='text-3xl font-bold mb-6 text-gray-800'>Account Update</h2>
                        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col md:flex-row md:space-x-4'>
                                <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                                    <div className='relative'>
                                        <div className='w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center mx-auto overflow-hidden'>
                                            {image ? (
                                                <>
                                                    <img
                                                        src={image}
                                                        alt='no Images'
                                                        className='w-full h-full object-cover' // Thêm các lớp này
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <FaUser className='text-gray-400 text-6xl' />
                                                </>
                                            )}
                                        </div>

                                        <label
                                            htmlFor='profilePicture'
                                            className='absolute bottom-0 right-0 bg-[#eda515] text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition duration-300'
                                        >
                                            <FaUpload />
                                            <input
                                                type='file'
                                                id='profilePicture'
                                                accept='image/*'
                                                className='hidden'
                                                onChange={(e) => uploadImage(e.target.files!)}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className='w-full md:w-2/3'>
                                    <div className='mb-4'>
                                        <label
                                            htmlFor='username'
                                            className='block text-sm font-medium text-gray-700 mb-1'
                                        >
                                            Username
                                        </label>
                                        <div className='relative'>
                                            <input
                                                type='text'
                                                id='username'
                                                className={`w-full bg-white pl-10 pr-3 py-2 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-[#eda515]`}
                                                placeholder='Enter your username'
                                                {...register('name')}
                                            />
                                            {errors.name && <span className='text-red-400'>{errors.name.message}</span>}
                                            <FaUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                                        </div>
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                                            Email Address
                                        </label>
                                        <div className='relative'>
                                            <input
                                                type='email'
                                                id='email'
                                                className={`w-full bg-white pl-10 pr-3 py-2 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-[#eda515]`}
                                                placeholder='Enter your email address'
                                                {...register('email')}
                                            />
                                            {errors.email && (
                                                <span className='text-red-400'>{errors.email.message}</span>
                                            )}
                                            <FaEnvelope className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                                        </div>
                                    </div>
                                    <div className='mb-4'>
                                        <label
                                            htmlFor='password'
                                            className='block text-sm font-medium text-gray-700 mb-1'
                                        >
                                            Password
                                        </label>
                                        <div className='relative'>
                                            <input
                                                type='password'
                                                id='password'
                                                className={`w-full pl-10 pr-3 py-2 bg-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#eda515]`}
                                                placeholder='Cảnh báo: Chức năng này chưa thể sử dụng !!!'
                                                // {...register('password')}
                                                disabled
                                            />
                                            {errors.password && (
                                                <span className='text-red-400'>{errors.password.message}</span>
                                            )}
                                            <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div>
                                    <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-1'>
                                        Phone
                                    </label>
                                    <div className='relative'>
                                        <input
                                            type='text'
                                            id='phone'
                                            className='w-full pl-10 bg-white pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eda515]'
                                            placeholder='Enter your current password'
                                            {...register('phone')}
                                        />
                                        {errors.phone && <span className='text-red-400'>{errors.phone.message}</span>}
                                        <FaPhone className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor='address' className='block text-sm font-medium text-gray-700 mb-1'>
                                        Address
                                    </label>
                                    <div className='relative'>
                                        <input
                                            type='text'
                                            id='address'
                                            className={`w-full pl-10 pr-3 py-2 bg-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#eda515]`}
                                            placeholder='Enter your new password'
                                            {...register('address')}
                                        />
                                        {errors.address && (
                                            <span className='text-red-400'>{errors.address.message}</span>
                                        )}
                                        <FaAddressCard className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end space-x-4'>
                                <button
                                    onClick={() => {
                                        reset()
                                        ;(document.getElementById('modal_update_user') as HTMLDialogElement)?.close()
                                    }}
                                    type='button'
                                    className='px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#eda515] transition duration-300'
                                >
                                    Cancel
                                </button>
                                <button
                                    type='submit'
                                    onClick={() => {
                                        reset()
                                        ;(document.getElementById('modal_update_user') as HTMLDialogElement)?.close()
                                    }}
                                    className='px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#eda515] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#eda515] transition duration-300'
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <form method='dialog' className='modal-backdrop'>
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default UpdateUser
