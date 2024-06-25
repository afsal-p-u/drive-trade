import { IoCloseOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import CustomInput from "./CustomInput";
import { MdAlternateEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import CustomButton from "./CustomButton";
import { TiSocialFacebook } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import SocialIcon from "./SocialIcon";

const SignUp = () => {
  return (
    <div className="w-full h-[100vh] absolute top-0 left-0 flex items-center justify-center z-[85]">
      <div className="bg-light_primary shadow-md w-[470px] px-5 pt-4 pb-10 rounded-md flex flex-col">
        <div className="flex justify-end">
          <IoCloseOutline className="text-2xl cursor-pointer" />
        </div>

        <h1 className="text-center font-semibold text-3xl">Sign Up</h1>

        <p className="text-sm text-center mt-1 text-light_gray">
          Already have an account? <span className="text-secondary">Login</span>
        </p>

        <div className="mt-7 w-full px-10 flex flex-col gap-4">
          <CustomInput icon={CiUser} placeholder="Enter name" />
          <CustomInput icon={MdAlternateEmail} placeholder="Enter email" />
          <CustomInput icon={CiPhone} placeholder="Enter phone number" />
          <CustomInput icon={CiLock} placeholder="Enter password" />

          <CustomButton text="Register" />
        </div>

        <div className="mt-4 px-10 flex justify-center flex-col gap-3 items-center">
          <p className="text-xs text-light_gray">
            By sign up you agree to the{" "}
            <span className="font-medium text-black">terms & conditions</span>
          </p>

          <div className="flex gap-4">
            <SocialIcon icon={TiSocialFacebook} />
            <SocialIcon icon={CiInstagram} />
            <SocialIcon icon={FaTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
