import { FaUser, FaEnvelope, FaLock, FaUpload } from 'react-icons/fa'

const AccountSettings = () => {
    return (
        <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md'>
            <h2 className='text-3xl font-bold mb-6 text-gray-800'>Account Settings</h2>
            <form className='space-y-6'>
                <div className='flex flex-col md:flex-row md:space-x-4'>
                    <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                        <div className='relative'>
                            <div className='w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center mx-auto'>
                                <FaUser className='text-gray-400 text-6xl' />
                            </div>
                            <label
                                htmlFor='profilePicture'
                                className='absolute bottom-0 right-0 bg-[#eda515] text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition duration-300'
                            >
                                <FaUpload />
                                <input type='file' id='profilePicture' accept='image/*' className='hidden' />
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
                                    name='username'
                                    className={`w-full bg-white pl-10 pr-3 py-2 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-[#eda515]`}
                                    placeholder='Enter your username'
                                />
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
                                    name='email'
                                    className={`w-full bg-white pl-10 pr-3 py-2 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-[#eda515]`}
                                    placeholder='Enter your email address'
                                />
                                <FaEnvelope className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor='currentPassword' className='block text-sm font-medium text-gray-700 mb-1'>
                            Current Password
                        </label>
                        <div className='relative'>
                            <input
                                type='password'
                                id='currentPassword'
                                name='currentPassword'
                                className='w-full pl-10 bg-white pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#eda515]'
                                placeholder='Enter your current password'
                            />
                            <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='newPassword' className='block text-sm font-medium text-gray-700 mb-1'>
                            New Password
                        </label>
                        <div className='relative'>
                            <input
                                type='password'
                                id='newPassword'
                                name='newPassword'
                                className={`w-full pl-10 pr-3 py-2 bg-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#eda515]`}
                                placeholder='Enter your new password'
                            />
                            <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700 mb-1'>
                            Confirm New Password
                        </label>
                        <div className='relative'>
                            <input
                                type='password'
                                id='confirmPassword'
                                name='confirmPassword'
                                className={`w-full pl-10 pr-3 py-2 bg-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#eda515]`}
                                placeholder='Confirm your new password'
                            />
                            <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-end space-x-4'>
                    <button
                        type='button'
                        className='px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#eda515] transition duration-300'
                    >
                        Cancel
                    </button>
                    <button
                        type='submit'
                        className='px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#eda515] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#eda515] transition duration-300'
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AccountSettings
