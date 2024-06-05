import { Footer, Navbar, SearchAndFilter, VehicleCard } from "../components";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import image1 from "../assets/image1.webp";

const Home = () => {
  return (
    <>
      <div className="w-full bg-[#f5f3f3]">
        <div className="bg-ultra_light_blue h-[90vh] relative">
          <div className="w-full h-[60vh] relative">
            <div className="absolute z-10 bg-transparent w-full h-full flex items-center justify-center flex-col gap-2">
              <h1 className="text-primary text-4xl font-bold">
                Best Way to Find Your Dream{" "}
                <span className="">CAR</span>
              </h1>

              <button className="px-7 rounded-2xl py-2 text-sm text-primary bg-secondary">
                Search
              </button>
            </div>

            <div className="absolute w-full h-full bg-[#000000a4]"></div>

            <img src={image1} alt="" className="w-full h-full" />
          </div>

          <div className="w-full flex justify-center absolute bottom-[50px]">
            <div className="w-[80%] bg-white rounded-3xl px-10 py-10 shadow-md">
              <h3 className="text-xl font-semibold mb-1">
                Let's Find Your Perfect Car
              </h3>

              <hr />

              <div className="mt-3 flex gap-3 flex-wrap justify-center">
                <div className="flex flex-col gap-1 w-[300px]">
                  <label
                    htmlFor=""
                    className="text-small text-light_gray text-sm font-medium"
                  >
                    Brand Name
                  </label>
                  <select
                    name=""
                    id=""
                    className="px-5 py-2 text-sm border-[1px] rounded-md"
                  >
                    <option value="">Select Brand</option>
                    <option value="">BMW</option>
                    <option value="">Audi</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1 w-[300px]">
                  <label
                    htmlFor=""
                    className="text-small text-light_gray text-sm font-medium"
                  >
                    Year
                  </label>
                  <select
                    name=""
                    id=""
                    className="px-5 py-2 text-sm border-[1px] rounded-md"
                  >
                    <option value="">Select Year</option>
                    <option value="">BMW</option>
                    <option value="">Audi</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1 w-[300px]">
                  <label
                    htmlFor=""
                    className="text-small text-light_gray text-sm font-medium"
                  >
                    Price Range
                  </label>
                  <select
                    name=""
                    id=""
                    className="px-5 py-2 text-sm border-[1px] rounded-md"
                  >
                    <option value="">Select Price Range</option>
                    <option value="">BMW</option>
                    <option value="">Audi</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1 w-[300px]">
                  <label
                    htmlFor=""
                    className="text-small text-light_gray text-sm font-medium"
                  >
                    Body Type
                  </label>
                  <select
                    name=""
                    id=""
                    className="px-5 py-2 text-sm border-[1px] rounded-md"
                  >
                    <option value="">Select Body Type</option>
                    <option value="">BMW</option>
                    <option value="">Audi</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1 w-[300px]">
                  <label
                    htmlFor=""
                    className="text-small text-light_gray text-sm font-medium"
                  >
                    Car Model
                  </label>
                  <select
                    name=""
                    id=""
                    className="px-5 py-2 text-sm border-[1px] rounded-md"
                  >
                    <option value="">Select Model</option>
                    <option value="">BMW</option>
                    <option value="">Audi</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1 w-[300px]">
                  <label
                    htmlFor=""
                    className="text-small text-light_gray text-sm font-medium opacity-0"
                  >
                    fsaddsf
                  </label>
                  <button
                    className="w-[300px] rounded-md px-5 py-2 pt-[-20px] bg-secondary text-primary 
                    font-medium text-sm border-[1px]"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[20px] py-5 bg-primary">
          <div className="shadow-sm border-black/10 mt-10 py-5 px-2 rounded-md">
            <h3 className="mb-3 text-xl pl-[50px] font-medium">Recommended</h3>

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

        <div className="px-[20px] py-5 bg-primary">
          <div className="shadow-sm border-black/10 mt-10 pb-5 px-2 rounded-md">
            <h3 className="mb-3 text-xl pl-[50px] font-medium">
              Recently Added
            </h3>

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

        <Footer />
      </div>
    </>
  );
};

export default Home;
