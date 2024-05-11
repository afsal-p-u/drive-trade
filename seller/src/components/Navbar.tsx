const Navbar = () => {
    return (
        <div className="px-[30px] border-b-[1px] shadow-sm">
            <div className="h-[9vh] w-full flex justify-between items-center">
                <h3 className="font-bold text-2xl">Seller</h3>

                <div className="">
                    <div className="relative">
                        <div className="w-[35px] h-[35px] cursor-pointer rounded-full bg-gray-500"></div>
                        <div className="absolute left-[-50px] top-[40px] bg-gray-300 rounded-md px-5 py-2">
                            <button
                                className="text-sm font-medium text-red-500"
                            >Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar