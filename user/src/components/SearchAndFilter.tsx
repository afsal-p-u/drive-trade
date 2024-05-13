import { FaLocationDot } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";

const SearchAndFilter = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden rounded-lg border-[#575757] border-[1px]">
      <div className="flex gap-3 items-center px-4 h-10 cursor-pointer bg-[#f5f3f3]">
        <div className="">
          <FaLocationDot className="" />
        </div>

        <p className="text-sm">Kannur</p>
      </div>

      <div className="px-5 h-10 flex items-center justify-between gap-2">
        <input
          type="search"
          placeholder="Search here..."
          className="border-none outline-none bg-transparent text-sm w-[300px] text-gray-200"
        />

        <IoSearch className="text-lg cursor-pointer text-white" />
      </div>

      <div className="h-10 w-10 bg-[#f5f3f3] flex items-center justify-center cursor-pointer">
        <FaFilter className="text-md" />
      </div>
    </div>
  );
};

export default SearchAndFilter;
