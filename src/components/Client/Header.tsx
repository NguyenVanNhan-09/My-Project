import { useContext, useState } from 'react'
import Login from './Login'
import { categoriesCT } from '../../contexts/CategoriesContext'
import { TCategories } from '../../interfaces/Categories'
import { Link, useNavigate } from 'react-router-dom'
import { brandsCT } from '../../contexts/BrandsContext'
import { TBrands } from '../../interfaces/Brands'
import Cart from './Cart'
import { cartCT } from '../../contexts/CartContext'
import { useForm } from 'react-hook-form'

const Header = () => {
    var checkRole = false
    const navi = useNavigate()
    const { register, handleSubmit } = useForm()
    const { categories } = useContext(categoriesCT)
    const { brands } = useContext(brandsCT)
    const { cartQty } = useContext(cartCT)
    const [showExample, setShowExample] = useState(false)

    const isUser = localStorage.getItem('user')
    const userName = isUser ? JSON.parse(localStorage.getItem('user')!)?.user?.name : undefined
    const userRole = isUser ? JSON.parse(localStorage.getItem('user')!)?.user?.role : undefined
    const userId = isUser ? JSON.parse(localStorage.getItem('user')!)?.user?.id : undefined
    if (userRole === 2 || userRole === 3) {
        checkRole = true
    }
    const logout = () => {
        localStorage.removeItem('user')
        if (!localStorage.getItem('user')) {
            alert('Logout successfully!!!')
        }
    }
    const handleClick = () => {
        setShowExample(!showExample)
    }

    const onSearch = (data: any) => {
        const { keywords } = data
        navi(`search?keywords=${keywords}`)
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
                        <Link to={`/`} className='max-sm:w-full flex items-center  max-sm:mb-3 shrink-0'>
                            <img
                                src='../../../public/image/Aura_Logo-removebg-preview.png'
                                alt='logo'
                                className='w-[100px] h-[100px]'
                            />
                            <span className='text-2xl font-bold'>Aura.vn</span>
                        </Link>

                        <div className='flex flex-wrap w-full items-center'>
                            <div className='xl:w-96 max-lg:w-full lg:ml-10 max-md:mt-4 max-lg:ml- focus:bg-transparent px-6 rounded h-11 outline-[#333] text-sm transition-all'>
                                <form className='max-w-md mx-auto' onSubmit={handleSubmit(onSearch)}>
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
                                            {...register('keywords')}
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
                                                        <li className='hover:text-[#eda515] text-black'>
                                                            <Link to={`/account-setting/${userId}`}>My Account</Link>
                                                        </li>
                                                        {checkRole ? (
                                                            <>
                                                                <li className='hover:text-[#eda515] text-black'>
                                                                    <Link to={'/admin'}>Admin</Link>
                                                                </li>
                                                            </>
                                                        ) : null}

                                                        <li className='hover:text-[#eda515] text-black'>
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
                                        <button
                                            type='button'
                                            onClick={() => handleClick()}
                                            className='flex items-center relative'
                                        >
                                            <span className='ti-shopping-cart w-[20px] h-[20px] mr-2 mt-1 text-white'></span>
                                            <span className='absolute top-[-8px] left-[6px] md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-700 bg-red-200 rounded-full'>
                                                {cartQty}
                                            </span>
                                            cart
                                        </button>
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
                                    <div className='hover:text-yellow-300 text-[#3A3A3A] text-[15px] font-medium block min-w-16 text-sm'>
                                        Categories
                                    </div>
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
                                <li className='relative max-lg:border-b max-lg:py-4 px-4 flex items-center Nav'>
                                    <div className='hover:text-yellow-300 text-[#3A3A3A] text-[15px] font-medium block min-w-16 text-sm'>
                                        Brand
                                    </div>
                                    <span className='ti-angle-down text-sm ml-2'></span>
                                    <ul className='Sub_nav absolute min-w-36 top-9 right-5 bg-slate-300'>
                                        {brands.map((brand: TBrands) => (
                                            <li
                                                key={brand.id}
                                                className='cursor-pointer hover:text-yellow-500 py-2 px-5 w-full'
                                            >
                                                <Link to={`/brand/${brand.id}`}>{brand.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
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
            {showExample && <Cart change={showExample} setChange={setShowExample} />}
        </>
    )
}

export default Header
