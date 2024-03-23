import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components";
import { registerAuthItems } from "../utils/auth";
import { ChangeEvent, useState } from "react";
import axios from "axios";

const Register = () => {
  const [values, setValues] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    axios.post('/auth/register', values).then(() => {
        navigate('/login')
    }).catch((err) => {
        console.log("Error occured", err)
    })
  }

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-[#eee]">
      <div className="w-[400px] border-[1px] shadow-md px-8 py-7 border-l-[2px] border-l-red-500">
        <h3 className="text-center text-2xl font-medium text-red-500">
          REGISTER
        </h3>
        <div className="mt-5">
          {registerAuthItems.map((item, i) => (
            <Input {...item} onchange={handleChange} key={i} />
          ))}
        </div>
        <Link to="/login">
          <p className="mt-2 text-end text-xs text-gray-400 cursor-pointer">
            Already have an account?
          </p>
        </Link>
        <div className="mt-7 flex justify-center">
          <button
            className="px-7 py-1 rounded-sm bg-red-500 text-[#eee] hover:text-red-500 hover:bg-transparent
          hover:border-red-500 border-[1px]"
          onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
