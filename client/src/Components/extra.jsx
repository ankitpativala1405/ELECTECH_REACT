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


import React, { useState } from "react";

export default function ProductModal({ product, closeModal }) {
  const [selectedImage, setSelectedImage] = useState(product.image);

  const thumbnails = [
    product.image,
    product.image1,
    product.image2,
    product.image3,
    product.image4,
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-auto p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative p-6">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        {/* Left Side: Images */}
        <div>
          <div className="mb-4">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full rounded-lg"
            />
          </div>

          <div className="flex gap-2">
            {thumbnails.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(thumb)}
                className={`w-24 h-20 border rounded overflow-hidden ${
                  selectedImage === thumb ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600">
            The iPad Pro is a magical piece of glass. It has pro cameras that
            can transform reality. You can use it with touch, pencil, keyboard
            and now trackpad. With the A12Z Bionic chip, iPad Pro outpaces most
            PC laptops today. Liquid Retina display features ProMotion, True
            Tone, and industry‑leading colour accuracy.
          </p>

          <div className="text-sm">
            <p>
              <span className="font-semibold">Brand:</span>{" "}
              {product.brand}
            </p>
            <p>
              <span className="font-semibold">Condition:</span> Used
            </p>
            <p>
              <span className="font-semibold">Reference:</span>{" "}
              KOD-SDN-353
            </p>
            <p>
              <span className="font-semibold">Available In Stock:</span>{" "}
              169 Items
            </p>
          </div>

          <div className="text-3xl font-bold text-blue-700">
            ${product.price}
          </div>

          <p className="text-gray-500">
            Tax included. Est. Delivery Time 2-3 Days
          </p>

          <div className="flex items-center gap-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-20 border border-gray-300 rounded px-2 py-1"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Add to Cart
            </button>
            <button className="text-gray-600 hover:text-red-500">
              ♥
            </button>
            <button className="text-gray-600 hover:text-blue-500">
              📊
            </button>
          </div>

          <div className="border-t pt-4 mt-4">
            <p className="font-semibold mb-2">Guarantee Safe Checkout</p>
            <img
              src="/Images/trust_badge.png"
              alt="Guarantee Safe Checkout"
              className="w-52"
            />
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-1">Share</p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-600">Facebook</a>
              <a href="#" className="text-blue-400">Twitter</a>
              <a href="#" className="text-red-600">Pinterest</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

