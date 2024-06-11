import { car1, mainHome, type1, type2, type3, type4, type5 } from "../assets/home"
import { CarType } from "../components/home"
import { IoArrowRedoOutline } from "react-icons/io5";
import { VehicleCard } from "../components";

const Home = () => {
  return (
    <div className="">
      <div className="bg-[#e6ebfc] relative px-[100px]">
        <div className="absolute left-0 w-full top-0 pt-[70px] flex items-center justify-center flex-col">
          <p className="text-light_gray text-sm font-medium">Your Destination for Quality Pre-Owned Cars</p>

          <h1 className="mt-4 font-bold text-6xl">Find Your Dream Car</h1>

          <div className="mt-10 w-[60%] h-[60px] rounded-3xl bg-primary"></div>
        </div>

        <img src={mainHome} alt="hero" className="w-full h-full" />
      </div>

      <div className="px-[100px] py-[70px] bg-light_primary">
        <h3 className="text-2xl font-semibold">Browse by Type</h3>

        <div className="mt-5 grid grid-cols-2 gap-4">
            <CarType image={type1} type="SUV" />
            <CarType image={type5} type="Sedan" />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <CarType image={type4} type="Hatchback" />
          <CarType image={type3} type="Hybrid" />
          <CarType image={type2} type="Coupe" />
        </div>
      </div>

      <div className="px-[100px] bg-light_primary py-[70px]">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-2xl">Recently Added</h2>

          <div className="flex gap-2 items-center">
            <p className="text-xs font-medium">View All</p>
            <IoArrowRedoOutline className="cursor-pointer" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-5">
          <VehicleCard image={car1} />
          <VehicleCard image={car1} />
          <VehicleCard image={car1} />
          <VehicleCard image={car1} />
          <VehicleCard image={car1} />
          <VehicleCard image={car1} />
          <VehicleCard image={car1} />
          <VehicleCard image={car1} />
        </div>
      </div>

      <div className="bg-light_primary px-[100px] py-[70px]">
        <h1 className="text-3xl font-semibold">Explore Our Premium Brands</h1>

        <div className="mt-5"></div>
      </div>
    </div>
  )
}

export default Home
