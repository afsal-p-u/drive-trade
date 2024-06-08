import heroImage from "../assets/home/hero-car.png";
import { BrandImage, CustomDropDownHome, DealsCard, Navbar } from "../components";
import { CiSearch } from "react-icons/ci";
import brand0 from "../assets/home/pngwing.com.png";
import brand1 from "../assets/home/pngwing.com (1).png";
import brand2 from "../assets/home/pngwing.com (2).png";
import brand3 from "../assets/home/pngwing.com (3).png";
import brand4 from "../assets/home/pngwing.com (4).png";
import brand5 from "../assets/home/pngwing.com (5).png";
import brand6 from "../assets/home/pngwing.com (6).png";

import topdeal1 from '../assets/home/top-deal/img1.png'
import topdeal2 from '../assets/home/top-deal/img2.png'
import topdeal3 from '../assets/home/top-deal/img3.png'
import topdeal4 from '../assets/home/top-deal/img4.png'

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="bg-light_primary pl-[100px] h-[85vh] w-full flex  items-center gap-5">
        <div className="basis-3/5">
          <p className="text-black font-medium text-sm mb-1">DriveTrade</p>

          <h1 className="text-6xl text-black font-semibold">
            Your Trusted Car <br /> Reselling Partner
          </h1>

          <p className="mt-3 text-light_gray text-sm">
            Step into excellence with our car dealer platform – your gateway to
            the finest cars, exceptional service, and a world-class automotive
            experience
          </p>

          <div className="flex items-center mt-5 gap-5">
            <CustomDropDownHome name="All Models" />
            <CustomDropDownHome name="Year" />
            <CustomDropDownHome name="Max Price" />

            <div className="p-3 rounded-md flex items-center justify-center bg-secondary">
              <CiSearch className="text-primary text-xl cursor-pointer" />
            </div>
          </div>

          <div className="mt-4">
            <p className="text-light_gray font-medium">Popular brnds</p>

            <div className="mt-2">
              <div className="flex gap-4">
                <BrandImage image={brand0} />
                <BrandImage image={brand1} />
                <BrandImage image={brand2} />
                <BrandImage image={brand3} />
                <BrandImage image={brand4} />
                <BrandImage image={brand5} />
                <BrandImage image={brand6} />
              </div>
            </div>
          </div>
        </div>

        <div className="basis-2/5 w-full h-full">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full rounded-bl-[100px]"
          />
        </div>
      </div>

      <div className="w-full h-[85vh] px-[50px] py-[70px] bg-light_primary">
        <h1 className="text-center font-semibold text-3xl">
          Top deals car of the week
        </h1>

        <div className="mt-10 flex gap-5 justify-between w-full">
          <DealsCard image={topdeal1} />
          <DealsCard image={topdeal2} />
          <DealsCard image={topdeal3} />
          <DealsCard image={topdeal4} />
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="w-[18px] h-[5px] bg-light_gray rounded-xl cursor-pointer"></div>
          <div className="w-[18px] h-[5px] bg-light_gray rounded-xl cursor-pointer"></div>
          <div className="w-[18px] h-[5px] bg-light_gray rounded-xl cursor-pointer"></div>
          <div className="w-[18px] h-[5px] bg-light_gray rounded-xl cursor-pointer"></div>
          <div className="w-[25px] h-[5px] bg-black rounded-xl cursor-pointer"></div>
        </div>
      </div>

      
    </>
  );
};

export default Home;
