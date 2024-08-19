import { Navigate, useRoutes } from 'react-router-dom'
import BlogItem from '../pages/Client/BlogItem'
import NotFound from '../pages/Client/NotFound'
import PrivateRoutes from './PrivateRoutes'
import Home from './../pages/Client/Home'
import Search from './../pages/Client/Search'
import Detail from './../pages/Client/Detail'
import Category from './../pages/Client/Category'
import Blogs from './../pages/Client/Blogs'
import AccountSettings from './../pages/Client/AccountSetting'
import AboutUs from './../pages/Client/AboutUs'
import Overview from './../pages/Admin/Overview '
import ProductsList from './../pages/Admin/Products/ProductsList'
import UsersList from './../pages/Admin/Users/UsersList'
import Admin from './../layouts/Admin'
import Client from './../layouts/Client'
import BrandsList from '../pages/Admin/Brands/BrandsList'
import Categories from '../pages/Admin/Categories/Categories'
import Checkout from '../pages/Client/Checkout'
import Brand from '../pages/Client/Brand'
import CartsList from '../pages/Admin/Carts/CartsList'

const AppRoutes = () => {
    const role = JSON.parse(localStorage.getItem('user')!)?.user?.role
    const routes = useRoutes([
        {
            path: '/',
            element: <Client />,
            children: [
                { path: '/', element: <Navigate to='home' /> },
                { path: 'home', element: <Home /> },
                { path: 'search', element: <Search /> },
                { path: 'detail/:id', element: <Detail /> },
                { path: 'category/:id', element: <Category /> },
                { path: 'brand/:id', element: <Brand /> },
                { path: 'blogs', element: <Blogs /> },
                { path: 'blog/:id', element: <BlogItem /> },
                { path: 'account-setting/:id', element: <AccountSettings /> },
                { path: 'about-us', element: <AboutUs /> },
                { path: 'checkout', element: <Checkout /> }
            ]
        },
        {
            path: 'admin',
            element: (
                <PrivateRoutes role={role}>
                    <Admin />
                </PrivateRoutes>
            ),
            children: [
                { path: '', element: <Navigate to='overview' /> },
                { path: 'overview', element: <Overview /> },
                { path: 'products', element: <ProductsList /> },
                { path: 'users', element: <UsersList /> },
                { path: 'brands', element: <BrandsList /> },
                { path: 'categories', element: <Categories /> },
                { path: 'carts', element: <CartsList /> }
            ]
        },
        // Not-Found
        {
            path: '*',
            element: <NotFound />
        }
    ])
    return (
        <>
            <div className='bg-white'>{routes}</div>
        </>
    )
}

export default AppRoutes
