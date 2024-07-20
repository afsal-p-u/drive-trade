import { IoCloseOutline } from "react-icons/io5";
import CustomInput from "./CustomInput";
import { MdAlternateEmail } from "react-icons/md";
import CustomButton from "./CustomButton";
import { TiSocialFacebook } from "react-icons/ti";
import { CiInstagram, CiLock } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import { usePopupContext } from "../contexts/PopupContext";
import { useState } from "react";
import apiRequest from "../utils/apiRequest";

const SignIn = () => {
  const [inputs, setInputs] = useState(null);
  const { setComponent }: any = usePopupContext();

  const changeInputs = (e: any) => {
    setInputs((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    apiRequest
      .post("/auth/sign-in", inputs)
      .then(() => {
        setComponent("otp");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-[100vh] absolute top-0 left-0 flex items-center justify-center z-[85] max-sm:px-5">
      <form
        className="bg-light_primary shadow-md w-[470px] px-5 pt-4 pb-10 rounded-md flex flex-col"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-end">
          <IoCloseOutline
            className="text-2xl cursor-pointer"
            onClick={() => setComponent(null)}
          />
        </div>

        <h1 className="text-center font-semibold text-3xl">Sign In</h1>

        <p className="text-sm text-center mt-1 text-light_gray">
          Don't have an account?{" "}
          <span
            className="text-secondary cursor-pointer"
            onClick={() => setComponent("sign-up")}
          >
            SignUp
          </span>
        </p>

        <div className="mt-7 w-full px-10 flex flex-col gap-4">
          <CustomInput
            icon={MdAlternateEmail}
            placeholder="Enter email"
            required={true}
            onchange={changeInputs}
            name="email"
            type="text"
          />
          <CustomInput
            icon={CiLock}
            placeholder="Enter password"
            required={true}
            onchange={changeInputs}
            name="password"
            type="password"
          />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="" />

              <p className="text-xs text-light_gray">Keep me signed in</p>
            </div>

            <p className="text-xs cursor-pointer">Forgot Password?</p>
          </div>

          <CustomButton text="SignIn" />
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
      </form>
    </div>
  );
};

export default SignIn;
