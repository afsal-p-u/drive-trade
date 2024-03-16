import React from "react";
import img1 from "../assets/benz/01.jpg";
import { IoMdSpeedometer } from "react-icons/io";
import { RiSteering2Line } from "react-icons/ri";
import { IoCarSportOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";  

const VehicleCard = () => {
  return (
    <div className="min-w-[260px] w-[200px] border-[1px] shadow-md cursor-pointer rounded-md overflow-hidden">
      <div className="">
        <img src={img1} alt="" className="w-[100%]" />
      </div>
      <div className="px-5 py-2">
        <p className="text-lg mb-1 hover:text-red-500">Mercedes Benz Car</p>
        <div className="flex gap-3">
          <p className="flex basis-1/2 items-center gap-1 text-sm">
            <RiSteering2Line className="text-red-500" />
            Automatic
          </p>
          <p className="flex items-center gap-1 text-sm">
            <IoCarSportOutline className="text-red-500" />
            Model 2023
          </p>
        </div>
        <div className="flex gap-3">
          <p className="flex basis-1/2 items-center gap-1 text-sm">
            <LuFuel className="text-red-500" />
            Hybrid
          </p>
          <p className="flex items-center gap-1 text-sm">
            <IoMdSpeedometer className="text-red-500" />
            53000
          </p>
        </div>
        <p className="text-xl font-medium mt-2 text-red-500">$350</p>
      </div>
    </div>
  );
};

export default VehicleCard;
