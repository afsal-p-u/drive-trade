import { IoCloseOutline } from "react-icons/io5";
import CustomButton from "./CustomButton";

const OTPVerification = () => {
  return (
    <div className="w-full h-[100vh] absolute top-0 left-0 flex items-center justify-center z-[85]">
      <div className="bg-light_primary shadow-md w-[470px] px-5 pt-4 pb-10 rounded-md flex flex-col">
        <div className="flex justify-end">
          <IoCloseOutline className="text-2xl cursor-pointer" />
        </div>

        <h1 className="text-center font-semibold text-3xl">Verify</h1>

        <p className="text-xs text-light_gray text-center mt-2">
          Please enter the 4-digit OTP sent to your number
        </p>

        <div className="mt-7 w-full px-10 flex flex-col gap-4">
          <div className="flex px-10 justify-between">
            <OTPColumnItem />
            <OTPColumnItem />
            <OTPColumnItem />
            <OTPColumnItem />
          </div>

          <p className="text-center text-sm font-medium text-light_gray">
            1:59
          </p>

          <CustomButton text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;

const OTPColumnItem = () => {
  return (
    <div className="w-[45px] h-[45px] border-[1px] flex items-center justify-center">
      <input
        type="number"
        className="r-number w-full h-full outline-none text-center"
        min={0}
        max={9}
      />
    </div>
  );
};
