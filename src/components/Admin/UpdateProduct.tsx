import { useContext, useEffect, useState } from 'react'
import { categoriesCT } from '../../contexts/CategoriesContext'
import { TCategories } from '../../interfaces/Categories'
import { useForm } from 'react-hook-form'
import { TProduct } from '../../interfaces/Products'
import { productCT } from './../../contexts/ProductsContext'
import {
    GET_BY_ID_Product,
    UploadFilesImagesToCloudinary,
    UploadImageProductToCloudinary
} from './../../services/Products'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'

const schema = Joi.object({
    name: Joi.string().required(),
    brand: Joi.string().required(),
    gender: Joi.string().required(),
    category: Joi.string().required(),
    price: Joi.number().required().min(0),
    description: Joi.string().allow(''),
    is_in_inventory: Joi.boolean().default(true),
    images: Joi.array().default([])
})
type Props = {
    id: number | string
}
const UpdateProduct = ({ id }: Props) => {
    const { categories } = useContext(categoriesCT)
    const { handleUpdate } = useContext(productCT)
    const [thumbnail, setThumbnail] = useState<string>('')
    const [files, setFiles] = useState<any[]>([])

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<TProduct>({ resolver: joiResolver(schema) })

    useEffect(() => {
        if (id !== null) {
            ;(async () => {
                try {
                    const data = await GET_BY_ID_Product(id)
                    reset({
                        name: data.name,
                        brand: data.brand,
                        price: data.price,
                        description: data.description,
                        category: data.category,
                        gender: data.gender
                    })
                    setThumbnail(data.thumbnail)
                    setFiles(data.images || [])
                } catch (error) {
                    console.error('Error fetching product:', error)
                }
            })()
        }
    }, [id])

    const uploadThumbnail = async (file: any) => {
        if (!file) return
        const formData = new FormData()
        formData.append('file', file[0])
        formData.append('upload_preset', 'o70gyljw')
        const image = await UploadImageProductToCloudinary(formData)
        console.log(image)
        setThumbnail(image.url)
    }
    const uploadFiles = async (files: FileList | null) => {
        if (!files) return
        const formData = new FormData()
        formData.append('upload_preset', 'o70gyljw')

        // Chuyển FileList thành mảng File
        const fileArray = Array.from(files)

        // Lưu trữ tất cả các phản hồi từ Cloudinary trong một mảng
        const uploadedFiles = await Promise.all(
            fileArray.map(async (file) => {
                formData.append('file', file)
                const res = await UploadFilesImagesToCloudinary(formData)
                return res.url
            })
        )

        // Cập nhật trạng thái files bằng cách thay thế các tệp tin hiện tại với các tệp tin đã tải lên mới
        setFiles(uploadedFiles)
    }
    const onSubmit = async (data: TProduct) => {
        await handleUpdate(id, { ...data, thumbnail, images: files })
        location.reload()
    }
    return (
        <>
            <dialog id='modal_update_product' className='modal'>
                <div className='modal-box flex-col font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4'>
                    <form method='dialog'>
                        <button className='btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2'>✕</button>
                    </form>
                    <h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>Update product</h2>
                    <section className='bg-white w-full flex justify-center dark:bg-gray-900'>
                        <div className='pt-4 pb-8 px-4 mx-auto max-w-2xl'>
                            <form action='#' onSubmit={handleSubmit(onSubmit)}>
                                <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                                    <div className='sm:col-span-2'>
                                        <label className='text-base text-gray-500 font-semibold mb-2 block'>
                                            Product Name
                                        </label>
                                        <input
                                            type='text'
                                            id='name'
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                            placeholder='Type product name'
                                            {...register('name', { required: true })}
                                        />
                                        {errors.name && <span className='text-red-400'>{errors.name.message}</span>}
                                    </div>
                                    <div className='w-full'>
                                        <label className='text-base text-gray-500 font-semibold mb-2 block'>
                                            Brand
                                        </label>

                                        <input
                                            type='text'
                                            id='brand'
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                            placeholder='Product brand'
                                            {...register('brand', { required: true })}
                                        />
                                        {errors.brand && <span className='text-red-400'>{errors.brand.message}</span>}
                                    </div>
                                    <div className='w-full'>
                                        <label className='text-base text-gray-500 font-semibold mb-2 block'>
                                            Price
                                        </label>
                                        <input
                                            type='number'
                                            id='price'
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                            placeholder='$2999'
                                            {...register('price')}
                                        />
                                        {errors.price && <span className='text-red-400'>{errors.price.message}</span>}
                                    </div>
                                    <div>
                                        <label className='text-base text-gray-500 font-semibold mb-2 block'>
                                            Category
                                        </label>
                                        <select
                                            id='category'
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                            {...register('category')}
                                        >
                                            <option selected={false} disabled>
                                                Category
                                            </option>
                                            {categories.map((item: TCategories) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.category && (
                                            <span className='text-red-400'>{errors.category.message}</span>
                                        )}
                                    </div>
                                    <div>
                                        <label className='text-base text-gray-500 font-semibold mb-2 block'>
                                            Gender
                                        </label>

                                        <select
                                            id='gender'
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                            {...register('gender')}
                                        >
                                            <option selected disabled>
                                                Gender
                                            </option>
                                            <option value='MEN'>Men</option>
                                            <option value='WOMEN'>Women</option>
                                            <option value='MAN-WOMEN'>Man & Women</option>
                                        </select>
                                        {errors.gender && <span className='text-red-400'>{errors.gender.message}</span>}
                                    </div>
                                    <div className='sm:col-span-2'>
                                        <label className='text-base text-gray-500 font-semibold mb-2 block'>
                                            Thumbnail
                                        </label>
                                        <label
                                            htmlFor='uploadFile1'
                                            className='bg-white sm:col-span-2 text-gray-500 font-semibold text-base rounded w-full  h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]'
                                            style={{
                                                backgroundImage: `url(${thumbnail})`,
                                                backgroundPosition: `center`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover'
                                            }}
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='w-11 mb-2 fill-gray-500'
                                                viewBox='0 0 32 32'
                                            >
                                                <path
                                                    d='M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z'
                                                    data-original='#000000'
                                                />
                                                <path
                                                    d='M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z'
                                                    data-original='#000000'
                                                />
                                            </svg>
                                            Upload file
                                            <input
                                                type='file'
                                                id='uploadFile1'
                                                className='hidden'
                                                onChange={(e) => uploadThumbnail(e.target.files!)}
                                            />
                                            <p className='text-xs font-medium text-gray-400 mt-2'>
                                                PNG, JPG SVG, WEBP, and GIF are Allowed.
                                            </p>
                                        </label>
                                    </div>
                                    {/* images */}
                                    <div className='sm:col-span-2'>
                                        <label
                                            htmlFor='images'
                                            className='text-base text-gray-500 font-semibold mb-2 block'
                                        >
                                            Upload files
                                        </label>
                                        <input type='file' multiple onChange={(e) => uploadFiles(e.target.files)} />
                                        <div className='flex flex-wrap gap-2 mt-2'>
                                            {files.map((fileUrl, index) => (
                                                <img
                                                    key={index}
                                                    src={fileUrl}
                                                    alt={`Image Preview ${index + 1}`}
                                                    className='w-32 h-32 object-cover'
                                                />
                                            ))}
                                        </div>
                                        <p className='text-xs text-gray-400 mt-2'>
                                            PNG, JPG SVG, WEBP, and GIF are Allowed.
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <div className='sm:col-span-2'>
                                        <label className='text-base text-gray-500 font-semibold mb-2 block'>
                                            Description
                                        </label>
                                        <textarea
                                            id='description'
                                            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                                            placeholder='Your description here'
                                            {...register('description')}
                                        ></textarea>
                                        {errors.description && (
                                            <span className='text-red-400'>{errors.description.message}</span>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type='submit'
                                    className='py-2 px-4 rounded-lg bg-[#EDA315] border-2 border-transparent hover:text-white text-white text-md mr-4 hover:bg-[#316887] inline-flex items-center mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700  focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'
                                >
                                    Update product
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
                <form method='dialog' className='modal-backdrop'>
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default UpdateProduct
