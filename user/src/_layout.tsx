import { Outlet } from "react-router-dom"
import { Navbar } from "./components"
import { Home, Search } from "./pages"

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout