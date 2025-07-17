import React, { useState } from "react";
import UserMethod from "../../Methods/user.method";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const SignUpSection = () => {
  const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    birthdate: "",
    offers: false,
    newsletter: false,
    privacy: false,
    terms: false,
    username: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const generateUsername = () => {
    const randomNum = Math.floor(100 + Math.random() * 900); 
    const firstname = formData.firstName.replace(/\s+/g, "").toUpperCase().slice(0, 3)
    const lastname = formData.lastName.replace(/\s+/g, "").toUpperCase().slice(0,3)
    const number = formData.phone.slice(-4)
    const username = `${randomNum}${firstname}${lastname}${number}`
    return `${username}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = generateUsername();

    const finalFormData = {
      ...formData,
      username, 
    };
    const response = await UserMethod.create(finalFormData);
    const json = await response.json();
    console.log(json);
    alert(`Your username is ->${username}`)

    navigate('/login')
  };

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
          <div className="p-5 border-1 flex flex-col justify-center bg-white border-gray-300 max-w-[1300px] rounded-md mx-auto">
            <p className="text-[#777777]">
              Already have an account?
              <Link to="/login" className="ml-2 text-[#333333] underline">
                Log in instead!
              </Link>
            </p>

            <form
              onSubmit={handleSubmit}
              className="w-full mx-auto py-5  space-y-4 relative"
            >
              <div className="flex w-[100%] gap-10">
                <div className="flex flex-col items-end w-[22%] max-w-[350px]">
                  <div>
                    <p className="text-[14px] text-[#444444] font-semibold">
                      Social title
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[70%]">
                  <div className=" flex justify-items-start gap-5 text-[14px] text-[#444444] font-semibold">
                    <label className="">
                      <input
                        type="radio"
                        name="title"
                        value="Mr."
                        className="scale-125"
                        onChange={handleChange}
                        checked={formData.title === "Mr."}
                      />{" "}
                      Mr.
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="title"
                        value="Mrs."
                        className="scale-125"
                        onChange={handleChange}
                        checked={formData.title === "Mrs."}
                      />{" "}
                      Mrs.
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex w-[100%] gap-10">
                <div className="flex flex-col items-end w-[22%] max-w-[350px]">
                  <div className="flex flex-col ">
                    <p className="text-[14px] text-[#444444] font-semibold py-2">
                      First name
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[70%] ">
                  <div className="flex flex-col gap-2 justify-center w-full">
                    <input
                      type="text"
                      name="firstName"
                      className="py-2 px-3 border-1 w-[80%] rounded-sm border-gray-300 focus:outline-none"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <p className="text-gray-500 text-[15px]">
                      Only letters and the dot (.) character, followed by a
                      space, are allowed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-[100%] gap-10">
                <div className="flex flex-col items-end w-[22%] max-w-[350px]">
                  <div className="flex flex-col ">
                    <p className="text-[14px] text-[#444444] font-semibold py-2">
                      Last name
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[70%] ">
                  <div className="flex flex-col gap-2 justify-center w-full">
                    <input
                      type="text"
                      name="lastName"
                      className="py-2 px-3 border-1 w-[80%] rounded-sm border-gray-300 focus:outline-none"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    <p className="text-gray-500 text-[15px]">
                      Only letters and the dot (.) character, followed by a
                      space, are allowed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-[100%] gap-10">
                <div className="flex flex-col items-end w-[22%] max-w-[350px]">
                  <div className="flex flex-col ">
                    <p className="text-[14px] text-[#444444] font-semibold py-2">
                      Email
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[70%] ">
                  <div className="flex flex-col gap-2 justify-center w-full">
                    <input
                      type="email"
                      name="email"
                      className="py-2 px-3 border-1 w-[80%] rounded-sm border-gray-300 focus:outline-none"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-[100%] gap-10">
                <div className="flex flex-col items-end w-[22%] max-w-[350px]">
                  <div className="flex flex-col ">
                    <p className="text-[14px] text-[#444444] font-semibold py-2">
                      Phone Number
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[70%] ">
                  <div className="flex flex-col gap-2 justify-center w-full">
                    <input
                      type="number"
                      name="phone"
                      className="py-2 px-3 border-1 w-[80%] rounded-sm border-gray-300 focus:outline-none"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-[100%] gap-10">
                <div className="flex flex-col items-end w-[22%] max-w-[350px]">
                  <div className="flex flex-col ">
                    <p className="text-[14px] text-[#444444] font-semibold py-2">
                      Password
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[70%] ">
                  <div className="flex gap-0 w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="py-2 px-3 border-1 w-[71%] rounded-sm border-gray-300 focus:outline-none"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="py-2 px-4 bg-[#146cda] text-white rounded-tr-sm w-[78.50px] rounded-br-sm border-0"
                    >
                      {showPassword ? "HIDE" : "SHOW"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex w-full gap-10">
                <div className="flex flex-col items-end w-[22%] max-w-[350px]">
                  <label
                    className="text-sm text-[#444] font-semibold py-2"
                    htmlFor="birthdate"
                  >
                    Birthdate
                  </label>
                </div>

                <div className="flex flex-col items-start w-[70%]">
                  <div className="w-full flex justify-start gap-3">
                    <div className="flex flex-col gap-1 justify-center w-[82%]">
                      <input
                        id="birthdate"
                        type="date"
                        name="birthdate"
                        className="py-2 px-3 border w-[98%] border-gray-300 rounded-sm  focus:outline-none focus:border-blue-500 custom-date"
                        value={formData.birthdate}
                        onChange={handleChange}
                      />
                      <p className="text-gray-500 text-sm">
                        (E.g.: 05/31/1970)
                      </p>
                    </div>
                    <p className="text-gray-500 py-2 font-semibold">Optional</p>
                  </div>
                </div>
              </div>

              <div className="flex w-[100%] gap-10">
                <div className="flex flex-col items-end w-[22%] max-w-[350px]">
                  <div className="flex flex-col ">
                    <p className="text-[14px] text-[#444444] font-semibold py-2"></p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[70%] ">
                  <div className="flex flex-col gap-2 justify-center w-full">
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        name="offers"
                        className="py-2 border-1 border-gray-300 focus:outline-none"
                        checked={formData.offers}
                        onChange={handleChange}
                      />
                      <p className="text-gray-600 font-semibold text-[15px]">
                        Receive offers from our partners
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-[100%] gap-10">
                <div className="flex flex-col items-end w-[22%] max-w-[350px]">
                  <div className="flex flex-col ">
                    <p className="text-[14px] text-[#444444] font-semibold py-2"></p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[70%] ">
                  <div className="flex flex-col gap-2 justify-center w-full">
                    <div className="flex flex-col">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          name="newsletter"
                          className="py-2 border-1 border-gray-300 focus:outline-none"
                          checked={formData.newsletter}
                          onChange={handleChange}
                        />
                        <p className="text-gray-600 font-semibold text-[15px]">
                          Sign up for our newsletter
                        </p>
                      </div>
                      <em className="text-gray-500 font-semibold text-[14px] max-w-[700px]">
                        You may unsubscribe at any moment. For that purpose,
                        please find our contact info in the legal notice.
                      </em>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-[100%] gap-10">
                <div className="flex flex-col items-end w-[22%] max-w-[350px]">
                  <div className="flex flex-col ">
                    <p className="text-[14px] text-[#444444] font-semibold py-2"></p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[70%] ">
                  <div className="flex flex-col gap-2 justify-center w-full">
                    <div className="flex flex-col">
                      <div className="flex gap-2">
                        <input
                          type="checkbox"
                          name="privacy"
                          className="py-2 border-1 border-gray-300 focus:outline-none"
                          checked={formData.privacy}
                          onChange={handleChange}
                        />
                        <p className="text-gray-600 font-semibold text-[15px]">
                          Customer data privacy
                        </p>
                      </div>
                      <em className="text-gray-500 font-semibold text-[14px] max-w-[700px]">
                        The personal data you provide is used to answer queries,
                        process orders or allow access to specific information.
                        You have the right to modify and delete all the personal
                        information found in the "My Account" page.
                      </em>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-[100%] gap-10">
                <div className="flex flex-col items-end w-[22%] max-w-[350px]">
                  <div className="flex flex-col ">
                    <p className="text-[14px] text-[#444444] font-semibold py-2"></p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[70%] ">
                  <div className="flex flex-col gap-2 justify-center w-full">
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        name="terms"
                        className="py-2 border-1 border-gray-300 focus:outline-none"
                        checked={formData.terms}
                        onChange={handleChange}
                      />
                      <p className="text-gray-600 font-semibold text-[15px]">
                        I agree to the terms and conditions and the privacy
                        policy
                      </p>
                    </div>
                  </div>
                </div>
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
    </>
  );
};

export default SignUpSection;
