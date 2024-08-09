import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Client/Footer'
import Header from '../components/Client/Header'
import Banner from '../components/Client/Banner'

const Client = () => {
    const location = useLocation()
    const hiddenBanner =
        location.pathname.includes('/blogs') ||
        location.pathname.includes('/detail') ||
        location.pathname.includes('/search') ||
        location.pathname.includes('/category') ||
        location.pathname.includes('/about-us') ||
        location.pathname.includes('/account-setting') ||
        location.pathname.includes('/blog')
    return (
        <>
            <Header />
            {!hiddenBanner && <Banner />}
            <Outlet />
            <Footer />
        </>
    )
}

export default Client
