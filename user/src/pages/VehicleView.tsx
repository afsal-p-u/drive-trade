import { IoCarSportOutline } from "react-icons/io5";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { TbCarSuv } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { PiEngineBold } from "react-icons/pi";
import { BiCylinder } from "react-icons/bi";
import { IoColorFillOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { PiSteeringWheelDuotone } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import {
  carView1,
  carView2,
  carView3,
  carView4,
  carViewImage,
} from "../assets/vehicle-view";
import { ExtraFeaturesItem, FeaturesItem } from "../components/vehicle-view";
import { VehicleCard } from "../components";
import { carCard1, carCard2, carCard3 } from "../assets/searching";

const VehicleView = () => {
  return (
    <div>
      <div className="bg-light_primary px-[100px] flex gap-16 py-[50px]">
        <div className="basis-3/5">
          <div className="">
            <div className="">
              <img src={carViewImage} alt="" />
            </div>

            <div className="mt-4 gap-5 grid grid-cols-4">
              <img src={carView1} alt="" />
              <img src={carView2} alt="" />
              <img src={carView3} alt="" />
              <img src={carView4} alt="" />
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-3xl font-semibold">Car descriptions</h1>

            <p className="mt-4 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500sLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy How the adventure ended will be seen
              anon. Aouda was anxious, though she said nothing. As for
              Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The
              captain had said
            </p>
          </div>

          <div className="mt-10">
            <h1 className="text-3xl font-semibold">Features</h1>

            <div className="mt-4 grid grid-cols-3 gap-7">
              <ExtraFeaturesItem item="Anti-lock Braking" />
              <ExtraFeaturesItem item="Anti-lock Braking" />
              <ExtraFeaturesItem item="Anti-lock Braking" />
              <ExtraFeaturesItem item="Brake Assist" />
              <ExtraFeaturesItem item="Brake Assist" />
              <ExtraFeaturesItem item="Brake Assist" />
              <ExtraFeaturesItem item="Child Safety Locks" />
              <ExtraFeaturesItem item="Child Safety Locks" />
              <ExtraFeaturesItem item="Child Safety Locks" />
              <ExtraFeaturesItem item="Driver Air Bag" />
              <ExtraFeaturesItem item="Driver Air Bag" />
              <ExtraFeaturesItem item="Driver Air Bag" />
              <ExtraFeaturesItem item="Power Door Locks" />
              <ExtraFeaturesItem item="Power Door Locks" />
              <ExtraFeaturesItem item="Power Door Locks" />
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-3xl font-semibold">Location</h1>
          </div>
        </div>

        <div className="basis-2/5">
          <div className="border-b-[1px] pb-2">
            <h1 className="text-2xl font-semibold">
              Chevrolet nexa camaro 2-door convertible dark metblack
            </h1>

            <ul className="list-disc flex gap-10 mt-2 pl-[20px]">
              <li className="text-sm">2021</li>
              <li className="text-sm">Convertible</li>
              <li className="text-sm">Diesel</li>
            </ul>
          </div>

          <div className="mt-3">
            <div className="flex items-baseline gap-3">
              <h1 className="text-2xl font-semibold">$165,000</h1>

              <p className="line-through font-medium">$100,0000</p>
            </div>

            <p className="text-sm font-medium mt-1 text-light_gray">
              Instant Saving: $15,000
            </p>
          </div>

          <div className="border-[1px] rounded-xl py-7 px-10 mt-5 flex flex-col gap-5">
            <FeaturesItem item="Body" value="Sedan" icon={IoCarSportOutline} />
            <FeaturesItem
              item="Mileage"
              value="250"
              icon={IoSpeedometerOutline}
            />
            <FeaturesItem item="Fuel Type" value="Petrol" icon={LuFuel} />
            <FeaturesItem item="Year" value="2021" icon={SlCalender} />
            <FeaturesItem
              item="Transmission"
              value="Manuel"
              icon={GiGearStickPattern}
            />
            <FeaturesItem
              item="Drive Type"
              value="Rear-Wheel Drive"
              icon={PiSteeringWheelDuotone}
            />
            <FeaturesItem item="Condition" value="Used" icon={CiUser} />
            <FeaturesItem item="Engine" value="4.0" icon={PiEngineBold} />
            <FeaturesItem item="Door" value="4 Doors" icon={TbCarSuv} />
            <FeaturesItem item="Cylinder" value="12" icon={BiCylinder} />
            <FeaturesItem
              item="Color"
              value="Black"
              icon={IoColorFillOutline}
            />
            <FeaturesItem item="VIN" value="FB412DFA" icon={FaRegAddressCard} />
          </div>

          <div className="mt-10 rounded-xl px-7 py-10 border-[1px]">
            <div className="w-[50px] h-[50px] bg-gray-500 rounded-full"></div>

            <h1 className="font-medium text-lg mt-2">Jacob</h1>

            <p className="text-sm">943 Broadway, Brooklyn</p>

            <div className="mt-5 flex gap-10">
              <div className="flex gap-3 items-center">
                <div className="rounded-full p-1 bg-light_secondary">
                  <CiLocationOn className="text-secondary text-xl" />
                </div>

                <p className="text-sm font-medium">Get Direction</p>
              </div>

              <div className="flex gap-3 items-center">
                <div className="rounded-full p-1 bg-light_secondary">
                  <FiPhoneCall className="text-secondary text-xl" />
                </div>

                <p className="text-sm font-medium">Show Number</p>
              </div>
            </div>

            <button className="mt-5 bg-secondary rounded-xl text-primary w-full py-4 text-sm font-medium">
              Chat With Dealer
            </button>

            <button
              className="mt-2 border-[1px] border-green-500 text-green-500 
              rounded-xl w-full py-4 text-sm font-medium"
            >
              Chat Via Whatsapp
            </button>
          </div>
        </div>
      </div>

      <div className="py-[50px] px-[100px] bg-light_primary">
        <h3 className="text-xl font-semibold">Related Cars</h3>

        <div className="grid grid-cols-4 gap-5 mt-5">
          <VehicleCard image={carCard1} />
          <VehicleCard image={carCard2} />
          <VehicleCard image={carCard3} />
          <VehicleCard image={carCard1} />
        </div>
      </div>
    </div>
  );
};

export default VehicleView;
