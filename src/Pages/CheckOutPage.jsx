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

// const GuestPage = () => {
//   return (
//     <div className="absolute top-35 left-10">
//       <form className="py-5 max-w-[800px] border-1 border-gray-500">
//         <div className="border-1 border-gray-500 rounded-sm p-2 flex">
//           <div>
//             <p>Social title</p>
//           </div>
//           <div className="flex">
//             <div>
//               <label htmlFor="">Mr.</label>
//               <input type="radio" value={"Mr."} />
//             </div>
//             <div>
//               <label htmlFor="">Mrs.</label>
//               <input type="radio" value={"Mrs."} />
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// const GuestPage = () => {
//   const [formData, setFormData] = useState({
//     socialTitle: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     birthdate: "",
//     receiveOffers: false,
//     signUpNewsletter: false,
//     customerDataPrivacy: false,
//     agreeTerms: false,
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   // Regex to validate letters and dot(.) character followed by space allowed for First and Last name fields
//   const nameRegex = /^[A-Za-z.]+(\s[A-Za-z.]+)*$/;

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // To validate fields
//   const validateName = (name) => {
//     if (!name) return true; // Allow empty if no requirement to be mandatory here
//     return nameRegex.test(name);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation example
//     if (
//       !formData.socialTitle ||
//       !formData.firstName ||
//       !validateName(formData.firstName) ||
//       !formData.lastName ||
//       !validateName(formData.lastName) ||
//       !formData.email ||
//       !formData.agreeTerms
//     ) {
//       alert("Please fill out all required fields correctly and accept the terms.");
//       return;
//     }

//     // Continue submission process...
//     alert("Form submitted!");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-lg mx-auto p-6 border border-gray-300 rounded-md font-sans"
//       noValidate
//     >
//       <h2 className="text-xl font-semibold mb-6">1 Personal Information</h2>
//       <div className="mb-5 text-sm text-blue-600">
//         <a href="#" className="font-semibold hover:underline">
//           Order As A Guest
//         </a>{" "}
//         |{" "}
//         <a href="#" className="font-semibold hover:underline">
//           Sign In
//         </a>
//       </div>

//       <fieldset className="mb-5">
//         <legend className="mb-2 font-medium">Social title</legend>
//         <label className="inline-flex items-center mr-6">
//           <input
//             type="radio"
//             name="socialTitle"
//             value="Mr."
//             checked={formData.socialTitle === "Mr."}
//             onChange={handleChange}
//             required
//             className="mr-2"
//           />
//           Mr.
//         </label>
//         <label className="inline-flex items-center">
//           <input
//             type="radio"
//             name="socialTitle"
//             value="Mrs."
//             checked={formData.socialTitle === "Mrs."}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           Mrs.
//         </label>
//       </fieldset>

//       <div className="mb-5">
//         <label htmlFor="firstName" className="block font-medium mb-1">
//           First name
//         </label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           placeholder="Enter your first name"
//           value={formData.firstName}
//           onChange={handleChange}
//           pattern="[A-Za-z.]+(\s[A-Za-z.]+)*"
//           title="Only letters and the dot (.) character, followed by a space, are allowed."
//           required
//           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
//         />
//         <p className="text-xs text-gray-500 mt-1">
//           Only letters and the dot (.) character, followed by a space, are allowed.
//         </p>
//       </div>

//       <div className="mb-5">
//         <label htmlFor="lastName" className="block font-medium mb-1">
//           Last name
//         </label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           placeholder="Enter your last name"
//           value={formData.lastName}
//           onChange={handleChange}
//           pattern="[A-Za-z.]+(\s[A-Za-z.]+)*"
//           title="Only letters and the dot (.) character, followed by a space, are allowed."
//           required
//           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
//         />
//         <p className="text-xs text-gray-500 mt-1">
//           Only letters and the dot (.) character, followed by a space, are allowed.
//         </p>
//       </div>

//       <div className="mb-5">
//         <label htmlFor="email" className="block font-medium mb-1">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           placeholder="you@example.com"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
//         />
//       </div>

