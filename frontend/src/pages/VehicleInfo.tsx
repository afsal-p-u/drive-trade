import img1 from "../assets/benz/01.jpg";
import { IoChatbubblesOutline } from "react-icons/io5"
import { Link } from "react-router-dom";

const VehicleInfo = () => {
  return (
    <div className="px-[100px] pt-5 min-h-[100vh]">
      <div className="flex gap-10">
        <div className="basis-1/2 h-[310px]">
          <div className="border-[1px] shadow-sm w-full">
            <img src={img1} alt="" className="w-[100%] h-[100%] object-cover" />
          </div>
          <div className="flex gap-2 w-[550px] mt-1 overflow-x-scroll">
            <div className="min-w-[110px] cursor-pointer">
              <img
                src={img1}
                alt=""
                className="w-[100%] h-[70px] object-cover"
              />
            </div>
            <div className="min-w-[110px] cursor-pointer">
              <img
                src={img1}
                alt=""
                className="w-[100%] h-[70px] object-cover"
              />
            </div>
            <div className="min-w-[110px] cursor-pointer">
              <img
                src={img1}
                alt=""
                className="w-[100%] h-[70px] object-cover"
              />
            </div>
            <div className="min-w-[110px] cursor-pointer">
              <img
                src={img1}
                alt=""
                className="w-[100%] h-[70px] object-cover"
              />
            </div>
            <div className="min-w-[110px] cursor-pointer">
              <img
                src={img1}
                alt=""
                className="w-[100%] h-[70px] object-cover"
              />
            </div>
            
          </div>
        </div>
        <div className="basis-1/2 h-[500px]">
          <h3 className="text-2xl mb-1 font-medium text-red-500">
            Mercedez Benz
          </h3>
          <p className="text-gray-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui cum
            assumenda ex quae unde, nemo, deleniti, dolorem eum sit
            necessitatibus temporibus repudiandae itaque non nihil et laudantium
            quos aspernatur? Veniam autem debitis dolore quos distinctio
            architecto, mollitia soluta in asperiores?
          </p>
          <p className="mt-5 text-red-500 underline">Details</p>
          <div className="mt-3 flex gap-x-5">
            <p className="basis-1/3">Model: 2023</p>
            <p>Transmission: Automatic</p>
          </div>
          <div className="mt-1 flex gap-x-5">
            <p className="basis-1/3">Fuel: Hybrid</p>
            <p>Km: 50000</p>
          </div>
          <div className="mt-1 flex gap-x-5">
            <p className="basis-1/3">Varient: Full edition</p>
            <p>Accident history: None</p>
          </div>
          <div className="mt-1 flex gap-x-5">
            <p className="basis-1/3">Owner: 1st</p>
            <p>Type: Hashback</p>
          </div>
          <div className="mt-1 flex gap-x-5">
            <p className="basis-1/3">Seater: 4 seater</p>
            <p className="">EMI: Available</p>
          </div>
          <div className="mt-1 flex gap-x-5">
            <p className="basis-1/3">Insurance: 1st part</p> 
            <p>Color: White</p> 
          </div>

          <p className="mt-5 text-red-500 underline">Seller Information</p>
          <div className="mt-2 flex gap-x-5">
            <p className="basis-1/3">Shop: ADrive</p>
            <p className="">Place: Irutty, Kerala, Kannur</p>
          </div>
          <div className="mt-2 flex gap-x-5">
            <p className="basis-1/3">Seller: Arawind</p>
          </div>

          <div className="flex gap-10 items-start mt-5">
            <div className="py-2 text-2xl font-medium">
              $350
            </div>
            <button className="bg-red-500 text-white py-2 px-6 rounded-md mb-2">
              Add to Wishlist
            </button>
            <Link to="/chat" >
              <div 
                className="flex gap-2 items-center py-2 border-[1px] px-6 rounded-md group hover:bg-red-500
                border-red-500"
              >
                <IoChatbubblesOutline className="text-red-500 group-hover:text-white" />
                <p className="text-red-500 group-hover:text-white">Chat</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;
