import { Navbar } from "../components";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="w-full bg-primary">
        <div className="px-[50px] min-h-[90vh] py-5">
          {/* search */}
          <div className="flex items-center justify-center gap-5">
            <div className="flex gap-3 items-center px-4 h-10 border-[1px] rounded-2xl cursor-pointer">
              <div className="">
                <FaLocationDot />
              </div>

              <p className="text-sm text-gray-500">Kannur</p>
            </div>

            <div className="px-5 h-10 flex items-center justify-between gap-2 bg-primary border-[1px] rounded-2xl">
              <input
                type="search"
                placeholder="Search here..."
                className="border-none outline-none bg-transparent text-sm w-[300px]"
              />

              <IoSearch className="text-lg cursor-pointer" />
            </div>

            <div className="h-10 w-10 border-[1px] rounded-2xl flex items-center justify-center cursor-pointer">
              <FaFilter className="text-md" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
