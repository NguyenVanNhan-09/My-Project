import { Navigate, useRoutes } from 'react-router-dom'
import './App.css'
import BlogItem from './pages/CLient/BlogItem'
import Blogs from './pages/CLient/Blogs'
import Category from './pages/CLient/Category'
import Detail from './pages/CLient/Detail'
import Home from './pages/CLient/Home'
import Client from './layouts/Client'
import Admin from './layouts/Admin'
import Search from './pages/CLient/Search'
import AccountSettings from './pages/CLient/AccountSetting'
import AboutUs from './pages/CLient/AboutUs'
import NotFound from './pages/CLient/NotFound'
import Dashboard from './pages/Admin/Dashboard'
import ProductsList from './pages/Admin/Products/ProductsList'
import Overview from './pages/Admin/Overview '
import UsersList from './pages/Admin/Users/UsersList'
function App() {
    const routes = useRoutes([
        {
            path: '',
            element: <Client />,
            children: [
                { path: '', element: <Navigate to='home' /> },
                { path: 'home', element: <Home /> },
                { path: 'search', element: <Search /> },
                { path: 'detail/:id', element: <Detail /> },
                { path: 'category', element: <Category /> },
                { path: 'blogs', element: <Blogs /> },
                { path: 'blog/:id', element: <BlogItem /> },
                { path: 'account-setting', element: <AccountSettings /> },
                { path: 'about-us', element: <AboutUs /> }
            ]
        },
        {
            path: 'admin',
            element: <Admin />,
            children: [
                { path: '', element: <Navigate to='dashboard' /> },
                {
                    path: 'dashboard',
                    element: <Dashboard />,
                    children: [
                        { path: '', element: <Navigate to='overview' /> },
                        { path: 'overview', element: <Overview /> },
                        { path: 'products-list', element: <ProductsList /> },
                        { path: 'users-list', element: <UsersList /> }
                    ]
                }
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

export default App
