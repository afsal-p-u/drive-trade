import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { VehicleCard } from "../components";
import { FilterSearch, PaginationButton } from "../components/searching";
import { carCard1, carCard2, carCard3, mainBanner, sideBanner } from "../assets/searching";

const Searching = () => {
  return (
    <>
      <div className="px-[100px] flex gap-5 justify-between items-start bg-light_primary py-[20px]">
        <div className="basis-1/5">
          <div className="bg-primary rounded-md shadow-sm pt-2 pb-5 px-4">
            <FilterSearch
              item="All Models"
              value={[
                "Audi (4)",
                "BMW(3)",
                "Benz (2)",
                "Mazda (7)",
                "Ford (4)",
              ]}
            />
            <FilterSearch
              item="Transmission"
              value={["Automatic", "Manuel", "AMT", "CVT"]}
            />
            <FilterSearch
              item="Fuel"
              value={["Petrol", "Diesal", "Electric", "Hybrid", "Hytrogen"]}
            />
            <FilterSearch item="Filter by price" value={["33,333 - 40,000"]} />
          </div>

          <div className="mt-5 relative">
            <img src={sideBanner} alt="" />

            <div className="absolute left-0 bottom-0 px-5 py-10">
              <p className="text-primary mb-1">Sale 25% Off!</p>

              <h5 className="text-primary text-lg font-medium">Luxury car models</h5>

              <button
                className="px-5 py-2 rounded-3xl text-xs font-medium text-primary border-primary border-[1px] mt-2"
              >
                CONTACT US
              </button>
            </div>
          </div>
        </div>

        <div className="basis-4/5">
          <div className="bg-primary h-[200px] shadow-sm rounded-2xl overflow-hidden relative">
            <img src={mainBanner} alt="" className="w-full h-full object-cover" />

            <div className="absolute right-0 bottom-0 py-4 px-6 flex flex-col justify-center items-center">
              <p className="text-primary font-medium text-xl">Luxury Car</p>

              <h1 className="text-primary text-4xl font-semibold mt-1 mb-1">50% OFF</h1>

              <p className="text-lg text-light_gray">Grab Fast</p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-5">
            <VehicleCard image={carCard1} />
            <VehicleCard image={carCard2} />
            <VehicleCard image={carCard3} />
            <VehicleCard image={carCard1} />
            <VehicleCard image={carCard2} />
            <VehicleCard image={carCard3} />
            <VehicleCard image={carCard1} />
            <VehicleCard image={carCard2} />
            <VehicleCard image={carCard3} />
          </div>

          <div className="py-5 mt-4 flex items-center justify-center">
            <div className="flex gap-2">
             <PaginationButton number={''} icon={IoIosArrowBack} />
             <PaginationButton number={'1'} styles={'bg-medium_secondary text-primary'} />
             <PaginationButton number={'2'} />
             <PaginationButton number={'3'} />
             <PaginationButton number={''} icon={IoIosArrowForward} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searching;