//       <div className="mb-5">
//         <label htmlFor="password" className="block font-medium mb-1">
//           Password <span className="italic text-gray-500">(optional)</span>
//         </label>
//         <div className="flex">
//           <input
//             type={showPassword ? "text" : "password"}
//             id="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//             className="flex-grow border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />
//           <button
//             type="button"
//             className="bg-blue-600 text-white px-3 rounded-r-md hover:bg-blue-700 transition"
//             onClick={() => setShowPassword((s) => !s)}
//             aria-label={showPassword ? "Hide password" : "Show password"}
//           >
//             {showPassword ? "HIDE" : "SHOW"}
//           </button>
//         </div>
//       </div>

//       <div className="mb-5">
//         <label htmlFor="birthdate" className="block font-medium mb-1">
//           Birthdate <span className="italic text-gray-500">(optional)</span>
//         </label>
//         <input
//           type="date"
//           id="birthdate"
//           name="birthdate"
//           placeholder="MM/DD/YYYY"
//           value={formData.birthdate}
//           onChange={handleChange}
//           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
//           max={new Date().toISOString().split("T")[0]}
//         />
//         <p className="text-xs text-gray-500 mt-1">(E.g.: 05/31/1970)</p>
//       </div>

//       <div className="mb-5 space-y-3 text-sm">
//         <label className="block">
//           <input
//             type="checkbox"
//             name="receiveOffers"
//             checked={formData.receiveOffers}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           Receive offers from our partners
//         </label>

//         <label className="block">
//           <input
//             type="checkbox"
//             name="signUpNewsletter"
//             checked={formData.signUpNewsletter}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           Sign up for our newsletter
//         </label>
//         <p className="text-xs text-gray-500 mb-3">
//           You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.
//         </p>

//         <label className="block">
//           <input
//             type="checkbox"
//             name="customerDataPrivacy"
//             checked={formData.customerDataPrivacy}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           Customer data privacy
//         </label>
//         <p className="text-xs text-gray-500 mb-3">
//           The personal data you provide is used to answer queries, process orders or allow access to specific information.
//           You have the right to modify and delete all the personal information found in the "My Account" page.
//         </p>

//         <label className="block">
//           <input
//             type="checkbox"
//             name="agreeTerms"
//             checked={formData.agreeTerms}
//             onChange={handleChange}
//             required
//             className="mr-2"
//           />
//           I agree to the terms and conditions and the privacy policy
//         </label>
//       </div>

//       <button
//         type="submit"
//         className="bg-blue-700 text-white py-2 px-5 rounded hover:bg-blue-800 transition"
//       >
//         CONTINUE
//       </button>
//     </form>
//   );
// };

function GuestPage() {
  return (
    <div className="mx-auto p-6 bg-white rounded shadow absolute top-30 left-16">
      <form className="space-y-5 mt-5">
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

        <div className="flex gap-20 items-center">
          <label className="block mb-1 font-medium">First name</label>
          <div className="max-w-[375px]">
            <input
              type="text"
              className="w-full border border-gray-200 px-4 py-2 rounded"
            />
            <p className="text-[15px] text-gray-500 mt-1">
              Only letters and the dot (.) character, followed by a space, are
              allowed.
            </p>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Last name</label>
          <input
            type="text"
            className="w-full border border-gray-400 px-4 py-2 rounded"
          />
          <p className="text-xs text-gray-500 mt-1">
            Only letters and the dot (.) character, followed by a space, are
            allowed.
          </p>
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border border-gray-400 px-4 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Create an account <span className="text-gray-500">(optional)</span>
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="password"
              className="w-full border border-gray-400 px-4 py-2 rounded"
            />
            <button type="button" className="text-blue-600 text-xs font-medium">
              SHOW
            </button>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Birthdate <span className="text-gray-500">(optional)</span>
          </label>
          <input
            type="text"
            placeholder="MM/DD/YYYY"
            className="w-full border border-gray-400 px-4 py-2 rounded"
          />
          <p className="text-xs text-gray-500 mt-1">(E.g.: 05/11/1970)</p>
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
              Customer data privacy
              <p className="text-xs text-gray-500">
                The personal data you provide is used to answer queries, process
                orders or allow access to specific information. You have the
                right to modify and delete all the personal information found in
                the "My Account" page.
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
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-medium"
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
                <a href="" className="text-[#444444] font-semibold">
                  Order as a guest
                </a>
              </span>
              <span className="text-gray-400 font-semibold">|</span>
              <span>
                <a href="" className="text-[#444444] font-semibold active">
                  Sign in
                </a>
              </span>
            </p>
            <GuestPage />
            {/* <SigninUI /> */}
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
