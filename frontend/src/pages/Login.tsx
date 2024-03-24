import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components";
import { loginAuthItems } from "../utils/auth";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [values, setValues] = useState(null);
  const navigate = useNavigate()
  const { setToken } = useAuthContext()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }; 

  const handleSubmit = () => {
    axios.post('/auth/login', values).then((res) => {
        setToken(res.data)
        navigate('/')
    }).catch((err) => {
        console.log("Error occured", err)
    })
  }

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-[#eee]">
      <div className="w-[400px] border-[1px] shadow-md px-8 py-7 border-l-[2px] border-l-red-500">
        <h3 className="text-center text-2xl font-medium text-red-500">LOGIN</h3>
        <div className="mt-5">
          {loginAuthItems.map((item, i) => (
            <Input {...item} onchange={handleChange} key={i} />
          ))}
        </div>
        <Link to={"/register"}>
          <p className="mt-2 text-end text-xs text-gray-400 cursor-pointer">
            Don't have an account?
          </p>
        </Link>
        <Link to={'/forgot-password'}>
          <p className="mt-2 text-end text-xs text-gray-400 cursor-pointer">
            Forgot password?
          </p>
        </Link>
        <div className="mt-7 flex justify-center">
          <button
            className="px-7 py-1 rounded-sm bg-red-500 text-[#eee] hover:text-red-500 hover:bg-transparent
          hover:border-red-500 border-[1px]"
          onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
