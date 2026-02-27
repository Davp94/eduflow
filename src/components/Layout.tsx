import { Outlet, useLocation } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

function Layout() {
    //COMPONENT LOGIC
    const location = useLocation();
    const isDashboard = location.pathname.includes('/dashboard');
    //VISUAL COMPONENT
    return (
        <>
            <div className='layout-container'>
                <Header />
                <main className="main-content">
                    <Outlet />
                </main>
                {!isDashboard && <Footer />}
            </div>

        </>
    )
}

export default Layout
