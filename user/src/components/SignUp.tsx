import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

const SignUp = () => {
  return (
    <div className="w-full h-[89vh] flex items-center justify-center">
      <form className="w-[480px] border-[1px] py-5 px-10 rounded-md bg-secondary shadow-lg">
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
          />
          <CustomInput
            label="Email address"
            name="email"
            type="email"
            placeholder="Email address"
            required={true}
          />
          <CustomInput
            label="Contact number"
            name="number"
            type="number"
            placeholder="Contact number"
            required={true}
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            required={true}
          />
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
