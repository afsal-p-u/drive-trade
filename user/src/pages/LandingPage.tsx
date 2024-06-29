import { CiSearch } from "react-icons/ci";
import { FaRegHandshake } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdPhoneMissed } from "react-icons/md";
import {
  BenefitCardLanding,
  BrandImage,
  CustomDropDownLanding,
  Faq,
} from "../components/landing-page";
import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
} from "../assets/landing-page";
import { deal1, deal2, deal3, deal4 } from "../assets/landing-page";
import { usedCar1, usedCar2, usedCar3 } from "../assets/landing-page";
import { benefits, contact, feature, hero, used } from "../assets/landing-page";
import { DealsCard, SmallTouchBar, VehicleCard } from "../components";

const Home = () => {
  return (
    <>
      <div className="bg-light_primary pl-[100px] max-lg:pl-0 w-full flex  items-center gap-5 max-lg:flex-col-reverse">
        <div className="basis-3/5 max-xl:w-[50%] max-lg:w-[100%] max-lg:py-5 max-lg:px-[30px]">
          <p className="text-black font-medium text-sm mb-1 max-lg:text-xs max-lg:text-center">
            DriveTrade
          </p>

          <h1 className="text-6xl text-black font-semibold max-xl:text-5xl max-lg:text-center max-lg:text-4xl">
            Your Trusted Car <br /> Reselling Partner
          </h1>

          <p className="mt-3 text-light_gray text-sm max-xl:text-xs max-lg:text-center">
            Step into excellence with our car dealer platform – your gateway to
            the finest cars, exceptional service, and a world-class automotive
            experience
          </p>

          <div className="flex items-center mt-5 gap-5 flex-wrap max-lg:justify-center">
            <CustomDropDownLanding name="All Models" />
            <CustomDropDownLanding name="Year" />
            <CustomDropDownLanding name="Max Price" />

            <div className="p-3 rounded-md flex items-center justify-center bg-secondary">
              <CiSearch className="text-primary text-xl cursor-pointer max-xl:text-lg" />
            </div>
          </div>

          <div className="mt-4">
            <p className="text-light_gray font-medium max-lg:text-center max-lg:mt-7 max-lg:text-sm">
              Popular brands
            </p>

            <div className="mt-2">
              <div className="flex gap-4 max-lg:justify-center">
                <BrandImage image={brand1} />
                <BrandImage image={brand2} />
                <BrandImage image={brand3} />
                <BrandImage image={brand4} />
                <BrandImage image={brand5} />
                <BrandImage image={brand6} />
                <BrandImage image={brand7} />
              </div>
            </div>
          </div>
        </div>

        <div className="basis-2/5 w-full h-[85vh] max-xl:w-[50%] max-lg:w-[100%]">
          <img
            src={hero}
            alt=""
            className="w-full h-full max-xl:h-[70vh] max-lg:h-[50vh] rounded-bl-[100px] object-cover"
          />
        </div>
      </div>

      <div className="w-full px-[50px] max-lg:px-[30px] py-[70px] bg-light_primary">
        <h1 className="text-center font-semibold text-5xl max-xl:text-4xl max-lg:text-3xl max-sm:text-2xl">
          Top deals car of the week
        </h1>

        <div className="mt-10 grid grid-cols-4 gap-5 w-full max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 ">
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

      <div className="bg-light_primary px-[100px] py-[70px] flex gap-10 max-md:flex-col max-xl:px-[30px]">
        <div className="flex-1 max-md:h-[35vh] overflow-hidden rounded-xl">
          <img
            src={feature}
            alt=""
            className="w-full h-full max-md:h-[45vh] object-cover"
          />
        </div>

        <div className="flex-1 flex justify-center flex-col">
          <h1 className="font-semibold text-5xl max-xl:text-4xl max-lg:2xl max-sm:xl">
            Experience the world's <br />
            top cars with us.
          </h1>

          <p className="mt-3 text-sm text-light_gray max-lg:text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>

      <div className="bg-light_primary pr-[50px] py-[70px] flex gap-7 max-xl:pr-[30px] max-md:flex-col">
        <div className="basis-1/3 max-md:w-[100%]">
          <div className="pl-[50px] max-xl:pl-[30px]">
            <h1 className="font-bold text-5xl max-xl:text-4xl max-lg:text-3xl">
              MOST <br className="max-sm:hidden" /> SEARCHED <br /> USED CAR
            </h1>

            <div className="w-[100px] border-t-[2px] border-secondary mt-3"></div>

            <p className="mt-3 text-light_gray text-sm max-lg:text-xs">
              Discover a wide selection of the most sought-after used cars on
              our platform.
            </p>

            <button className="px-5 py-2 text-xs mt-4 font-medium bg-secondary text-primary rounded-2xl">
              VIEW MORE
            </button>
          </div>

          <img src={used} alt="" className="mt-16" />
        </div>

        <div 
          className="basis-2/3 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1 m-auto max-md:pl-[30px]"
        >
          <VehicleCard image={usedCar1} styles="pb-7" />
          <VehicleCard image={usedCar2} styles="pb-7" />
          <VehicleCard image={usedCar3} styles="pb-7" />
          <VehicleCard image={usedCar1} styles="pb-7" />
          <VehicleCard image={usedCar2} styles="pb-7" />
          <VehicleCard image={usedCar3} styles="pb-7" />
        </div>
      </div>

      <div className="bg-light_primary px-[100px] py-[70px] flex gap-16 max-xl:px-[30px] max-md:flex-col">
        <div className="flex-1 flex justify-center flex-col max-xl:w-[50%] max-md:w-[100%]">
          <h1 className="text-5xl font-bold mb-4 max-xl:text-4xl max-lg:text-3xl">
            Top-Tier Excellence in <br />
            Car Dealerships
          </h1>

          <p className="text-sm text-light_gray max-lg:text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className="grid grid-cols-2 gap-5 max-md:mt-5 max-sm:grid-cols-1">
            <BenefitCardLanding
              text="Trusted by our clients"
              icon={FaRegHandshake}
            />
            <BenefitCardLanding
              text={`Fast & easy financing`}
              icon={GiReceiveMoney}
            />
          </div>
        </div>

        <div className="flex-1 max-xl:w-[50%] max-md:w-[100%]">
          <img src={benefits} alt="" className="w-full" />
        </div>
      </div>

      <div className="px-[100px] bg-light_primary py-[70px] max-xl:px-[30px]">
        <h1 className="text-center text-5xl font-semibold max-xl:text-4xl max-lg:text-3xl max-md:text-2xl">FAQ</h1>

        <div className="mt-10 flex flex-col gap-5">
          <Faq text="What should I do if I encounter a problem with a transaction?" />
          <Faq text="Are there any fees for buying or selling a car on your website?" />
          <Faq text="How do I know if a car listed on the site is reliable?" />
        </div>
      </div>

      <div className="px-[100px] bg-light_primary py-[70px] max-xl:px-[30px]">
        <div className="px-10 py-10 flex gap-10 bg-primary rounded-md shadow-sm max-md:flex-col-reverse">
          <div className="basis-3/5 flex flex-col justify-center">
            <h3 className="text-4xl font-semibold max-lg:text-3xl max-md:text-2xl">
              Get hassel free response on your any queries? Contact us
            </h3>

            <p className="mt-3 text-light_gray text-sm max-md:text-xs">
              Feel free to call our dealership for personalized assistance,
              detailed information, and exceptional service regarding our
              vehicles.
            </p>

            <div className="flex gap-5 mt-5 flex-wrap">
              <button className="flex items-center justify-center gap-2 bg-secondary px-7 py-3 rounded-sm">
                <MdPhoneMissed className="text-white" />
                <p className="text-xs text-white">+91 8038382010</p>
              </button>

              <button className="flex items-center justify-center gap-2 px-7 py-3 text-xs rounded-sm border-[1px]">
                Contact us
              </button>
            </div>
          </div>

          <div className="basis-2/5 max-md:w-[100%]">
            <img src={contact} alt="" className="max-md:w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
