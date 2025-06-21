import React from "react";

const SignUpSection = () => {
  return (
    <>
      <section className="bg-[#e6edf5]  mx-auto">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center py-7 px-10">
            <h2 className="text-[1.5rem] text-[#333333]">Create an account</h2>
            <a href="" className="flex text-[#333333] text-[14px]">
              Home
              <p className="ml-4 text-[#777777]">
                | <span className="ml-4">Create an account</span>
              </p>
            </a>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="">
          <div className="p-5 border-1 flex flex-col justify-center border-gray-300 max-w-[1300px] rounded-md mx-auto">
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
                      className="py-2 border-1 mt-7 w-full rounded-sm border-gray-300"
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
                      className="py-2 border-1 mt-7 w-full rounded-sm border-gray-300"
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
                      className="py-2 border-1 w-full rounded-sm border-gray-300"
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
                      className="py-2 border-1 w-full rounded-tl-sm rounded-bl-sm border-gray-300"
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
                      className="py-2 px-3 border-1 w-full rounded-sm mt-5 border-gray-300"
                    />
                    <p className="text-[#777777]">&nbsp;(E.g.: 05/31/1970)</p>
                  </div>
                  <div className="px-2 ml-[-40px] text-[#777777]">Optional</div>
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
                    You may unsubscribe at any moment. For that purpose, please
                    find our contact info in the legal notice.
                  </p>
                </div>

                <div className="text-[#777777] mt-2 flex gap-1 justify-around items-center">
                  <div className="px-20"></div>
                  <div className="px-18"></div>
                  <input type="checkbox" id="offers" className="" />
                  <label htmlFor="offers" className="text-[#444444] ml-[-5px]">
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
                  process orders or allow access to specific information. You
                  have the right to modify and delete all the personal
                  information found in the "My Account" page.
                </p>
              </div>

              <div className="text-[#777777] flex gap-7 justify-around items-center">
                <div className="px-19"></div>
                <div className="px-[78px]"></div>
                <input type="checkbox" id="offers" className="" />
                <label htmlFor="offers" className="text-[#444444] text-nowrap mt-[-5px]">
                  I agree to the terms and conditions and the privacy policy
                </label>
                <div className="px-25"></div>
                <div className="px-23"></div>
                <div className="px-23"></div>
              </div>

              <button type="submit" className="absolute right-3 bottom-3 bg-[#146cda] text-white px-6 py-2 rounded-md">
                  SAVE
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpSection;
