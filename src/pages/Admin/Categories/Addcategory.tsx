import Joi from 'joi'
import { UploadImageProductToCloudinary } from '../../../services/Products'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { categoriesCT } from '../../../contexts/CategoriesContext'
import { TCategories } from '../../../interfaces/Categories'
import { FaUpload, FaUser } from 'react-icons/fa'
const schema = Joi.object({
    name: Joi.string().required().min(3).max(20),
    thumbnail: Joi.string(),
    status: Joi.boolean().default(true)
})
const Addcategory = () => {
    const { handleAdd } = useContext(categoriesCT)
    const [thumbnail, setThumbnail] = useState<string>('')

    const uploadThumbnail = async (file: any) => {
        const formData = new FormData()
        formData.append('file', file[0])
        formData.append('upload_preset', 'o70gyljw')
        const thumbnail = await UploadImageProductToCloudinary(formData)
        setThumbnail(thumbnail.url)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<TCategories>({ resolver: joiResolver(schema) })
    const onSubmit = (brand: TCategories) => {
        handleAdd({ ...brand, thumbnail: thumbnail })
        reset()
        setThumbnail('')
    }
    return (
        <>
            <dialog id='modal_add_category' className='modal'>
                <div className='modal-box flex-col w-full h-full font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4'>
                    <form method='dialog'>
                        <button className='btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2'>✕</button>
                    </form>
                    {/*  */}
                    <div className='w-full h-full mx-auto p-6 bg-white rounded-lg'>
                        <h2 className='text-3xl font-bold mb-6 text-gray-800'>Add Category</h2>
                        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col md:flex-row md:space-x-4'>
                                <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                                    <div className='relative'>
                                        <div className='w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center mx-auto overflow-hidden'>
                                            {thumbnail ? (
                                                <>
                                                    <img
                                                        src={thumbnail}
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
                                                onChange={(e) => uploadThumbnail(e.target.files!)}
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
                                            Name Category
                                        </label>
                                        <div className='relative'>
                                            <input
                                                type='text'
                                                id='username'
                                                className={`w-full bg-white pl-10 pr-3 py-2 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-[#eda515]`}
                                                placeholder='Enter your category name'
                                                {...register('name')}
                                            />
                                            {errors.name && <span className='text-red-400'>{errors.name.message}</span>}
                                            <FaUser className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end space-x-4'>
                                <button
                                    onClick={() => {
                                        reset()
                                        ;(document.getElementById('modal_add_category') as HTMLDialogElement)?.close()
                                    }}
                                    type='button'
                                    className='px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#eda515] transition duration-300'
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() =>
                                        (document.getElementById('modal_add_category') as HTMLDialogElement)?.close()
                                    }
                                    type='submit'
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

export default Addcategory
