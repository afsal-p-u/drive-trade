import { useState } from "react";
import { useAuthControlContext } from "../contexts/AuthControlContext";
import apiRequest from "../utils/apiRequest";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import { IoMdClose } from "react-icons/io";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [inputs, setInputs] = useState(null);
  const { setAuthControl }: any = useAuthControlContext();
  const { setAuth }: any = useAuthContext();
  const navigate = useNavigate()

  const handleChangeInputs = (e: any) => {
    setInputs((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    apiRequest
      .post("/v1/auth/sign-in", inputs)
      .then((res) => {
        setAuthControl(null);
        setAuth(res.data.info);
        navigate('/home')
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <div className="w-full h-[89vh] flex items-center justify-center absolute top-0">
      <form
        className="w-[480px] border-[1px] py-5 px-10 rounded-md bg-secondary shadow-lg relative"
        onSubmit={handleSubmit}
      >
        <div className="absolute text-white right-10 top-5">
          <IoMdClose
            className="text-white text-2xl cursor-pointer"
            onClick={() => setAuthControl(null)}
          />
        </div>

        <h1 className="text-center font-semibold text-2xl text-white">
          SignIn
        </h1>

        <div className="mt-5 flex flex-col gap-3">
          <CustomInput
            label="Email address"
            name="email"
            type="email"
            placeholder="Email address"
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

        <div className="my-3 flex-col flex items-end">
          <p
            className="text-xs text-gray-400 cursor-pointer"
            onClick={() => setAuthControl("sign-up")}
          >
            Don't have an account?
          </p>

          <p
            className="text-xs text-gray-400 cursor-pointer mt-1"
            onClick={() => setAuthControl("sign-up")}
          >
            Forgot password?
          </p>
        </div>

        <div className="flex justify-center mt-7">
          <CustomButton
            name="SignIn"
            customStyles="px-7 py-2 bg-white rounded-md hover:bg-[#eee]"
            withIcon={false}
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
