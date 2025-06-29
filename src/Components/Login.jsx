import React from "react";
import AccordionMenu from "./AccordionMenu";
import DynamicProductIndex from "./DynamicProductIndex";

const LoginPage = () => {
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
                <form className="space-y-6">
                  <div className="flex justify-center items-center gap-5 max-w-[50%] mx-auto">
                    <label className="block font-medium mb-1 text-[#444444] text-right">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full border-1 border-gray-300 rounded px-4 py-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-5 mt-[-5px] max-w-[55%] mx-auto">
                    <label className="block font-medium mb-1 ml-[-32px] text-[#444444] text-right">
                      Password
                    </label>
                    <div className="flex">
                      <input
                        type="password"
                        className="w-full border-1 border-gray-300 rounded-tl-sm rounded-bl-sm px-4 py-2 pr-20 focus:outline-none"
                        placeholder="Enter password"
                      />
                      <button
                        type="button"
                        className="bg-blue-600 text-white px-4 py-1 rounded-tr-sm rounded-br-sm"
                      >
                        SHOW
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
                    <a href="#" className="text-blue-600">
                      Create one here
                    </a>
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
