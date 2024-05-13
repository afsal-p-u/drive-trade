import { useState } from "react";
import { BsChatLeftText } from "react-icons/bs";
import SearchAndFilter from "./SearchAndFilter";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="w-full bg-[#181818] sticky top-0 z-[999]">
      <div className="flex justify-between items-center h-[11vh] px-[20px]">
        <h1 className="text-2xl font-bold cursor-pointer text-white flex-1">
          {/* <span className="text-zinc-600">D</span>rive
          <span className="text-zinc-600">T</span>rade */}
          DriveTrade
        </h1>

        <SearchAndFilter />

        <div className="flex gap-7 items-center flex-1 justify-end">
          {isLoggedIn ? (
            <>
              <BsChatLeftText className="text-2xl cursor-pointer text-white" />

              <div className="w-[35px] h-[35px] rounded-full border-[1px] cursor-pointer"></div>
            </>
          ) : (
            <>
              <button
                className="px-7 py-2 text-sm rounded-lg bg-[#f5f3f3] hover:text-[#f5f3f3]
              hover:bg-transparent border-white border-[1px]"
              >
                Get Started
              </button>

              <button className="px-7 py-2 text-sm text-white border-[1px] rounded-lg hover:bg-white hover:text-black">
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
