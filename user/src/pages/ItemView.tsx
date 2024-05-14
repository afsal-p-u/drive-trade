import civic from "../assets/civic.jpg";
import { PiEngineBold } from "react-icons/pi";
import { LuFuel } from "react-icons/lu";
import {
  IoChatboxEllipsesOutline,
  IoSpeedometerOutline,
  IoCarSportOutline,
} from "react-icons/io5";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { FaCarSide, FaBookmark, FaRegUser } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import {
  CustomButton,
  ItemViewsmImage,
  SpecificationItem,
} from "../components";

const demmyData = [
  {
    name: "1400 CC Turbo",
    Icon: PiEngineBold,
  },
  {
    name: "Petrol",
    Icon: LuFuel,
  },
  {
    name: "AWD",
    Icon: IoCarSportOutline,
  },
  {
    name: "Manuel",
    Icon: TbManualGearbox,
  },
  {
    name: "50,000 Km",
    Icon: IoSpeedometerOutline,
  },
  {
    name: "5 Seater",
    Icon: MdOutlineAirlineSeatReclineNormal,
  },
  {
    name: "Sedan",
    Icon: FaCarSide,
  },
  {
    name: "Single Owner",
    Icon: FaRegUser,
  },
];

const ItemView = () => {
  return (
    <div className="bg-primary min-h-[89vh]">
      <div className="px-[20px] flex gap-5">
        <div className="basis-3/5 flex gap-5 py-5">
          <div className="h-[400px] rounded-sm shadow-md basis-4/5">
            <img
              src={civic}
              alt=""
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-4 basis-1/5">
            {/* max 5 images */}
            <ItemViewsmImage image={civic} />
            <ItemViewsmImage image={civic} />
            <ItemViewsmImage image={civic} />
            <ItemViewsmImage image={civic} />
            <ItemViewsmImage image={civic} />
          </div>
        </div>

        <div className="basis-2/5 py-5 border-l-[1px] pl-5">
          <h2 className="text-xl font-medium text-gray-900">
            Honda Civic 2018
          </h2>

          <p className="text-sm my-1 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            magni ad provident suscipit atque placeat deserunt.
          </p>

          <h1 className="text-2xl font-bold mt-2">5000</h1>

          <div className="mt-3 flex flex-col gap-2">
            {demmyData.map((item, i) => (
              <SpecificationItem {...item} key={i} />
            ))}
          </div>

          <div className="mt-5 flex gap-5">
            <CustomButton
              name="Chat"
              withIcon={true}
              Icon={IoChatboxEllipsesOutline}
              divStyles="px-7 py-2 bg-blue-700 rounded-md cursor-pointer text-white"
            />

            <CustomButton
              withIcon={true}
              Icon={FaBookmark}
              divStyles="px-2 py-2 border-[1px] border-gray-400 rounded-md cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="px-[20px]">
        <p className="text-lg font-medium">Details</p>
      </div>
    </div>
  );
};

export default ItemView;
