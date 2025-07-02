import React, { useState } from "react";
import policies from "../Utils/policy";
// import { TbTriangleInvertedFilled } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { RiEdit2Fill } from "react-icons/ri";

const PersonalDetail = ({ onComplete }) => {
  const [activePage, setActivePage] = useState("signin");
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = () => {
    setIsComplete(true);
    onComplete();
  };

  return (
    <div
      className={`border-1 flex flex-col justify-center border-gray-300 rounded-md mx-auto relative`}
      style={{ height: isComplete ? "80px" : activePage === "signin" ? "400px" : "700px" }}
    >
      <p className="text-[#444444] text-[18px] font-semibold flex justify-between w-[95%] absolute top-7 left-5">
        <div className="gap-4 flex">
          <span>1</span> <span>Personal Information</span>
        </div>
        {isComplete && (
          <button
            type="button"
            onClick={() => setIsComplete(false)}
            className="ml-4 text-blue-600 flex items-center"
          >
            <RiEdit2Fill className="mr-1 text-gray-600" />
            <p className="text-gray-600">Edit</p>
          </button>
        )}
      </p>

      {!isComplete && (
        <>
          <p className="flex gap-3 absolute top-25 left-20">
            <span>
              <a
                href=""
                className={`text-[#444444] font-semibold ${activePage === "guest" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage("guest");
                }}
              >
                Order as a guest
              </a>
            </span>
            <span className="text-gray-400 font-semibold">|</span>
            <span>
              <a
                href="#"
                className={`text-[#444444] font-semibold ${activePage === "signin" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage("signin");
                }}
              >
                Sign in
              </a>
            </span>
          </p>

          <div className="mt-16">
            {activePage === "guest" ? (
              <GuestPage onComplete={handleComplete} />
            ) : (
              <SigninUI onComplete={handleComplete} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

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

function GuestPage({ onComplete }) {
  return (
    <div className="mx-auto p-6 rounded absolute top-30 left-16">
      <form className="space-y-5 mt-5 w-[100%]" onSubmit={(e) => {
        e.preventDefault();
        onComplete();
      }}>
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
            <button
              type="button"
              className="text-[1rem] px-4 py-[9px]  bg-[#146cda] font-semibold text-white rounded-tr-sm rounded-br-sm"
            >
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

const SigninUI = ({ onComplete }) => {
  return (
    <div className="absolute top-35 left-25 w-full">
      <form action="" className="flex flex-col gap-4 max-w-[800px]" onSubmit={(e) => {
        e.preventDefault();
        onComplete();
      }}>
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

const Address = ({ visible, onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsComplete(true);
    onComplete();
  };

  return (
    <div className="border-1 flex flex-col justify-start border-gray-300 rounded-md p-5 mx-auto">
      <p className="text-[#444444] text-[18px] font-semibold flex justify-between w-[99%] items-center">
        <div className="gap-4 flex">
          <span>2</span> <span>Addresses</span>
        </div>

        {isComplete && (
          <button
            type="button"
            onClick={() => setIsComplete(false)}
            className="ml-4 text-blue-600 flex items-center"
          >
            <RiEdit2Fill className="mr-1 text-gray-600" />
            <p className="text-gray-600">Edit</p>
          </button>
        )}

      </p>

      {visible && !isComplete && (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <p className="text-[#777777] text-[14px] font-semibold py-4 px-5">
            The selected address will be used both as your personal address (for
            invoice) and as your delivery address.
          </p>
          <div className="flex px-20 gap-2 my-3">
            <div className="w-[23%]">
              <p className="py-2 text-[#444444] font-semibold text-[14px]">
                House/Flat Number
              </p>
            </div>
            <div className="w-[75%]">
              <input
                type="text"
                placeholder="Enter Your House/Flat Number....."
                className="border-1 border-gray-300 w-[68%] py-2 px-4 rounded-sm"
              />
            </div>
          </div>
          <div className="flex px-20 gap-2 my-3">
            <div className="w-[23%]">
              <p className="py-2 text-[#444444] font-semibold text-[14px]">
                Society name
              </p>
            </div>
            <div className="w-[75%]">
              <input
                type="text"
                placeholder="Enter Your Society Name....."
                className="border-1 border-gray-300 w-[68%] py-2 px-4 rounded-sm"
              />
            </div>
          </div>
          <div className="flex px-20 gap-2 my-3">
            <div className="w-[23%]">
              <p className="py-2 text-[#444444] font-semibold text-[14px]">
                City name
              </p>
            </div>
            <div className="w-[75%]">
              <input
                type="text"
                placeholder="Enter Your City Name....."
                className="border-1 border-gray-300 w-[68%] py-2 px-4 rounded-sm"
              />
            </div>
          </div>
          <div className="flex px-20 gap-2 my-3">
            <div className="w-[23%]">
              <p className="py-2 text-[#444444] font-semibold text-[14px]">
                State name
              </p>
            </div>
            <div className="w-[75%]">
              <select
                className="border-1 border-gray-300 w-[68%] text-[#444444] py-2 px-4 rounded-sm selectdownarrow"
              >
                <option value="">Please Choose</option>
                <option value="">opt-1</option>
                <option value="">opt-2</option>
                <option value="">opt-3</option>
              </select>
            </div>
          </div>
          <div className="flex px-20 gap-2 my-3">
            <div className="w-[23%]">
              <p className="py-2 text-[#444444] font-semibold text-[14px]">
                Zip/Postal Code
              </p>
            </div>
            <div className="w-[75%]">
              <input
                type="text"
                placeholder="Enter Your Zip/Postal Code....."
                className="border-1 border-gray-300 w-[68%] py-2 px-4 rounded-sm"
              />
            </div>
          </div>
          <div className="flex px-20 gap-2 my-3">
            <div className="w-[23%]">
              <p className="py-2 text-[#444444] font-semibold text-[14px]">
                Country
              </p>
            </div>
            <div className="w-[75%]">
              <select
                className="border-1 border-gray-300 w-[68%] text-[#444444] py-2 px-4 rounded-sm selectdownarrow"
              >
                <option value="">Please Choose</option>
                <option value="">opt-1</option>
                <option value="">opt-2</option>
                <option value="">opt-3</option>
              </select>
            </div>
          </div>
          <div className="flex px-20 gap-2 my-3">
            <div className="w-[23%]">
              <p className="py-2 text-[#444444] font-semibold text-[14px]">
                Phone
              </p>
            </div>
            <div className="w-[75%]">
              <input
                type="text"
                placeholder="Enter Your Phone Number....."
                className="border-1 border-gray-300 w-[68%] py-2 px-4 rounded-sm"
              />
            </div>
          </div>
          <div className="flex px-20 gap-2 my-3">
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <label className="text-[#444444] text-[15px] font-semibold">
                Use this address for invoice too
              </label>
            </div>
          </div>
          <div className="flex justify-end px-20 gap-2 my-3">
            <button
              type="submit"
              className="w-fit bg-blue-600 text-white py-2 rounded px-4 hover:bg-blue-700 font-medium"
            >
              CONTINUE
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const ShippingMethod = ({ visible, onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleContinue = () => {
    setIsComplete(true);
    onComplete();
  };

  return (
    <div className="border border-gray-300 rounded-md p-5 mx-auto">
      <p className="text-[#444] text-[18px] font-semibold flex justify-between w-[99%] items-center">
        <div className="flex gap-4">
          <span>3</span> <span>Shipping Method</span>
        </div>
        {isComplete && (
          <button
            type="button"
            onClick={() => setIsComplete(false)}
            className="ml-4 text-blue-600 flex items-center"
          >
            <RiEdit2Fill className="mr-1 text-gray-600" />
            <p className="text-gray-600">Edit</p>
          </button>
        )}
      </p>

      {visible && !isComplete && (
        <>
          <div className="flex flex-col gap-4 px-10 mt-5">
            <label className="flex items-center justify-between border border-gray-300 rounded-md pl-5 py-5 pr-15 cursor-pointer">
              <input
                type="radio"
                name="shipping"
                defaultChecked
                className="accent-black text-[25px] scale-125"
              />
              <span className="font-semibold text-[#333333] text-[16px]">
                Click and collect
              </span>
              <span className="text-[#444444] text-[14px]">Pick up in-store</span>
              <span className="text-green-800 text-[18px] font-semibold">
                Free
              </span>
            </label>

            <label className="flex items-center justify-between border border-gray-300 rounded-md pl-5 py-5 pr-15 cursor-pointer">
              <input
                type="radio"
                name="shipping"
                className="accent-black scale-125"
              />
              <div className="flex justify-between gap-20 items-center">
                <TbTruckDelivery size={50} />
                <span className="font-semibold text-[#333333] text-[16px]">
                  My carrier
                </span>
              </div>
              <span className="text-[#444444] text-[14px]">
                Delivery in 5 Days!
              </span>
              <span className="text-[#444444] text-[18px] font-semibold">
                $8.47 tax incl.
              </span>
            </label>
          </div>

          <div className="flex items-center justify-between pl-11 py-5 pr-15">
            <p className="text-[#444444] text-[18px]">
              If you would like to add a comment about your order, please write it
              in the field below.
            </p>
          </div>

          <div className="w-full px-11">
            <textarea
              className="border border-gray-300 rounded-md w-full h-13 p-3"
              placeholder=""
            ></textarea>
          </div>

          <div className="flex justify-end px-10 mt-4">
            <button
              onClick={handleContinue}
              className="bg-blue-600 text-white rounded-sm py-2 px-6 font-semibold hover:bg-blue-700"
            >
              CONTINUE
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const PaymentMethod = ({ visible, onComplete }) => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (method) => {
    setSelectedMethod(method);
    setShowModal(true);
  };

  const handlePlaceOrder = () => {
    onComplete();
  };

  return (
    <div className="border border-gray-300 rounded-md p-5 mx-auto">
      <p className="text-[#444] text-[18px] font-semibold flex gap-4">
        <span>4</span> <span>Payment</span>
      </p>

      {visible && (
        <>
          <div className="flex flex-col gap-4 px-20 mt-5">
            {["card", "paypal", "cod", "bank", "upi"].map((method) => (
              <label
                key={method}
                onClick={() => handleSelect(method)}
                className="flex items-center justify-between border border-gray-300 rounded-md px-4 py-3 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedMethod === method}
                    readOnly
                    className="scale-125 accent-black"
                  />
                  <span className="font-semibold text-[#444]">
                    {method === "card" && "Credit / Debit Card"}
                    {method === "paypal" && "PayPal"}
                    {method === "cod" && "Cash on Delivery"}
                    {method === "bank" && "Bank Transfer"}
                    {method === "upi" && "UPI / Google Pay"}
                  </span>
                </div>
                <div className="text-[#444]">
                  {method === "card" && "Pay securely with your card"}
                  {method === "paypal" && "Pay via your PayPal account"}
                  {method === "cod" && "Pay when you receive the order"}
                  {method === "bank" && "Pay directly to our bank account"}
                  {method === "upi" && "Instant payment via UPI"}
                </div>
              </label>
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={handlePlaceOrder}
              className="bg-blue-600 text-white rounded-sm py-2 px-6 font-semibold uppercase"
            >
              Place Order
            </button>
          </div>

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-3 text-lg font-bold"
                >
                  ✕
                </button>
                <h2 className="text-xl font-semibold mb-4">
                  {selectedMethod === "card" && "Enter Card Details"}
                  {selectedMethod === "paypal" && "Login to PayPal"}
                  {selectedMethod === "cod" && "Cash on Delivery Info"}
                  {selectedMethod === "bank" && "Bank Transfer Info"}
                  {selectedMethod === "upi" && "UPI / Google Pay"}
                </h2>

                {selectedMethod === "card" && (
                  <form className="flex flex-col gap-3">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="border border-gray-300 rounded-md p-2"
                    />
                    <input
                      type="text"
                      placeholder="Cardholder Name"
                      className="border border-gray-300 rounded-md p-2"
                    />
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border border-gray-300 rounded-md p-2 w-1/2"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="border border-gray-300 rounded-md p-2 w-1/2"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        handlePlaceOrder();
                      }}
                      className="bg-blue-600 text-white rounded-sm py-2 px-6 font-semibold mt-2"
                    >
                      Submit Payment
                    </button>
                  </form>
                )}

                {selectedMethod === "paypal" && (
                  <div className="flex flex-col gap-3">
                    <p className="text-[#444]">
                      You will be redirected to PayPal to complete your purchase securely.
                    </p>
                    <p className="text-[#444]">
                      After completing your payment, you will be brought back to our website to confirm your order.
                    </p>
                    <button
                      type="button"
                      className="flex items-center gap-2 bg-[#146cda] text-white rounded-sm py-2 px-6 font-semibold w-max mx-auto"
                    >
                      <img src="https://www.paypalobjects.com/webstatic/icon/pp258.png" alt="PayPal" className="w-5 h-5" />
                      Proceed to PayPal
                    </button>

                  </div>
                )}

                {selectedMethod === "cod" && (
                  <div>
                    <p className="text-[#444] mb-4">
                      You can pay in cash when your order is delivered.
                    </p>
                    <div className="flex flex-col">
                      <button
                        onClick={() => {
                          setShowModal(false);
                          handlePlaceOrder();
                        }}
                        className="bg-blue-600 text-white rounded-sm py-2 px-6 font-semibold mx-auto"
                      >
                        Confirm Order
                      </button>
                    </div>
                  </div>
                )}

                {selectedMethod === "bank" && (
                  <div className="flex flex-col gap-3">
                    <p className="text-[#444]">
                      Please transfer the total amount to our bank account using the details below.
                      Once the transfer is complete, please share the payment receipt with us.
                    </p>
                    <div className="text-sm text-[#444] leading-relaxed">
                      <p><strong>Bank Name:</strong> Your Bank Name</p>
                      <p><strong>Account Name:</strong> Your Company Name</p>
                      <p><strong>Account Number:</strong> 1234567890</p>
                      <p><strong>IFSC Code:</strong> ABCD0123456</p>
                    </div>
                    <p className="text-[#444]">
                      Or scan the QR code below to pay directly:
                    </p>
                    <img
                      src="YOUR_QR_CODE_URL"
                      alt="Bank QR Code"
                      className="w-40 h-40 border border-gray-300 rounded-md mx-auto"
                    />
                  </div>
                )}


                {selectedMethod === "upi" && (
                  <div className="flex flex-col gap-3">
                    <p className="text-[#444]">
                      Please scan the UPI QR code below with your preferred UPI app (Google Pay, PhonePe, Paytm, etc.) to complete your payment.
                    </p>
                    <img
                      src="YOUR_UPI_QR_CODE_URL"
                      alt="UPI QR Code"
                      className="w-40 h-40 border border-gray-300 rounded-md mx-auto"
                    />
                    <p className="text-[#444]">
                      Alternatively, you can send the payment to our UPI ID:
                      <strong> yourname@upi</strong>
                    </p>
                    <p className="text-[#444]">
                      Once the payment is done, please share the transaction ID with us to confirm your order.
                    </p>
                  </div>
                )}

              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const CheckOutPage = () => {
  const [isPersonalComplete, setIsPersonalComplete] = useState(false);
  const [isAddressComplete, setIsAddressComplete] = useState(false);
  const [isShippingComplete, setIsShippingComplete] = useState(false);

  return (
    <section>
      <div className="flex justify-between max-w-[1500px] my-12 mx-auto">
        <div className="w-[68%]">
          <PersonalDetail onComplete={() => setIsPersonalComplete(true)} />
          <Address
            visible={isPersonalComplete}
            onComplete={() => setIsAddressComplete(true)}
          />
          <ShippingMethod
            visible={isAddressComplete}
            onComplete={() => setIsShippingComplete(true)}
          />
          <PaymentMethod visible={isShippingComplete} />
        </div>

        <CheckoutSummary />
      </div>
      <style jsx>{`
        .active {
          padding-bottom: 4px;
          display: inline;
          color: #146cda;
        }
      `}</style>
    </section>
  );
};


export default CheckOutPage;
