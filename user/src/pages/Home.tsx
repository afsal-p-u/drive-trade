import heroImage from "../assets/home/hero-car.png";
import {
  BrandImage,
  CustomDropDownHome,
  DealsCard,
  Footer,
  Navbar,
  UsedCarCardHome,
} from "../components";
import { CiSearch } from "react-icons/ci";
import brand0 from "../assets/home/pngwing.com.png";
import brand1 from "../assets/home/pngwing.com (1).png";
import brand2 from "../assets/home/pngwing.com (2).png";
import brand3 from "../assets/home/pngwing.com (3).png";
import brand4 from "../assets/home/pngwing.com (4).png";
import brand5 from "../assets/home/pngwing.com (5).png";
import brand6 from "../assets/home/pngwing.com (6).png";

import topdeal1 from "../assets/home/top-deal/img1.png";
import topdeal2 from "../assets/home/top-deal/img2.png";
import topdeal3 from "../assets/home/top-deal/img3.png";
import topdeal4 from "../assets/home/top-deal/img4.png";

import img5 from "../assets/home/img5.png";

import usedcar from "../assets/home/top-search/used-car.png";
import c1 from "../assets/home/top-search/c1.png";
import c2 from "../assets/home/top-search/c2.png";
import c3 from "../assets/home/top-search/c3.png";

import abot from "../assets/home/abt-c.png";
import contact from "../assets/home/contact.png";

import { FaRegHandshake } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { MdPhoneMissed } from "react-icons/md";

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
        <h1 className="text-center font-semibold text-5xl">
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

      <div className="bg-light_primary px-[100px] py-[70px] flex gap-10">
        <div className="flex-1">
          <img src={img5} alt="" />
        </div>

        <div className="flex-1 flex justify-center flex-col">
          <h1 className="font-semibold text-5xl">
            Experience the world's <br />
            top cars with us.
          </h1>

          <p className="mt-3 text-sm text-light_gray">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>

      <div className="bg-light_primary pr-[50px] py-[70px] flex gap-7">
        <div className="basis-1/3">
          <div className="pl-[50px]">
            <h1 className="font-bold text-5xl">
              MOST <br /> SEARCHED <br /> USED CAR
            </h1>

            <div className="w-[100px] border-t-[2px] border-secondary mt-3"></div>

            <p className="mt-3 text-light_gray text-sm">
              Discover a wide selection of the most sought-after used cars on
              our platform.
            </p>

            <button className="px-5 py-2 text-xs mt-4 font-medium bg-secondary text-primary rounded-2xl">
              VIEW MORE
            </button>
          </div>

          <img src={usedcar} alt="" className="mt-16" />
        </div>

        <div className="basis-2/3 flex flex-wrap gap-3 justify-between">
          <UsedCarCardHome image={c1} />
          <UsedCarCardHome image={c2} />
          <UsedCarCardHome image={c3} />
          <UsedCarCardHome image={c1} />
          <UsedCarCardHome image={c2} />
          <UsedCarCardHome image={c3} />
        </div>
      </div>

      <div className="bg-light_primary px-[100px] py-[70px] flex gap-16">
        <div className="flex-1 flex justify-center flex-col">
          <h1 className="text-5xl font-bold mb-4">
            Top-Tier Excellence in <br />
            Car Dealerships
          </h1>

          <p className="text-sm text-light_gray">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className="flex mt-5 gap-5">
            <div className="p-5 px-10 bg-primary rounded-xl shadow-sm flex items-center justify-center flex-col">
              <FaRegHandshake className="text-5xl mb-3" />

              <p className="text-md font-medium text-center">
                Trusted by <br /> our clients
              </p>

              <p className="mt-2 text-sm text-light_gray text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className="py-10 px-10 bg-primary rounded-xl shadow-sm flex items-center justify-center flex-col">
              <GiReceiveMoney className="text-5xl mb-3" />

              <p className="text-md font-medium text-center">
                Fast & easy <br /> financing
              </p>

              <p className="mt-2 text-sm text-light_gray text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <img src={abot} alt="" />
        </div>
      </div>

      <div className="px-[100px] bg-light_primary py-[70px]">
        <h1 className="text-center text-5xl font-semibold">FAQ</h1>

        <div className="mt-10 flex flex-col gap-5">
          <div className="px-7 py-4 bg-white rounded-md flex items-center justify-between cursor-pointer">
            <p className="font-medium text-sm">
              How do I know if a car listed on the site is reliable?
            </p>

            <IoIosArrowForward className="text-2xl cursor-pointer" />
          </div>

          <div className="px-7 py-4 bg-white rounded-md flex items-center justify-between cursor-pointer">
            <p className="font-medium text-sm">
              Are there any fees for buying or selling a car on your website?
            </p>

            <IoIosArrowForward className="text-2xl cursor-pointer" />
          </div>

          <div className="px-7 py-4 bg-white rounded-md flex items-center justify-between cursor-pointer">
            <p className="font-medium text-sm">
              What should I do if I encounter a problem with a transaction?
            </p>

            <IoIosArrowForward className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="px-[100px] bg-light_primary py-[70px]">
        <div className="px-10 py-10 flex gap-10 bg-primary rounded-md shadow-sm">
          <div className="basis-3/5 flex flex-col justify-center">
            <h3 className="text-4xl font-semibold">Get hassel free response on your any queries? Contact us</h3>

            <p className="mt-3 text-light_gray text-sm">
              Feel free to call our dealership for personalized assistance,
              detailed information, and exceptional service regarding our
              vehicles.
            </p>

            <div className="flex gap-5 mt-5">
              <button className="flex items-center justify-center gap-2 bg-secondary px-7 py-3 rounded-sm">
                <MdPhoneMissed className="text-white" />
                <p className="text-xs text-white">+91 8038382010</p>
              </button>

              <button className="flex items-center justify-center gap-2 px-7 py-3 text-xs rounded-sm border-[1px]">
                Contact us
              </button>
            </div>
          </div>

          <div className="basis-2/5">
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
