import { useContext } from 'react'
import { userCT } from './../../contexts/UsersContext'

type Props = {
    id: any
}

const ChangeRole = ({ id }: Props) => {
    const { handleUpdate } = useContext(userCT)

    const handleUpdateStock = async (role: number | string) => {
        await handleUpdate(id, { role: role })
        location.reload()
    }

    return (
        <>
            <dialog id='modal_change_role' className='modal'>
                <div className='modal-box'>
                    <form method='dialog'>
                        <button className='btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2'>✕</button>
                    </form>
                    <div className='flex justify-around w-full'>
                        <button
                            onClick={() => handleUpdateStock(1)}
                            className='mr-2 px-4 py-2 text-white bg-green-500 rounded'
                        >
                            User
                        </button>
                        <button
                            onClick={() => handleUpdateStock(2)}
                            className='px-4 py-2 text-white bg-red-500 rounded'
                        >
                            Admin
                        </button>
                        <button
                            onClick={() => handleUpdateStock(3)}
                            className='px-4 py-2 text-white bg-[#eda515] rounded'
                        >
                            Dev
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

export default ChangeRole
