const ChangePassword = () => {
    return (
        <>
            <dialog id='change_password' className='modal'>
                <div className='modal-box bg-blue-gray-50'>
                    <form method='dialog'>
                        <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
                    </form>
                    <span className='text-red-600'>
                        <span className='font-bold'>Cảnh báo:</span> Chức năng này chưa phát triển vui lòng đợi sau một
                        khoảng thời gian nữa !!!
                    </span>
                    {/* <div className='grid'>
                        <div className='text-3xl font-bold'>Change Password</div>
                        <div className='mt-2'>
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
                        <div className='mt-2'>
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
                        <div className='mt-2'>
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
                        <button
                            type='submit'
                            className='px-6 py-2 mt-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#eda515] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#eda515] transition duration-300'
                        >
                            Save Changes
                        </button>
                    </div> */}
                </div>
                <form method='dialog' className='modal-backdrop'>
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default ChangePassword
