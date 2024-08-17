import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
type Props = {
    show: boolean
    onClose: () => void
    onConfirm: () => void
}
const ConfirmModal = ({ show, onClose, onConfirm }: Props) => {
    if (!show) return null

    const handleConfirm = () => {
        onConfirm()
        toast.success('Delete Successfully!!!')
        onClose()
    }

    const handleCancel = () => {
        toast.error('Action cancelled.')
        onClose()
    }

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50'>
            <div className='bg-white p-6 rounded-md shadow-lg'>
                <h2 className='text-xl font-semibold mb-4'>Are you sure?</h2>
                <div className='flex gap-4'>
                    <button
                        onClick={handleConfirm}
                        className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
                    >
                        Yes
                    </button>
                    <button onClick={handleCancel} className='bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400'>
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal
