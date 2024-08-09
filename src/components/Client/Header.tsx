import { useContext } from 'react'
import Login from './Login'
import { categoriesCT } from '../../contexts/CategoriesContext'
import { TCategories } from '../../interfaces/Categories'
import { Link } from 'react-router-dom'

const Header = () => {
    const { categories } = useContext(categoriesCT)
    var checkRole = false
    const isUser = localStorage.getItem('user')
    const userName = isUser ? JSON.parse(localStorage.getItem('user')!).name : undefined
    const userRole = isUser ? JSON.parse(localStorage.getItem('user')!).role : undefined
    if (userRole === 2) {
        checkRole = true
    }
    const logout = () => {
        localStorage.removeItem('user')
        if (!localStorage.getItem('user')) {
            alert('Logout successfully!!!')
        }
    }
    return (
        <>
            <div className=' shadow bg-white'>
                <div className='w-full mx-auto max-w-[1500px] p-4 md:flex md:items-center md:justify-between'>
                    <span className='text-sm sm:text-center text-[#292D32]'>
                        Need help? Call us: (+98) 0234 456 789
                    </span>

                    <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-[#292D32] sm:mt-0'>
                        <li>
                            <a href='#' className='hover:underline me-4 md:me-6'>
                                Our store
                            </a>
                        </li>
                        <li>
                            <a href='#' className='hover:underline me-4 md:me-6'>
                                Track your order
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <header className='shadow-md font-[sans-serif] tracking-wide relative z-50'>
                <div className='bg-[#003F62]'>
                    <section className='md:flex lg:items-center relative py-3 px-2  border-gray-200 bg-[#003F62] lg:min-h-[80px] max-lg:min-h-[60px] h-[100px] ml-[110px] mr-[110px]'>
                        <a href='#' className='max-sm:w-full max-sm:mb-3 shrink-0'>
                            <img src='../../public/image/logo1.png' alt='logo' className='w-[160px]' />
                        </a>

                        <div className='flex flex-wrap w-full items-center'>
                            <div className='xl:w-96 max-lg:w-full lg:ml-10 max-md:mt-4 max-lg:ml- focus:bg-transparent px-6 rounded h-11 outline-[#333] text-sm transition-all'>
                                <form className='max-w-md mx-auto'>
                                    <label
                                        htmlFor='default-search'
                                        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
                                    >
                                        Search
                                    </label>
                                    <div className='relative min-w-[438px]'>
                                        <input
                                            type='search'
                                            id='default-search'
                                            className='w-full block px-4 py-3 ps-10 text-sm text-black border border-gray-300 rounded-[20px]  focus:ring-blue-500 focus:border-blue-500 bg-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                            placeholder='Search any things'
                                            required
                                        />
                                        <button
                                            type='submit'
                                            className='text-white absolute end-0 top-0 h-full px-8 rounded-[20px] bg-[#EDA415] hover:bg-[#EDA415] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm py-2'
                                        >
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className='ml-auto max-lg:mt-4'>
                                <ul className='flex items-center'>
                                    {isUser ? (
                                        <>
                                            <li className='max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-white cursor-pointer'>
                                                <div className='dropdown dropdown-end'>
                                                    <div className='flex' tabIndex={0}>
                                                        <span className='ti-user w-[20px] h-[20px] mr-2 mt-1 text-white'></span>
                                                        <div>{userName}</div>
                                                    </div>
                                                    <ul
                                                        tabIndex={0}
                                                        className='dropdown-content menu bg-[#cbd4e1] rounded-box z-[1] w-52 mt-3 p-2 shadow'
                                                    >
                                                        <li className='hover:text-[#eae589]'>
                                                            <Link to={'/account-setting'}>My Account</Link>
                                                        </li>
                                                        {checkRole ? (
                                                            <>
                                                                <li className='hover:text-[#eae589]'>
                                                                    <Link to={'/admin'}>Admin</Link>
                                                                </li>
                                                            </>
                                                        ) : null}

                                                        <li className='hover:text-[#eae589]'>
                                                            <Link onClick={() => logout()} to={''}>
                                                                Logout
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li className='max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-white cursor-pointer'>
                                                <button
                                                    className=''
                                                    onClick={() => {
                                                        ;(
                                                            document.getElementById('my_modal_2') as HTMLDialogElement
                                                        )?.showModal()
                                                    }}
                                                >
                                                    <span className='ti-user w-[20px] h-[20px] mr-2 mt-1 text-white'></span>
                                                    Sign in
                                                </button>
                                                <Login />
                                            </li>
                                        </>
                                    )}

                                    <li className='max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-white cursor-pointer'>
                                        <a href='admin/dashboad'>
                                            <span className='ti-heart w-[20px] h-[20px] mr-2 mt-1 text-white'></span>
                                            wishlist
                                        </a>
                                    </li>
                                    <li className='max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-white cursor-pointer'>
                                        <a href='/cart' className='flex items-center'>
                                            <span className='ti-shopping-cart w-[20px] h-[20px] mr-2 mt-1 text-white'></span>
                                            cart
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div
                    id='collapseMenu h-[71px] ml-[110px] mr-[110px]'
                    className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'
                >
                    <ul className='bg-[#F4F4F4] flex justify-around lg:flex lg:flex-wrap lg:items-center min-h-[46px]'>
                        <div className='flex'>
                            <div className='flex items-center bg-[#EDA415] w-full'>
                                <p className='ml-4 text-white text-sm'>Browse categories</p>
                                <span className='ti-angle-down text-sm text-white ml-4 mr-3'></span>
                            </div>

                            <div className='flex items-center py-4 pl-[90px]'>
                                <li className='max-lg:border-b max-lg:py-4 px-4 flex items-center'>
                                    <Link
                                        to={'/'}
                                        className='hover:text-yellow-300 text-[#3A3A3A] text-[15px] font-medium block min-w-16 text-sm'
                                    >
                                        Home
                                    </Link>
                                    <span className='ti-angle-down text-sm ml-2'></span>
                                </li>
                                <li className='relative max-lg:border-b max-lg:py-4 px-4 flex items-center Nav'>
                                    <Link
                                        to={'/category'}
                                        className='hover:text-yellow-300 text-[#3A3A3A] text-[15px] font-medium block min-w-16 text-sm'
                                    >
                                        category
                                    </Link>
                                    <span className='ti-angle-down text-sm ml-2'></span>
                                    <ul className='Sub_nav absolute min-w-36 top-9 right-5 bg-slate-300'>
                                        {categories.map((category: TCategories) => (
                                            <li
                                                key={category.id}
                                                className='cursor-pointer hover:text-yellow-500 py-2 px-5 w-full'
                                            >
                                                <Link to={`/category/${category.id}`}>{category.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className='max-lg:border-b max-lg:py-4 px-4 flex items-center'>
                                    <Link
                                        to={'/blogs'}
                                        className='hover:text-yellow-300 text-[#3A3A3A] text-[15px] font-medium block min-w-16 text-sm'
                                    >
                                        Blogs
                                    </Link>
                                </li>
                                <li className='max-lg:border-b max-lg:py-4 px-4 flex items-center'>
                                    <Link
                                        to={'/page'}
                                        className='hover:text-yellow-300 text-[#3A3A3A] text-[15px] font-medium block min-w-16 text-sm'
                                    >
                                        Pages
                                    </Link>
                                    <span className='ti-angle-down text-sm ml-2'></span>
                                </li>
                                <li className='max-lg:border-b max-lg:py-4 px-4 flex items-center'>
                                    <Link
                                        to={'/about-us'}
                                        className='hover:text-yellow-300 text-[#3A3A3A] text-[15px] font-medium block min-w-16 text-sm'
                                    >
                                        About us
                                    </Link>
                                </li>
                            </div>
                        </div>

                        <div>
                            <p className='text-[#003F62] font-bold'>30 Days Free Return</p>
                        </div>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
