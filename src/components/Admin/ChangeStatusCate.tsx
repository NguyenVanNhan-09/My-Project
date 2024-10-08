import { useContext } from 'react'
import { categoriesCT } from '../../contexts/CategoriesContext'
type Props = {
    id: any
    valueTrue: string
    valueFalse: string
}
const ChangeStatusCate = ({ id, valueTrue, valueFalse }: Props) => {
    const { handleUpdate } = useContext(categoriesCT)

    const handleUpdateStatus = async (status: boolean) => {
        await handleUpdate(id, { status: status })
        const modal = document.getElementById('modal_change_status') as HTMLDialogElement
        if (modal) {
            modal.close()
        }
    }
    return (
        <>
            <dialog id='modal_change_status' className='modal'>
                <div className='modal-box'>
                    <form method='dialog'>
                        <button className='btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2'>✕</button>
                    </form>
                    <div className='flex justify-center'>
                        <button
                            type='button'
                            onClick={() => handleUpdateStatus(true)}
                            className='mr-2 px-4 py-2 text-white bg-green-500 rounded'
                        >
                            {valueTrue}
                        </button>
                        <button
                            type='button'
                            onClick={() => handleUpdateStatus(false)}
                            className='px-4 py-2 text-white bg-red-500 rounded'
                        >
                            {valueFalse}
                        </button>
                    </div>
                </div>
                <form method='dialog' className='modal-backdrop'>
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default ChangeStatusCate
