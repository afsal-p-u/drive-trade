import { useState } from "react";
import { BsChatLeftText } from "react-icons/bs";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="w-full bg-primary sticky top-0">
      <div className="flex justify-between items-center h-[10vh] px-[50px] border-b-[1px] border-gray-200">
        <h1 className="text-2xl font-bold cursor-pointer">
          <span className="text-blue-500">D</span>rive
          <span className="text-blue-500">T</span>rade
        </h1>

        <div className="flex gap-7 items-center">
          {isLoggedIn ? (
            <>
              <BsChatLeftText className="text-2xl cursor-pointer" />

              <div className="w-[35px] h-[35px] rounded-full border-[1px] cursor-pointer"></div>
            </>
          ) : (
            <>
              <button
                className="px-7 py-2 text-sm border-[1px] rounded-2xl bg-blue-500 text-white
              hover:bg-blue-600"
              >
                Get Started
              </button>

              <button className="px-7 py-2 text-sm border-[1px] rounded-2xl hover:bg-white">
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
