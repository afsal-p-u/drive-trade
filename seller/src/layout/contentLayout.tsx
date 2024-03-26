import { Outlet } from "react-router-dom"
import { Footer, Navbar, Sidebar } from "../components"

const ContentLayout = () => {
    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar/>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default ContentLayout