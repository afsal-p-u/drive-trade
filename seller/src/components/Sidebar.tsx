import { Link } from "react-router-dom"
import { CiChat1 } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";

const Sidebar = () => {
    return (
        <div className="w-[150px] border-r-[1px] shadow-sm h-[90vh] sticky left-0 top-[9vh] py-3">
            <div className="">
                <Link to="/chats" className="flex gap-1 items-center font-medium">
                    <CiChat1 className="" />
                    <p>Dashboard</p>
                </Link>
                <Link to="/chats" className="mt-2 flex gap-1 items-center font-medium">
                    <CiChat1 className="" />
                    <p>Chats</p>
                </Link>
                <Link to="/products" className="mt-2 flex gap-1 items-center font-medium">
                    <IoCarSportOutline  className="" />
                    <p>Products</p>
                </Link>
                
            </div>
        </div>
    )
}

export default Sidebar