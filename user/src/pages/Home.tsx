import {
  ads1,
  car1,
  endBanner,
  mainHome,
  type1,
  type2,
  type3,
  type4,
  type5,
} from "../assets/home";
import { CarType, FeatureItem } from "../components/home";
import { IoArrowRedoOutline } from "react-icons/io5";
import { VehicleCard } from "../components";
import { LuFuel } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";
import { TbManualGearbox } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { DealsCard, SmallTouchBar } from "../components";
import { deal1, deal2, deal3, deal4 } from "../assets/landing-page";

const Home = () => {
  return (
    <div className="">
      <div className="bg-[#e6ebfc] relative px-[100px]">
        <div className="absolute left-0 w-full top-0 pt-[70px] flex items-center justify-center flex-col">
          <p className="text-light_gray text-sm font-medium">
            Your Destination for Quality Pre-Owned Cars
          </p>

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

      <div className="py-[70px] relative bg-light_primary">
        <div className="w-full relative">
          <img src={ads1} alt="" />

          <div className="px-[50px] w-full absolute top-[50%] translate-y-[-50%] flex justify-between items-center">
            <div className="">
              <p className="text-lg font-semibold text-primary">$165,000</p>

              <h1 className="font-medium text-4xl mt-1 text-primary">
                Ranger Black -
              </h1>

              <h1 className="font-medium text-4xl mt-1 text-primary">2021</h1>
            </div>

            <div className="py-5 ps-5 pe-14 bg-primary/10 rounded-md ">
              <div className="flex flex-col gap-2">
                <FeatureItem icon={LuFuel} label1="Petrol" label2="Fuel Type" />
                <FeatureItem
                  icon={IoSpeedometerOutline}
                  label1="250 Miles"
                  label2="Mileage"
                />
                <FeatureItem
                  icon={TbManualGearbox}
                  label1="Manuel"
                  label2="Transmission"
                />
                <FeatureItem icon={SlCalender} label1="Year" label2="2023" />
              </div>

              <button className="px-7 py-2 text-xs font-medium bg-primary rounded-md mt-5">
                View
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-[50px] py-[70px] bg-light_primary">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-2xl">Top Recommends</h2>

          <div className="flex gap-2 items-center">
            <p className="text-xs font-medium">View All</p>
            <IoArrowRedoOutline className="cursor-pointer" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-5 w-full">
          <DealsCard image={deal1} />
          <DealsCard image={deal2} />
          <DealsCard image={deal3} />
          <DealsCard image={deal4} />
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <SmallTouchBar active={false} />
          <SmallTouchBar active={false} />
          <SmallTouchBar active={false} />
          <SmallTouchBar active={false} />
          <SmallTouchBar active={true} />
        </div>
      </div>

      <div className="b-light_primary py-[50px] w-full grid grid-cols-2">
        <div className="">
          <img src={endBanner} alt="" />
        </div>

        <div className="bg-dark_blue pl-[100px] pr-[50px] flex flex-col justify-center items-center">
          <div className="flex flex-col gap-5 items-start">
            <h1 className="text-4xl font-semibold text-primary">
              Drive Your Dream <br /> Car Home
            </h1>

            <p className="text-sm text-light_gray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>

            <button className="px-7 py-2 text-xs font-medium bg-primary rounded-lg mt-3">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
