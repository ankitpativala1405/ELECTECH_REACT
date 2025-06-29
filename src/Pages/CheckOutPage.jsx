import React from "react";
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

const CheckOutPage = () => {
  return (
    <>
      <section>
        <div className="flex justify-between mx-auto">
          <section className="py-10">
            <div className="">
              <div className="p-5 border-1 flex flex-col justify-center border-gray-300 max-w-[800px] rounded-md mx-auto">
                <p className="text-[#777777]">
                  Already have an account?
                  <a href="/login" className="ml-2 text-[#333333] underline">
                    Log in instead!
                  </a>
                </p>

                <form className="w-full mx-auto py-5  space-y-4 relative">
                  <div className="">
                    <div className="flex justify-between">
                      <div className="px-16"></div>
                      <div className="flex justify-end">
                        <label className="text-right">Social title:</label>
                      </div>
                      <div className=" flex justify-items-start gap-5 ml-[-40px]">
                        <label className="">
                          <input
                            type="radio"
                            name="title"
                            value="Mr."
                            className="scale-125"
                          />{" "}
                          Mr.
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="title"
                            value="Mrs."
                            className="scale-125"
                          />{" "}
                          Mrs.
                        </label>
                      </div>
                      <div className="px-12"></div>
                      <div className="px-10"></div>
                      <div className="px-17"></div>
                      <div className="px-10"></div>
                    </div>

                    <div className="flex gap-4 justify-around items-center mb-[-15px]">
                      <div className="px-18"></div>
                      <div className="flex justify-end">
                        <label className="text-right">First name:</label>
                      </div>
                      <div className="rounded w-[45%] ">
                        <input
                          type="text"
                          id="first-name"
                          className="py-2 border-1 px-3 mt-7 w-full rounded-sm border-gray-300 focus:outline-none"
                          placeholder="Enter Your First Name....."
                        />
                        <p className="text-gray-500 text-[14px] mt-1">
                          Only letters and the dot (.) character, followed by a
                          space, are allowed.
                        </p>
                      </div>
                      <div className="px-15"></div>
                      <div className="px-10"></div>
                    </div>

                    <div className="flex gap-4 justify-around items-center">
                      <div className="px-18"></div>
                      <div className="flex justify-end">
                        <label className="text-right">Last name:</label>
                      </div>
                      <div className="rounded w-[45%] ">
                        <input
                          type="text"
                          id="first-name"
                          className="py-2 border-1 px-3 mt-7 w-full rounded-sm border-gray-300 focus:outline-none"
                          placeholder="Enter Your Last Name....."
                        />
                        <p className="text-gray-500 text-[14px] mt-1">
                          Only letters and the dot (.) character, followed by a
                          space, are allowed.
                        </p>
                      </div>
                      <div className="px-15"></div>
                      <div className="px-10"></div>
                    </div>

                    <div className="flex gap-4 mt-4 justify-around items-center">
                      <div className="px-23"></div>
                      <div className="flex justify-end text-right">
                        <label className="text-right">Email:</label>
                      </div>
                      <div className="rounded w-[45%] ">
                        <input
                          type="text"
                          id="first-name"
                          className="py-2 border-1 px-3 w-full rounded-sm border-gray-300 focus:outline-none"
                          placeholder="Enter Your Email....."
                        />
                      </div>
                      <div className="px-15"></div>
                      <div className="px-10"></div>
                    </div>

                    <div className="flex gap-4 mt-5 justify-around items-center">
                      <div className="px-19"></div>
                      <div className="flex justify-end text-right">
                        <label className="text-right">Password:</label>
                      </div>
                      <div className="w-[45%] flex ">
                        <input
                          type="text"
                          id="first-name"
                          className="py-2 border-1 w-full px-3 rounded-tl-sm rounded-bl-sm border-gray-300 focus:outline-none"
                          placeholder="Enter Your Password....."
                        />
                        <input
                          type="submit"
                          value={"SHOW"}
                          className="py-2 px-3 bg-[#146cda] text-white rounded-tr-sm rounded-br-sm border-0"
                        />
                      </div>
                      <div className="px-15"></div>
                      <div className="px-10"></div>
                    </div>

                    <div className="flex gap-4  justify-around items-center">
                      <div className="px-19"></div>
                      <div className="flex justify-end text-right">
                        <label className="text-right">Birthdate:</label>
                      </div>
                      <div className="rounded w-[45%] ">
                        <input
                          type="text"
                          id="first-name"
                          placeholder="MM/DD/YYYY"
                          className="py-2 px-3 border-1 w-full rounded-sm mt-5 border-gray-300 focus:outline-none"
                        />
                        <p className="text-[#777777]">
                          &nbsp;(E.g.: 05/31/1970)
                        </p>
                      </div>
                      <div className="px-2 ml-[-40px] text-[#777777]">
                        Optional
                      </div>
                      <div className="px-19"></div>
                    </div>

                    <div className="text-[#777777] mt-5 flex gap-1 justify-around items-center">
                      <div className="px-20"></div>
                      <div className="px-20"></div>
                      <input type="checkbox" id="offers" className="" />
                      <label htmlFor="offers" className="text-[#444444]">
                        Receive offers from our partners
                      </label>
                      <div className="px-23"></div>
                      <div className="px-23"></div>
                      <div className="px-23"></div>
                    </div>

                    <div className="text-[#777777] mt-2 flex gap-1 justify-around items-center">
                      <div className="px-20"></div>
                      <div className="px-20"></div>
                      <input type="checkbox" id="offers" className="" />
                      <div>
                        <label htmlFor="offers" className="text-[#444444]">
                          Sign up for our newsletter
                        </label>
                      </div>
                      <div className="px-27"></div>
                      <div className="px-25"></div>
                      <div className="px-23"></div>
                    </div>

                    <div className="flex justify-center items-center mx-auto  max-w-[45%]">
                      <p className="px-2"></p>
                      <p className="text-[14px] text-[#444444]">
                        You may unsubscribe at any moment. For that purpose,
                        please find our contact info in the legal notice.
                      </p>
                    </div>

                    <div className="text-[#777777] mt-2 flex gap-1 justify-around items-center">
                      <div className="px-20"></div>
                      <div className="px-18"></div>
                      <input type="checkbox" id="offers" className="" />
                      <label
                        htmlFor="offers"
                        className="text-[#444444] ml-[-5px]"
                      >
                        Customer data privacy
                      </label>
                      <div className="px-27"></div>
                      <div className="px-25"></div>
                      <div className="px-23"></div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center mx-auto  max-w-[45%]">
                    <p className="px-2"></p>
                    <p className="text-[14px] mt-[-15px] text-[#444444]">
                      The personal data you provide is used to answer queries,
                      process orders or allow access to specific information.
                      You have the right to modify and delete all the personal
                      information found in the "My Account" page.
                    </p>
                  </div>

                  <div className="text-[#777777] flex gap-7 justify-around items-center">
                    <div className="px-19"></div>
                    <div className="px-[78px]"></div>
                    <input type="checkbox" id="offers" className="" />
                    <label
                      htmlFor="offers"
                      className="text-[#444444] text-nowrap mt-[-5px]"
                    >
                      I agree to the terms and conditions and the privacy policy
                    </label>
                    <div className="px-25"></div>
                    <div className="px-23"></div>
                    <div className="px-23"></div>
                  </div>

                  <button
                    type="submit"
                    className="absolute right-3 bottom-3 bg-[#146cda] text-white px-6 py-2 rounded-md"
                  >
                    SAVE
                  </button>
                </form>
              </div>
            </div>
          </section>
          <CheckoutSummary />
        </div>
      </section>
    </>
  );
};

export default CheckOutPage;
