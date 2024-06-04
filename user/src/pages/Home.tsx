import { Navbar, SearchAndFilter, VehicleCard } from "../components";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className="w-full bg-[#f5f3f3]">
        <div className="">
          <img src="" alt="" />
        </div>


        <div className="px-[20px] min-h-[88vh] py-5">
          <div className="bg-[#f8f8f8] border-[1px] shadow-sm border-black/10 mt-10 py-5 px-2 rounded-md">
            <h3 className="mb-3 text-xl pl-[50px]">Recommended</h3>

            {/* list */}
            <div className="relative">
              {/* slider */}
              <div className="absolute left-0 top-[50%] bg-white rounded-md px-1 py-5 translate-y-[-50%] cursor-pointer">
                <FaChevronLeft className="text-4xl" />
              </div>

              <div className="absolute right-0 top-[50%] bg-white rounded-md px-1 py-5 translate-y-[-50%] cursor-pointer">
                <FaChevronRight className="text-4xl" />
              </div>

              <div className="px-[50px]">
                <div className="flex gap-5 overflow-x-scroll vehicle-list-scrollbar">
                  <VehicleCard />
                  <VehicleCard />
                  <VehicleCard />
                  <VehicleCard />
                  <VehicleCard />
                  <VehicleCard />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
