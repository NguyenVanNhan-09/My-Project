import { useContext } from 'react'
import { productCT } from './../../contexts/ProductsContext'

type Props = {
    id: number | string
}

const ChangeStock = ({ id }: Props) => {
    const { handleUpdate } = useContext(productCT)

    const handleUpdateStock = async (isInStock: boolean) => {
        await handleUpdate(id, { is_in_inventory: isInStock })
        location.reload()
    }

    return (
        <>
            <dialog id='modal_change_stock' className='modal'>
                <div className='modal-box'>
                    <form method='dialog'>
                        <button className='btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2'>✕</button>
                    </form>
                    <div>
                        <button
                            onClick={() => handleUpdateStock(true)}
                            className='mr-2 px-4 py-2 text-white bg-green-500 rounded'
                        >
                            In Stock
                        </button>
                        <button
                            onClick={() => handleUpdateStock(false)}
                            className='px-4 py-2 text-white bg-red-500 rounded'
                        >
                            Out of Stock
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

export default ChangeStock
