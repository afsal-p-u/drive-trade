import { useState } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { IoMdClose } from "react-icons/io";
import { useAuthControlContext } from "../contexts/AuthControlContext";

const SignUp = () => {
  const [inputs, setInputs] = useState(null);
  const { setAuthControl }: any = useAuthControlContext();

  const handleChangeInputs = (e: any) => {
    setInputs((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  console.log(inputs);

  return (
    <div className="w-full box-border top-0 h-[89vh] flex items-center justify-center absolute">
      <form className="w-[480px] border-[1px] py-5 px-10 rounded-md bg-secondary shadow-lg relative">
        <div className="absolute text-white right-10 top-5">
          <IoMdClose
            className="text-white text-2xl cursor-pointer"
            onClick={() => setAuthControl(null)}
          />
        </div>

        <h1 className="text-center font-semibold text-2xl text-white">
          SignUp
        </h1>

        <div className="mt-5 flex flex-col gap-3">
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Username"
            required={true}
            onchange={handleChangeInputs}
          />
          <CustomInput
            label="Email address"
            name="email"
            type="email"
            placeholder="Email address"
            required={true}
            onchange={handleChangeInputs}
          />
          <CustomInput
            label="Contact number"
            name="number"
            type="number"
            placeholder="Contact number"
            required={true}
            onchange={handleChangeInputs}
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            required={true}
            onchange={handleChangeInputs}
          />
        </div>

        <div className="my-3 flex justify-end">
          <p
            className="text-xs text-gray-400 cursor-pointer"
            onClick={() => setAuthControl("sign-in")}
          >
            Already have an account?
          </p>
        </div>

        <div className="flex justify-center mt-7">
          <CustomButton
            name="SignUp"
            customStyles="px-7 py-2 bg-white rounded-md hover:bg-[#eee]"
            withIcon={false}
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
