import { Navigate, Outlet } from "react-router-dom"
import { Footer, Navbar, Sidebar } from "../components"
import { useAuthContext } from "../contexts/AuthContext"

const ContentLayout = () => {
    const { user } = useAuthContext();

    return (
        <>
            {user ? (
                <>
                    <div className="sticky top-0 z-50 w-full bg-white">
                        <Navbar />
                    </div>
                    <div className="flex px-[30px]">
                        <Sidebar/>
                        <div className="py-3 pl-3 w-full">
                            <Outlet />
                            <Footer />
                        </div>
                    </div>
                </>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    )
}

export default ContentLayout