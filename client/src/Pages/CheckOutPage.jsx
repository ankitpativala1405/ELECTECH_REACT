import React, { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiEdit2Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import CheckoutSummary from "../Components/CheckoutSummary";
import CartProduct from "../../Methods/CartData";
import OrderMethod from "../../Methods/Order.method";

const cartItems = CartProduct;

const Field = ({ label, name, value, onChange, placeholder }) => (
  <div className="flex px-20 gap-2 my-3">
    <div className="w-[23%]">
      <p className="py-2 text-[#444444] font-semibold text-[14px]">
        {label}
      </p>
    </div>
    <div className="w-[75%]">
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-1 border-gray-300 w-[68%] py-2 px-4 rounded-sm"
      />
    </div>
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div className="flex px-20 gap-2 my-3">
    <div className="w-[23%]">
      <p className="py-2 text-[#444444] font-semibold text-[14px]">
        {label}
      </p>
    </div>
    <div className="w-[75%]">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border-1 border-gray-300 w-[68%] text-[#444444] py-2 px-4 rounded-sm"
      >
        <option value="">Please Choose</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  </div>
);

const PersonalDetail = ({ onComplete, initialData }) => {
  const [activePage, setActivePage] = useState("signin");
  const [isComplete, setIsComplete] = useState(false);
  const [formData, _] = useState(initialData); // Set initial state from props

  const handleComplete = () => {
    setIsComplete(true);
    onComplete(formData); // Pass the formData to the parent
  };

  return (
    <div
      className={`border-1 flex flex-col justify-center border-gray-300 rounded-md mx-auto relative`}
      style={{ height: isComplete ? "80px" : activePage === "signin" ? "400px" : "700px" }}
    >
      <p className="text-[#444444] text-[18px] font-semibold flex justify-between w-[95%] absolute top-7 left-5">
        <div className="gap-4 items-center flex">
          <span className={isComplete ? `bg-green-600 px-2 rounded-full py-2 text-white` : ``}>{!isComplete ? 1 : <FaCheck />}</span> <span>Personal Information</span>
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

function GuestPage({ onComplete }) {
  const [formData, setFormData] = useState({
    title: "Mrs.",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    receiveOffers: true,
    newsletter: false,
    termsAccepted: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete({
      ...formData,
      type: "guest",
    });
    console.log("formData", formData);
  };

  return (
    <div className="mx-auto p-6 rounded absolute top-30 left-16">
      <form className="space-y-5 mt-5 w-full" onSubmit={handleSubmit}>
        <div className="flex gap-20 items-center">
          <label className="block mb-2 font-semibold text-[#444444]">
            Social title
          </label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center font-semibold text-[#444444]">
              <input
                type="radio"
                name="title"
                value="Mr."
                checked={formData.title === "Mr."}
                onChange={handleChange}
                className="mr-2"
              />{" "}
              Mr.
            </label>
            <label className="flex items-center font-semibold text-[#444444]">
              <input
                type="radio"
                name="title"
                value="Mrs."
                checked={formData.title === "Mrs."}
                onChange={handleChange}
                className="mr-2"
              />{" "}
              Mrs.
            </label>
          </div>
        </div>

        <div className="flex gap-20">
          <label className="block mb-1 font-semibold text-[#444444]">
            First name
          </label>
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
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
          <div>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
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
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-200 px-4 py-2 rounded-tl-sm rounded-bl-sm"
            />
            <button
              type="button"
              className="text-[1rem] px-4 py-[9px] bg-[#146cda] font-semibold text-white rounded-tr-sm rounded-br-sm"
            >
              SHOW
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <label className="flex items-start">
            <input type="checkbox" className="mr-2 mt-1" name="receiveOffers"
              checked={formData.receiveOffers}
              onChange={handleChange} />
            <span>Receive offers from our partners</span>
          </label>

          <label className="flex items-start">
            <input type="checkbox" className="mr-2 mt-1" name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange} />
            <span>
              Sign up for our newsletter
              <p className="text-xs text-gray-500">
                You may unsubscribe at any moment. For that purpose, please find
                our contact info in the legal notice.
              </p>
            </span>
          </label>

          <label className="flex items-start">
            <input type="checkbox" className="mr-2 mt-1" name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange} />
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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(formData);
    console.log("formData", formData);

  };

  return (
    <div className="absolute top-35 left-25 w-full">
      <form
        className="flex flex-col gap-4 max-w-[800px]"
        onSubmit={handleSubmit}
      >
        {/* Email field */}
        <div className="flex gap-25 mt-5 items-center">
          <label
            htmlFor="email"
            className="text-[14px] text-[#444444] font-semibold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email Or Mobile Number..."
            className="border-1 border-gray-200 rounded-sm py-2 w-[50%] pl-5 focus:outline-none"
          />
        </div>

        {/* Password field with SHOW toggle */}
        <div className="flex gap-18 mt-2 items-center">
          <label
            htmlFor="password"
            className="text-[14px] text-[#444444] font-semibold"
          >
            Password
          </label>
          <div className="w-[50%] flex ">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Your Password..."
              className="border-1 border-gray-200 rounded-tl-sm rounded-bl-sm py-2 w-[80%] pl-5 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="py-2 px-3 bg-[#146cda] text-white rounded-tr-sm w-[20%] rounded-br-sm border-0"
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>
        </div>

        <p className="text-gray-700 px-35 underline">
          <a href="#">Forgot your password?</a>
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

  const [addressData, setAddressData] = useState({
    houseNumber: "",
    societyName: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    useForInvoice: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddressData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsComplete(true);
    onComplete(addressData);
    console.log("addressData", addressData);

  };

  return (
    <div className="border-1 flex flex-col justify-start border-gray-300 rounded-md p-5 mx-auto">
      <p className="text-[#444444] text-[18px] font-semibold flex justify-between w-[99%] items-center">
        <div className="gap-4 items-center flex">
          <span
            className={
              isComplete
                ? `bg-green-600 px-2 rounded-full py-2 text-white`
                : ``
            }
          >
            {!isComplete ? 2 : <FaCheck />}
          </span>{" "}
          <span>Addresses</span>
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

          <Field
            label="House/Flat Number"
            name="houseNumber"
            value={addressData.houseNumber}
            onChange={handleChange}
            placeholder="Enter Your House/Flat Number..."
          />

          <Field
            label="Society name"
            name="societyName"
            value={addressData.societyName}
            onChange={handleChange}
            placeholder="Enter Your Society Name..."
          />

          <Field
            label="City name"
            name="city"
            value={addressData.city}
            onChange={handleChange}
            placeholder="Enter Your City Name..."
          />

          <SelectField
            label="State name"
            name="state"
            value={addressData.state}
            onChange={handleChange}
            options={["opt-1", "opt-2", "opt-3"]}
          />

          <Field
            label="Zip/Postal Code"
            name="zip"
            value={addressData.zip}
            onChange={handleChange}
            placeholder="Enter Your Zip/Postal Code..."
          />

          <SelectField
            label="Country"
            name="country"
            value={addressData.country}
            onChange={handleChange}
            options={["opt-1", "opt-2", "opt-3"]}
          />

          <Field
            label="Phone"
            name="phone"
            value={addressData.phone}
            onChange={handleChange}
            placeholder="Enter Your Phone Number..."
          />

          <div className="flex px-20 gap-2 my-3">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="useForInvoice"
                checked={addressData.useForInvoice}
                onChange={handleChange}
              />
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
  const [shippingOption, setShippingOption] = useState("click_collect");
  const [comment, setComment] = useState("");


  const handleContinue = () => {
    const shippingData = {
      shippingOption,
      comment,
    };
    console.log("Shipping data:", shippingData);
    setIsComplete(true);
    onComplete(shippingData);
  };

  return (
    <div className="border border-gray-300 rounded-md p-5 mx-auto">
      <p className="text-[#444] text-[18px] font-semibold flex justify-between w-[99%] items-center">
        <div className="flex items-center gap-4">
          <span className={isComplete ? `bg-green-600 px-2 rounded-full py-2 text-white` : ``}>
            {!isComplete ? 3 : <FaCheck />}
          </span>
          <span>Shipping Method</span>
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
                value="click_collect"
                checked={shippingOption === "click_collect"}
                onChange={(e) => setShippingOption(e.target.value)}
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
                value="my_carrier"
                checked={shippingOption === "my_carrier"}
                onChange={(e) => setShippingOption(e.target.value)}
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
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add your comment here..."
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
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handleSelect = (method) => {
    setSelectedMethod(method);
    setShowModal(true);
  };

  const handlePlaceOrder = () => {
    const paymentData = {
      method: selectedMethod,
      ...(selectedMethod === "card" && { cardDetails }),
    };

    console.log("Collected payment data:", paymentData);
    onComplete(paymentData);


     console.log("cartItems", cartItems);
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
                  <form
                    className="flex flex-col gap-3"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setShowModal(false);
                      handlePlaceOrder();
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Card Number"
                      value={cardDetails.number}
                      onChange={(e) =>
                        setCardDetails({ ...cardDetails, number: e.target.value })
                      }
                      className="border border-gray-300 rounded-md p-2"
                    />
                    <input
                      type="text"
                      placeholder="Cardholder Name"
                      value={cardDetails.name}
                      onChange={(e) =>
                        setCardDetails({ ...cardDetails, name: e.target.value })
                      }
                      className="border border-gray-300 rounded-md p-2"
                    />
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardDetails.expiry}
                        onChange={(e) =>
                          setCardDetails({ ...cardDetails, expiry: e.target.value })
                        }
                        className="border border-gray-300 rounded-md p-2 w-1/2"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        value={cardDetails.cvv}
                        onChange={(e) =>
                          setCardDetails({ ...cardDetails, cvv: e.target.value })
                        }
                        className="border border-gray-300 rounded-md p-2 w-1/2"
                      />
                    </div>
                    <button
                      type="submit"
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

                      onClick={() => {
                        setShowModal(false);
                        handlePlaceOrder();
                      }}
                      className="flex items-center gap-2 bg-[#146cda] text-white rounded-sm py-2 px-6 font-semibold w-max mx-auto"
                    >
                      <img src="https:www.paypalobjects.com/webstatic/icon/pp258.png" alt="PayPal" className="w-5 h-5" />
                      Proceed to PayPal
                    </button>
                  </div>
                )}

                {selectedMethod === "cod" && (
                  <div className="flex justify-center flex-col">
                    <p className="text-[#444] mb-4">
                      You can pay in cash when your order is delivered.
                    </p>
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
                      Please scan the UPI QR code below with your preferred UPI app.
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
  )
};

const CheckOutPage = () => {

  const [formData, setFormData] = useState({
    title: "Mrs.",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    receiveOffers: true,
    newsletter: false,
    termsAccepted: true
  });

  const [addressData, setAddressData] = useState({
    houseNumber: "",
    societyName: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    useForInvoice: false
  });

  const [shippingData, setShippingData] = useState({
    option: "click_collect",
    comment: ""
  });

  // Flow control
  const [isPersonalComplete, setIsPersonalComplete] = useState(false);
  const [isAddressComplete, setIsAddressComplete] = useState(false);
  const [isShippingComplete, setIsShippingComplete] = useState(false);

  // Event handlers
  const handlePersonalComplete = (data) => {
    setFormData(data);
    setIsPersonalComplete(true);
  };

  const handleAddressComplete = (data) => {
    setAddressData(data);
    setIsAddressComplete(true);
  };

  const handleShippingComplete = (data) => {
    setShippingData(data);
    setIsShippingComplete(true);
  };

  const handlePaymentComplete = async (paymentData) => {
    try {
      const orderData = {
        personalDetails: formData,
        address: addressData,
        shippingMethod: shippingData,
        paymentMethod: paymentData,
        cartItems: cartItems
      };

      const response = await OrderMethod.CreateOrder(orderData);
      
      if (response.ok) {
        const order = await response.json();
        console.log("Order created:", order);
        // Handle success (redirect, show confirmation, etc.)
      } else {
        console.error("Order creation failed");
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <section>
      <div className="flex justify-between max-w-[1500px] my-12 mx-auto">
        <div className="w-[68%]">
          <PersonalDetail
            onComplete={handlePersonalComplete}
            initialData={formData}
            isComplete={isPersonalComplete}
            setIsComplete={setIsPersonalComplete}
          />

          <Address
            visible={isPersonalComplete}
            onComplete={handleAddressComplete}
            initialData={addressData}
            isComplete={isAddressComplete}
            setIsComplete={setIsAddressComplete}
          />

          <ShippingMethod
            visible={isAddressComplete}
            onComplete={handleShippingComplete}
            initialData={shippingData}
            isComplete={isShippingComplete}
            setIsComplete={setIsShippingComplete}
          />

          <PaymentMethod
            visible={isShippingComplete}
            onComplete={handlePaymentComplete}
          />
        </div>

        <CheckoutSummary cartItems={cartItems} />
      </div>
    </section>
  );
};



export default CheckOutPage;