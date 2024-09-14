import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <div className="px-[100px] py-[20px] flex justify-between items-center">
        <div className="">
          <h1 className="text-2xl font-bold">
            {/* <Link to="/"> */}
              Drive<span className="text-secondary">Trade</span>
            {/* </Link> */}
          </h1>
        </div>

        <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
                {/* search */}
                <CiSearch className="" />
                <div className="">
                    <input type="search" name="" placeholder="Search here..." id="" />
                </div>
            </div>

            <div className="flex items-center gap-2">
                {/* profile */}
                <div className="">
                    <IoMdNotificationsOutline />
                </div>

                <div className="flex items-center gap-2">
                    <div className="">
                        {/* image */}
                        <img src="" alt="" />
                    </div>

                    <div className="">
                        <h3>Afsal</h3>
                        <p>Admin</p>
                    </div>

                    <MdOutlineKeyboardArrowDown />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
