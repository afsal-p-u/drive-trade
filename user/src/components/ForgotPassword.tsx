import { IoCloseOutline } from "react-icons/io5";
import CustomInput from "./CustomInput";
import { MdAlternateEmail } from "react-icons/md";
import CustomButton from "./CustomButton";

const ForgotPassword = () => {
  return (
    <div className="w-full h-[100vh] absolute top-0 left-0 flex items-center justify-center z-[85] max-sm:px-5">
      <div className="bg-light_primary shadow-md w-[470px] px-5 pt-4 pb-10 rounded-md flex flex-col">
        <div className="flex justify-end">
          <IoCloseOutline className="text-2xl cursor-pointer" />
        </div>

        <h1 className="text-center font-semibold text-3xl">Forgot Password</h1>
        

        <div className="mt-7 w-full px-10 flex flex-col gap-4">
          <CustomInput icon={MdAlternateEmail} placeholder="Enter email" />

          <CustomButton text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;


