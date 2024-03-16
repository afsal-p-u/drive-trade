import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { BsChat } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-[100px] py-3 border-b-[1px] shadow-sm">
      <div className="flex items-center justify-between">
        <Link to="/vehicles">
          <h1 className="text-3xl font-medium">
            <span className="text-red-500">D</span>rive
            <span className="text-red-500">T</span>rade
          </h1>
        </Link>

        <div className="flex gap-11">
          <div className="border-[1px] px-3 py-1 rounded-md flex items-center">
            <input type="search" placeholder="Search here..." className="border-none outline-none" />
            <IoSearch className="text-xl cursor-pointer" />
          </div>
          <div className="flex items-center gap-5">
            <CiBookmark className="text-2xl cursor-pointer" />
            <Link to='/chat'>
              <BsChat className="text-xl cursor-pointer" />
            </Link>
            <div className="w-[30px] h-[30px] bg-gray-500 rounded-full cursor-pointer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
