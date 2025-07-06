import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LuChartNoAxesColumn } from "react-icons/lu";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import ProductGrid from "./ProductGrid";
import products from "../Utils/products";

const Latestproduct = ({ productsPerPage = 5 }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    const newIndex = currentIndex + productsPerPage;
    if (newIndex >= products.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex - productsPerPage;
    if (newIndex < 0) {
      const lastFullPageIndex =
        Math.floor((products.length - 1) / productsPerPage) * productsPerPage;
      setCurrentIndex(lastFullPageIndex);
    } else {
      setCurrentIndex(newIndex);
    }
  };
  return (
    <>
      <section className="max-w-[1500px] mx-auto px-3 pt-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[1.5rem] text-[#333333] font-semibold active">
              Latest Products
            </h2>
          </div>
          <div className="text-[15px] font-semibold text-[#333333] flex gap-5 uppercase">
            <p className="active-right">Accessories</p>
            <p className="">Smart Devices</p>
            <p className="">Laptop & Computers</p>
          </div>
        </div>
        <hr className="text-gray-300 mb-[-20px]" />
      </section>
      <section>
        <div className="max-w-[1500px] mx-auto px-7 pt-8 flex justify-between items-center">
          <div className="py-6 flex-grow max-w-[1100px] relative group/carousel">
            <button
              className="absolute left-3 top-0 bottom-0 m-auto w-10 h-10 bg-white border-1 border-gray-700 z-2 hover:bg-[#146cda] hover:border-0 hover:text-white rounded-full flex items-center justify-center text-gray-700 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
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
              className="max-w-[1400px]"
            />

            <button
              className="absolute right-3 top-0 bottom-0 m-auto w-10 h-10 bg-white border-1 border-gray-700 z-2 hover:bg-[#146cda] hover:border-0 hover:text-white rounded-full flex items-center justify-center text-gray-700 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
              onClick={handleNext}
            >
              <MdOutlineKeyboardArrowRight
                size={40}
                className="transition-all duration-1000"
              />
            </button>
          </div>
          <div className="overflow-hidden w-[33%] mt-[-30px]">
            <div className="relative group">
              <img
                src="/Images/asset 54.jpeg"
                alt=""
                className="rounded-sm transform transition-transform duration-1000 group-hover:scale-120"
              />
              <h3 className="absolute left-58 top-5 text-[#333333] max-w-[215px] text-left leading-[40px] font-semibold text-[2rem]">
                Game <span>Console </span>
                <span>Studio</span>
              </h3>
              <p className="absolute bottom-22 right-18 flex flex-col text-[1rem] max-w-[200px] text-wrap font-semibold text-[#333333]">
                From<span className="text-[30px] text-[#146cda]">$49.00</span>
              </p>
              <div className="absolute bottom-9 right-7 flex items-center gap-2 text-white font-semibold">
                <span className="bg-[#146cda] p-3 rounded-full">
                  <FaArrowRight />
                </span>
                <span className="text-[#333333] uppercase underline">Shop Now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .active {
          border-bottom: 2px solid #146cda;
          padding-bottom: 4px;
          display: inline;
        }

        .active-right {
          border-bottom: 2px solid #146cda;
          color: #146cda;
          padding-bottom: 4px;
          margin-bottom: -7px;
          display: inline;
        }
      `}</style>
    </>
  );
};

export default Latestproduct;
