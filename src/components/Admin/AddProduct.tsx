import { useContext, useRef, useState } from 'react'
import { categoriesCT } from '../../contexts/CategoriesContext'
import { TCategories } from '../../interfaces/Categories'
import { useForm } from 'react-hook-form'
import { TProduct } from '../../interfaces/Products'
import { UploadImageProductToCloudinary } from '../../services/Products'

const AddProduct = () => {
    const { categories } = useContext(categoriesCT)
    const [thumbnail, setThumbnail] = useState<string>('')
    const [images, setImages] = useState<string[]>([])
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const handleFileSelect = () => {
        fileInputRef.current?.click()
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TProduct>()
    const uploadThumbnail = async (file: File) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'o70gyljw')
        try {
            const image = await UploadImageProductToCloudinary(formData)
            setThumbnail(image.url) // Cập nhật thumbnail
        } catch (error) {
            console.error('Error uploading thumbnail:', error)
        }
    }
    const uploadImages = async (files: FileList) => {
        if (!files || files.length === 0) return

        const uploadPromises = Array.from(files).map((file) => {
            const formData = new FormData()
            formData.append('file', file)
            formData.append('upload_preset', 'o70gyljw')
            return UploadImageProductToCloudinary(formData)
        })

        try {
            const responses = await Promise.all(uploadPromises)
            const newImageUrls = responses.map((response) => response.url)
            setImages((prevImages) => [...prevImages, ...newImageUrls])
        } catch (error) {
            console.error('Error uploading images:', error)
        }
    }

    const onSubmit = (data: TProduct) => {
        console.log(data)
    }
    return (
        <>
            <dialog id='modal_add_product' className='modal'>
                <div className='modal-box flex-col font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4'>
                    <form method='dialog'>
                        <button className='btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2'>✕</button>
                    </form>
                    <h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>Add a new product</h2>
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
                                            {...register('name')}
                                        />
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
                                            {...register('brand')}
                                        />
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
                                            <option selected disabled>
                                                Select category
                                            </option>
                                            {categories.map((item: TCategories) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
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
                                                Select gender
                                            </option>
                                            <option value='MEN'>Men</option>
                                            <option value='WOMEN'>Women</option>
                                            <option value='MAN&WOMEN'>Man & Women</option>
                                        </select>
                                    </div>
                                    <div className='sm:col-span-2'>
                                        <label className='text-base text-gray-500 font-semibold mb-2 block'>
                                            Thumbnail
                                        </label>
                                        <label
                                            htmlFor='uploadFile1'
                                            className='bg-white sm:col-span-2 text-gray-500 font-semibold text-base rounded w-full  h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]'
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
                                                onChange={(e) => {
                                                    if (e.target.files && e.target.files[0]) {
                                                        uploadThumbnail(e.target.files[0])
                                                    }
                                                }}
                                            />
                                            <p className='text-xs font-medium text-gray-400 mt-2'>
                                                PNG, JPG SVG, WEBP, and GIF are Allowed.
                                            </p>
                                        </label>
                                    </div>

                                    <div className='sm:col-span-2'>
                                        <label
                                            htmlFor='images'
                                            className='text-base text-gray-500 font-semibold mb-2 block'
                                        >
                                            Upload file
                                        </label>
                                        <input
                                            type='file'
                                            ref={fileInputRef}
                                            multiple
                                            onChange={(e) => {
                                                const files = e.target.files
                                                if (files) {
                                                    uploadImages(files)
                                                }
                                            }}
                                        />

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
                                    </div>
                                </div>

                                <button
                                    type='submit'
                                    className='py-2 px-4 rounded-lg bg-[#EDA315] border-2 border-transparent hover:text-white text-white text-md mr-4 hover:bg-[#316887] inline-flex items-center mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700  focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'
                                >
                                    Add product
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
                <form method='dialog' className='modal-backdrop'>
                    <button>close</button>
                </form>
            </dialog>
            {/* 
                name, brand, price, category, description, gender, thumbnail,
                ??? is_in_inventory,images
            */}
        </>
    )
}

export default AddProduct
