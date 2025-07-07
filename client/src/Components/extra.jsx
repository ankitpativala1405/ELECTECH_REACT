const Address = () => {
  return (
    <>
      <div
        className={`border-1 flex flex-col justify-center border-gray-300 rounded-md p-5 mx-auto`}
      >
        <p className="text-[#444444] text-[18px] font-semibold gap-4 flex">
          <span>2</span> <span>Addresses</span>
        </p>
        <form action="" className="flex flex-col">
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
              <select name="" id="" className="border-1 border-gray-300 w-[68%] text-[#444444] py-2 px-4 rounded-sm selectdownarrow">
                <option value="" className="text-[#444444]">Please Choose</option>
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
              <select name="" id="" className="border-1 border-gray-300 w-[68%] text-[#444444] py-2 px-4 rounded-sm selectdownarrow">
                <option value="" className="text-[#444444]">Please Choose</option>
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
              <label className="text-[#444444] text-[15px] font-semibold">Use this address for invoice too</label>
            </div>
          </div>
          <div className="flex justify-end px-20 gap-2 my-3">
            <button type="submit" className="w-fit bg-blue-600 text-white py-2 rounded px-4 hover:bg-blue-700 font-medium">CONTINUE</button>
          </div>
        </form>
      </div>
    </>
  );
};



                  <ul className="text-sm font-medium">
                    <Link to="/login">
                      <li className="px-4 py-2 rounded hover:bg-[#146cda] cursor-pointer hover:text-white hover:py-3 transition-all duration-500">
                        Login
                      </li>
                    </Link>
                    <Link to="/signup">
                      <li className="px-4 py-2 rounded hover:bg-[#146cda] cursor-pointer hover:text-white hover:py-3 transition-all duration-500">
                        Register
                      </li>
                    </Link>
                  </ul>



import React from "react";
import { FaHeart, FaFacebook, FaTwitter } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

const ProductModal = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Gallery */}
      <div>
        <img
          src="https://via.placeholder.com/400x300"
          alt="Printer"
          className="w-full rounded-lg border"
        />
        <div className="flex gap-4 mt-4">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="w-20 h-16 bg-gray-200 rounded-md flex-shrink-0"
            ></div>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">
          HP Smart Tank All-In-One WiFi Colour Printer
        </h2>
        <p className="text-gray-600">
          You can enjoy unlimited entertainment at the comfort of your home with
          this smart TV. The PurColour technology of this TV delivers vibrant
          and lifelike picture quality...
        </p>

        <div className="text-sm">
          <p>
            <span className="font-semibold">Brand:</span> SmartShop
          </p>
          <p>
            <span className="font-semibold">Condition:</span> New
          </p>
          <p>
            <span className="font-semibold">Reference:</span> NMC-GJK-634
          </p>
          <p>
            <span className="font-semibold">Available In Stock:</span>{" "}
            <span className="text-green-600">218 Items</span>
          </p>
        </div>

        {/* Color Options */}
        <div className="flex items-center gap-2">
          <span className="font-semibold">Color:</span>
          {["bg-gray-500", "bg-red-500", "bg-blue-500", "bg-yellow-500"].map(
            (color, idx) => (
              <div
                key={idx}
                className={`${color} w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer`}
              ></div>
            )
          )}
        </div>

        {/* Price */}
        <div className="text-2xl font-bold text-blue-700">$272.25</div>
        <p className="text-gray-500 text-sm">
          Tax included Est. Delivery Time 2-3 Days
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center gap-2">
            <IoMdCart /> Add to Cart
          </button>
          <button className="text-gray-600 hover:text-red-500">
            <FaHeart size={24} />
          </button>
        </div>

        <p className="text-green-600 font-semibold">In Stock</p>

        {/* Social Links */}
        <div className="flex gap-4 mt-4">
          <FaFacebook className="text-blue-600 cursor-pointer" size={24} />
          <FaTwitter className="text-blue-400 cursor-pointer" size={24} />
        </div>

        {/* Payment Options */}
        <div className="mt-8 border-t pt-4">
          <p className="font-semibold mb-2">Guarantee Safe Checkout</p>
          <div className="flex gap-4">
            {[
              "MasterCard",
              "Discover",
              "Amex",
              "PayPal",
              "Visa",
              "Bank",
            ].map((method, i) => (
              <div
                key={i}
                className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs"
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
