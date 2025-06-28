import React, { useState } from "react";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import AccordionMenu from "./AccordionMenu";

const products = [
  {
    name: "Google Pixel Buds Pro - Noise Cancelling Earbuds",
    price: "$54.45",
    imgSrc: "/Images/cat-6.jpg",
  },
  {
    name: "Latest 4K Full HDR Smart Mi TV",
    price: "$229.90",
    imgSrc: "/Images/cat-9.jpg",
  },
  {
    name: "Apple MacBook Air 13.3” With Retina Display",
    price: "$934.89",
    imgSrc: "/Images/cat-5.jpg",
  },
  {
    name: "Google Pixel Buds Pro - Noise Cancelling Earbuds",
    price: "$54.45",
    imgSrc: "/Images/cat-6.jpg",
  },
  {
    name: "REDMI Pad 4 GB RAM 128 GB ROM 10.61 Inch Tablet",
    price: "$121.00",
    imgSrc: "/Images/cat-10.jpg",
  },
  {
    name: "HP Spectre X360 14 2-in-1 Laptop 100% RGB",
    price: "$1,064.80",
    imgSrc: "/Images/cat-11.jpg",
  },
  {
    name: "Google Pixel Buds Pro - Noise Cancelling Earbuds",
    price: "$54.45",
    imgSrc: "/Images/cat-6.jpg",
  },
  {
    name: "Google Pixel Buds Pro - Noise Cancelling Earbuds",
    price: "$54.45",
    imgSrc: "/Images/cat-6.jpg",
  },
  {
    name: "REDMI Pad 4 GB RAM 128 GB ROM 10.61 Inch Tablet",
    price: "$121.00",
    imgSrc: "/Images/cat-10.jpg",
  },
  {
    name: "HP Spectre X360 14 2-in-1 Laptop 100% RGB",
    price: "$1,064.80",
    imgSrc: "/Images/cat-11.jpg",
  },
];

function ProductGrid({ currentIndex, productsPerPage }) {
  return (
    <div className="flex justify-between mt-5 gap-4">
      {products
        .slice(currentIndex, currentIndex + productsPerPage)
        .map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 w-[50%] border-1 border-gray-300 text-center transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <img
              src={product.imgSrc}
              alt={product.name}
              className="h-40 w-full object-cover rounded-md mb-2"
            />
            <p className="font-medium line-clamp-2">{product.name}</p>
            <p className="text-blue-600 font-bold">{product.price}</p>
          </div>
        ))}
    </div>
  );
}

const LoginPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 5;

  const handleNext = () => {
    if (currentIndex + productsPerPage < products.length) {
      setCurrentIndex((prevIndex) => prevIndex + productsPerPage);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex - productsPerPage >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - productsPerPage);
    } else {
      const lastIndex =
        Math.floor((products.length - 1) / productsPerPage) * productsPerPage;
      setCurrentIndex(lastIndex);
    }
  };

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
            {/* <div>
              <ul className="">
                <li className="flex justify-between gap-5 text-[#444444] mt-2">
                  Accessories <span className="text-xl text-[#333333]">+</span>
                </li>
                <li className="flex justify-between gap-5 text-[#444444] mt-2">
                  Phones <span className="text-xl text-[#333333]">+</span>
                </li>
                <li className="flex justify-between gap-5 text-[#444444] mt-2">
                  Smart Devices{" "}
                  <span className="text-xl text-[#333333]">+</span>
                </li>
                <li className="flex justify-between gap-5 text-[#444444] mt-2">
                  Laptop & Computers{" "}
                  <span className="text-xl text-[#333333]">+</span>
                </li>
                <li className="flex justify-between gap-5 text-[#444444] mt-2">
                  Chargers & Cables{" "}
                  <span className="text-xl text-[#333333]">+</span>
                </li>
                <li className="flex justify-between gap-5 text-[#444444] mt-2">
                  Clothing{" "}
                  <span className="text-xl text-[#333333]">+</span>
                </li>
                <li className="flex justify-between gap-5 text-[#444444] mt-2">
                  Home and Kitchen{" "}
                  <span className="text-xl text-[#333333]">+</span>
                </li>
              </ul>
            </div> */}

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
                      className="w-full border-1 border-gray-300 rounded px-4 py-2"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-5 mt-[-5px] max-w-[55%] mx-auto">
                    <label className="block font-medium mb-1 ml-[-32px] text-[#444444] text-right">
                      Password
                    </label>
                    <div className="flex">
                      <input
                        type="password"
                        className="w-full border-1 border-gray-300 rounded-tl-sm rounded-bl-sm px-4 py-2 pr-20"
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
              <div className="flex flex-col items-start w-full py-5">
                <div>
                  <h2 className="">New Products</h2>
                  <hr className="mt-2 border-2 text-[#146cda]" />
                </div>
                <div className="w-full">
                  <div className="flex-grow relative group/carousel">
                    <button
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-1 z-1 border-gray-700 hover:bg-[#146cda] hover:border-0 hover:text-white rounded-full flex items-center justify-center text-gray-700 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
                      onClick={handlePrev}
                    >
                      <MdKeyboardArrowLeft
                        size={40}
                        className="transition-all duration-1000"
                      />
                    </button>

                    <ProductGrid
                      products={products}
                      currentIndex={currentIndex}
                      productsPerPage={productsPerPage}
                    />

                    <button
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 z-1 bg-white border-1 border-gray-700 hover:bg-[#146cda] hover:border-0 hover:text-white rounded-full flex items-center justify-center text-gray-700 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
                      onClick={handleNext}
                    >
                      <MdOutlineKeyboardArrowRight
                        size={40}
                        className="transition-all duration-1000"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
