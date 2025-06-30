import React , { useState } from "react";
import policies from "../Utils/policy";

const CheckoutSummary = ({ cartItems = [] }) => {
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col gap-4 w-[30%] mx-auto">
      <section className="bg-white">
        <div className="bg-white border border-gray-300 w-full rounded-sm">
          <div className="flex flex-col border-b border-gray-300">
            <div className="flex justify-between pt-4 px-4">
              <p className="font-semibold text-[#444444]">
                {itemCount} item(s)
              </p>
              <span className="font-semibold text-[#146CDA]">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between pb-4 px-4">
              <p className="font-semibold text-[#444444]">Shipping</p>
              <span className="font-semibold text-[#146CDA]">Free</span>
            </div>
          </div>
          <div className="flex justify-between pt-4 px-4">
            <p className="font-semibold text-[#444444]">Total</p>
            <span className="font-semibold text-[#146CDA]">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="px-4 py-2">
            <a href="#" className="text-[#146CDA] font-semibold underline">
              Have a promo code?
            </a>
          </div>
          <div className="px-4 pb-4">
            <input
              type="text"
              placeholder="Promo code"
              className="border border-gray-300 rounded p-2 w-[65%] mr-2"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              ADD
            </button>
          </div>
          <p className="text-[#777777] text-[1rem] px-4">
            Take advantage of our exclusive offers:
          </p>
          <p className=" px-4">
            <span className="text-[#146CDA] text-[0.9rem] font-semibold underline">
              GET25OFF
            </span>
            <span className="text-[#FF9A52] text-[0.9rem] font-semibold">
              - Promo Code
            </span>
          </p>

          <div className="w-fit mx-auto my-5">
            <button className="bg-[#146CDA] text-white font-semibold py-3 px-5 rounded-sm">
              Proceed to checkout
            </button>
          </div>
        </div>
      </section>

      <div className="rounded-sm mx-auto flex flex-col gap-1 mt-5 mb-20 bg-white w-full">
        {policies.map(({ id, title, description, icon }) => (
          <div
            key={id}
            className="flex items-start border-s-4 gap-3 bg-[#f7f7f7] border-s-[#146CDA] px-4 py-3"
          >
            <div className="pt-1">{icon}</div>
            <div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


function GuestPage() {
  return (
    <div className="mx-auto p-6 rounded absolute top-30 left-16">
      <form className="space-y-5 mt-5 w-[100%]">
        <div className="flex gap-20 items-center">
          <label className="block mb-2 font-semibold text-[#444444]">
            Social title
          </label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center font-semibold text-[#444444]">
              <input type="radio" name="socialTitle" className="mr-2" /> Mr.
            </label>
            <label className="flex items-center font-semibold text-[#444444]">
              <input type="radio" name="socialTitle" className="mr-2" /> Mrs.
            </label>
          </div>
        </div>

        <div className="flex gap-20">
          <label className="block mb-1 font-semibold text-[#444444]">
            First name
          </label>
          <div className="">
            <input
              type="text"
              className="w-full border border-gray-200 px-4 py-2 rounded max-w-[375px]"
            />
            <p className="text-[15px] text-gray-500 mt-1">
              Only letters and the dot (.) character, followed by a space, are
              allowed.
            </p>
          </div>
        </div>

        <div className="flex gap-20">
          <label className="block mb-1 font-semibold text-[#444444]">
            Last name
          </label>
          <div className="">
            <input
              type="text"
              className="w-full border border-gray-200 px-4 py-2 rounded max-w-[375px]"
            />
            <p className="text-[15px] text-gray-500 mt-1">
              Only letters and the dot (.) character, followed by a space, are
              allowed.
            </p>
          </div>
        </div>

        <div className="flex gap-29">
          <label className="block mb-1 font-semibold text-[#444444]">
            Email
          </label>
          <div className="">
            <input
              type="email"
              className="border border-gray-200 px-4 py-2 rounded w-[375px]"
            />
          </div>
        </div>

        <div className="flex gap-21">
          <label className="mb-1 flex-col flex font-semibold text-[#444444]">
            Password <span className="text-gray-500">(optional)</span>
          </label>
          <div className="flex items-center w-[375px]">
            <input
              type="password"
              className="w-full border border-gray-200 px-4 py-2 rounded-tl-sm rounded-bl-sm"
            />
            <button type="button" className="text-[1rem] px-4 py-[9px]  bg-[#146cda] font-semibold text-white rounded-tr-sm rounded-br-sm">
              SHOW
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <label className="flex items-start">
            <input type="checkbox" className="mr-2 mt-1" />
            <span>Receive offers from our partners</span>
          </label>

          <label className="flex items-start">
            <input type="checkbox" className="mr-2 mt-1" />
            <span>
              Sign up for our newsletter
              <p className="text-xs text-gray-500">
                You may unsubscribe at any moment. For that purpose, please find
                our contact info in the legal notice.
              </p>
            </span>
          </label>

          <label className="flex items-start">
            <input type="checkbox" className="mr-2 mt-1" />
            <span>
              I agree to the terms and conditions and the privacy policy
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-fit bg-blue-600 text-white py-2 rounded px-4 hover:bg-blue-700 font-medium absolute bottom-5 right-[-200px]"
        >
          CONTINUE
        </button>
      </form>
    </div>
  );
}
const SigninUI = () => {
  return (
    <div className="absolute top-35 left-25 w-full">
      <form action="" className="flex flex-col gap-4 max-w-[800px]">
        <div className="flex gap-25 mt-5 items-center">
          <label
            htmlFor=""
            className="text-[14px] text-[#444444] font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Email Or Mobile Number....."
            className="border-1 border-gray-200 rounded-sm py-2 w-[50%] pl-5 focus:outline-none"
          />
        </div>
        <div className="flex gap-18 mt-2 items-center">
          <label
            htmlFor=""
            className="text-[14px] text-[#444444] font-semibold"
          >
            Password
          </label>
          <div className="w-[50%]">
            <input
              type="password"
              placeholder="Enter Your Password....."
              className="border-1 border-gray-200 rounded-sm py-2 w-[80%]  pl-5 focus:outline-none"
            />
            <input
              type="submit"
              value={"SHOW"}
              className="py-2 px-3 bg-[#146cda] text-white rounded-tr-sm rounded-br-sm border-0"
            />
          </div>
        </div>
        <p className="text-gray-700 px-35 underline">
          <a href="">Forgot your password?</a>
        </p>
        <div className="flex flex-col items-end">
          <button
            type="submit"
            className="bg-[#146cda] text-white py-2 px-4 w-fit font-semibold rounded-sm uppercase tracking-wider"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

const CheckOutPage = () => {
   const [activePage, setActivePage] = useState("guest");
  return (
    <>
      <section>
        <div className="flex justify-between max-w-[1500px] my-12 mx-auto">
          <div className="p-5 border-1 flex flex-col justify-center border-gray-300 w-[68%] rounded-md mx-auto h-auto relative">
            <p className="text-[#444444] text-[18px] font-semibold gap-4 flex absolute top-10 left-10">
              <span> 1</span> <span>Personal Information</span>
            </p>
            <p className="flex gap-3 absolute top-25 left-20">
              <span>
                <a href=""  className={`text-[#444444] font-semibold ${
                    activePage === "guest" ? "active" : ""
                  }`} onClick={(e) => {
                    e.preventDefault();
                    setActivePage("guest");
                  }}>
                  Order as a guest
                </a>
              </span>
              <span className="text-gray-400 font-semibold">|</span>
              <span>
                <a
                  href="#"
                  className={`text-[#444444] font-semibold ${
                    activePage === "signin" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage("signin");
                  }}
                >
                  Sign in
                </a>
              </span>
            </p>
             {activePage === "guest" ? <GuestPage /> : <SigninUI />}
          </div>
          <CheckoutSummary />
        </div>
      </section>
      <style jsx>{`
        .active {
          padding-bottom: 4px;
          display: inline;
          color: #146cda;
        }
      `}</style>
    </>
  );
};

export default CheckOutPage;
