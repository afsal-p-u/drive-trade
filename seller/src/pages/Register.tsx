import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components";
import { registerAuthData } from "../utils/AuthData";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const number = formData.get("number");
    const username = formData.get("username");

    axios
      .post("/auth/register", { username, email, password, number, isUser: "seller" })
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] rounded-md px-7 py-5 border-[1px] shadow-sm border-t-[3px] border-t-red-500"
      >
        <h3 className="text-2xl text-center font-bold">REGISTER</h3>

        <div className="mt-5">
          {registerAuthData.map((item, i) => (
            <Input {...item} key={i} />
          ))}
        </div>
        <div className="mt-2">
          <Link to="/login">
            <p className="text-xs text-right text-gray-500">
              Already have an account?
            </p>
          </Link>

          {error && (
            <p className="text-xs mt-3 text-red-500 font-medium">{error}</p>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            className="font-medium px-5 py-1 rounded-sm text-white bg-red-500 border-[1px] text-sm 
          hover:border-red-500 hover:bg-transparent hover:text-red-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
