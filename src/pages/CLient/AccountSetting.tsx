import { FaUser, FaEnvelope, FaUpload, FaPhone } from 'react-icons/fa'
import ChangePassword from '../../components/Client/ChangePassword'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form'
import { TUsers } from '../../interfaces/Users'
import { GET_BY_ID_User } from '../../services/Users'
import { useContext, useEffect, useState } from 'react'
import { userCT } from '../../contexts/UsersContext'
import { UploadImageProductToCloudinary } from '../../services/Products'
import { useNavigate, useParams } from 'react-router-dom'

const schema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    image: Joi.string()
})
const AccountSettings = () => {
    const { id } = useParams()
    const navi = useNavigate()
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
                    const data = await GET_BY_ID_User(id as any)
                    reset({
                        name: data.name,
                        email: data.email,
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
            <div className='max-w-4xl my-28 mx-auto p-6 bg-white rounded-lg shadow-md'>
                <h2 className='text-3xl font-bold mb-6 text-gray-800'>Account Settings</h2>
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
                                <label htmlFor='username' className='block text-sm font-medium text-gray-700 mb-1'>
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
                                    {errors.email && <span className='text-red-400'>{errors.email.message}</span>}
                                    <FaEnvelope className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='address' className='block text-sm font-medium text-gray-700 mb-1'>
                                    Address
                                </label>
                                <div className='relative'>
                                    <input
                                        type='text'
                                        id='address'
                                        className={`w-full bg-white pl-10 pr-3 py-2 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-[#eda515]`}
                                        placeholder='Enter your address address'
                                        {...register('address')}
                                    />
                                    {errors.address && <span className='text-red-400'>{errors.address.message}</span>}
                                    <FaEnvelope className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-1'>
                                    Phone
                                </label>
                                <div className='relative'>
                                    <input
                                        type='text'
                                        id='phone'
                                        className={`w-full bg-white pl-10 pr-3 py-2 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-[#eda515]`}
                                        placeholder='Enter your number phone '
                                        {...register('phone')}
                                    />
                                    {errors.phone && <span className='text-red-400'>{errors.phone.message}</span>}
                                    <FaPhone className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between space-x-4'>
                        <button
                            className='bg-[#eda515] btn text-white border-transparent hover:bg-white hover:text-[#eda515] hover:border-[#eda515]'
                            type='button'
                            onClick={() =>
                                (document.getElementById('change_password') as HTMLDialogElement)?.showModal()
                            }
                        >
                            Change password
                        </button>
                        <div>
                            <button
                                type='button'
                                className='bg-white border border-[#eda515] btn mr-4 text-[#1c597c] hover:bg-[#eda515] hover:text-white hover:border-transparent'
                                onClick={() => navi('/')}
                            >
                                Cancel
                            </button>
                            <button
                                type='submit'
                                className='bg-[#eda515] btn text-white border-transparent hover:bg-[#1c597c] hover:text-white  hover:border-[#1c597c]'
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ChangePassword />
        </>
    )
}

export default AccountSettings
