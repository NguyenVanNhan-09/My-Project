const ErrorsModal = () => {
    return (
        <>
            <dialog id='modal_errors' className='modal'>
                <div className='modal-box bg-blue-gray-50'>
                    <form method='dialog'>
                        <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
                    </form>
                    <span className='text-red-600'>
                        <span className='font-bold'>Cảnh báo:</span> Chức năng này chưa phát triển vui lòng đợi sau một
                        khoảng thời gian nữa !!!
                    </span>
                </div>
                <form method='dialog' className='modal-backdrop'>
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default ErrorsModal
