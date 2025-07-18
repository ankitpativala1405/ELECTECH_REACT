import React, { useState } from "react";
import AccordionMenu from "./AccordionMenu";
import DynamicProductIndex from "./DynamicProductIndex";
import UserMethod from "../../Methods/user.method";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await UserMethod.GetAll()
    const usersArray = Array.isArray(user) ? user : user.data;

    const IsUser = usersArray.find((ele) => ele.email.toLowerCase() == formData.email.toLowerCase() || ele.username.toLowerCase() == formData.email.toLowerCase());

    if (IsUser) {
      if (IsUser.password !== formData.password) {
        alert('Please Enter Correct Password')
        return
      }

      document.cookie = `username=${IsUser.username}; path=/;`;
      document.cookie = `email=${IsUser.email}; path=/;`;
      localStorage.setItem("username", IsUser.username);

      navigate('/')
      window.location.reload()
    } else {
      alert("User not Found...");
    }

  };

  return (
    <>
      <section className="bg-[#e6edf5]  mx-auto">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center py-7 px-10">
            <h2 className="text-[1.5rem] text-[#333333]">
              Log in to your account
            </h2>
            <a href="" className="flex text-[#333333] text-[14px]">
              Home
              <p className="ml-4 text-[#777777]">
                | <span className="ml-4">Log in to your account</span>
              </p>
            </a>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center py-10">
        <div className="container mx-auto max-w-[1400px] flex justify-around h-auto">
          <div className="w-[18%]">
            <div>
              <h2 className="">Home</h2>
              <hr className="my-3 text-gray-300" />
            </div>
            <AccordionMenu />
            <div className="mt-10">
              <img
                src="/Images/headphones.jpg"
                alt=""
                className="rounded-md hover-animate"
              />
            </div>
          </div>
          <div className="w-[73%]">
            <div className="flex flex-col items-center justify-center px-6 w-full h-auto">
              <div className="w-full border-1 border-gray-300 rounded p-10 relative">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="flex gap-5 max-w-[50%] mx-auto">
                    <div className="flex items-center gap-8 w-full">
                      <div className="flex justify-end">
                        <label className="block font-medium mb-1 text-[#444444] text-right">
                          Email
                        </label>
                      </div>
                      <div className="w-full">
                        <input
                          type={`'' ? 'email' : 'text'`}
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="w-[95%] border-1 border-gray-300 rounded px-4 py-2 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-5 mt-[-5px] max-w-[55%] mx-auto">
                    <label className="block font-medium mb-1 ml-[-32px] text-[#444444] text-right">
                      Password
                    </label>
                    <div className="flex">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-[280px] border-1 border-gray-300 rounded-tl-sm rounded-bl-sm px-4 py-2 pr-20 focus:outline-none"
                        placeholder="Enter password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="bg-blue-600 text-white px-4 py-1 rounded-tr-sm !w-[78.50px] rounded-br-sm"
                      >
                        {showPassword ? "HIDE" : "SHOW"}
                      </button>
                    </div>
                  </div>
                  <div className="text-center text-sm text-gray-600 justify-center items-center gap-10 flex">
                    <p>Forgot your password?</p>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 rounded font-bold  max-w-[20%]"
                    >
                      SIGN IN
                    </button>
                  </div>
                  <hr className="my-4 text-gray-300" />
                  <div className="text-center text-sm">
                    No account?{" "}
                    <Link to="/signup" className="text-blue-600">
                      Create one here
                    </Link>
                  </div>
                </form>
              </div>

              <div className="flex flex-col items-start w-[117%] py-5">
                <div className="px-20">
                  <h2 className="text-xl">New Products</h2>
                  <hr className="mt-2 border-2 text-[#146cda]" />
                </div>
                <DynamicProductIndex />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
