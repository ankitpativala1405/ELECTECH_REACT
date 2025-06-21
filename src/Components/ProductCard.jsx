import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ProductCard = () => {
  return (
    <>
      <section>
        <div>
          <div className="max-w-[1500px] mx-auto px-5 py-10 gap-5 flex justify-between">
            <div className="overflow-hidden">
              <div className="relative group">
                <img
                  src="/Images/asset 41.jpeg"
                  alt=""
                  className="rounded-sm transform transition-transform duration-1000 group-hover:scale-120"
                />
                <h3 className="absolute right-5 top-5 text-white max-w-[215px] font-semibold text-[29px]">
                  Latest Wireless <span>Headphones</span>
                </h3>
                <p className="absolute bottom-20 right-25 flex items-center text-[1rem] gap-2 font-semibold text-white">
                  From <span className="text-[28px]">$49.00</span>
                </p>
                <div className="absolute bottom-9 right-27 flex items-center gap-2 text-white font-semibold">
                  <span className="bg-[#146cda] p-3 rounded-full">
                    <FaArrowRight />
                  </span>
                  <span>Shop Now</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="relative group">
                <img
                  src="/Images/asset 42.jpeg"
                  alt=""
                  className="rounded-sm transform transition-transform duration-1000 group-hover:scale-120"
                />
                <h3 className="absolute right-5 top-5 text-white max-w-[215px] font-semibold text-[29px]">
                  Boat Wave Call <span>Smart Watch</span>
                </h3>
                <p className="absolute bottom-20 right-25 flex items-center text-[1rem] gap-2 font-semibold text-white">
                  From <span className="text-[28px]">$14.27</span>
                </p>
                <div className="absolute bottom-9 right-27 flex items-center gap-2 text-white font-semibold">
                  <span className="bg-[#146cda] p-3 rounded-full">
                    <FaArrowRight />
                  </span>
                  <span>Shop Now</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="relative group">
                <img
                  src="/Images/asset 43.jpeg"
                  alt=""
                  className="rounded-sm transform transition-transform duration-1000 group-hover:scale-120"
                />
                <h3 className="absolute right-5 top-5 text-white max-w-[215px] font-semibold text-[29px]">
                  Motorola G64 <span>5G 12GB</span>
                </h3>
                <p className="absolute bottom-20 right-21 flex items-center text-[1rem] gap-2 font-semibold text-white">
                  From <span className="text-[28px]">$178.00</span>
                </p>
                <div className="absolute bottom-9 right-27 flex items-center gap-2 text-white font-semibold">
                  <span className="bg-[#146cda] p-3 rounded-full">
                    <FaArrowRight />
                  </span>
                  <span>Shop Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
