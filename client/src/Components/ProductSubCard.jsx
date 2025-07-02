import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ProductSubCard = () => {
  return (
    <>
      <section>
        <div>
          <div className="max-w-[1500px] mx-auto px-5 py-10 gap-5 flex justify-around mt-[-90px]">
            <div className="overflow-hidden">
              <div className="relative group">
                <img
                  src="/Images/asset 83.jpeg"
                  alt=""
                  className="rounded-sm transform transition-transform duration-1000 group-hover:scale-120"
                />
                <h3 className="absolute right-5 top-8 text-white max-w-[300px] font-semibold text-[29px]">
                  Zebronics Zeb Max  <span>Wireless Controller</span>
                </h3>
                <p className="absolute bottom-20 right-39 flex items-center text-[1.25rem] gap-2 font-semibold text-white">
                  From <span className="text-[2.125rem]">$88.00</span>
                </p>
                <div className="absolute bottom-7 right-48 flex items-center gap-2 text-white font-semibold">
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
                  src="/Images/asset 84.jpeg"
                  alt=""
                  className="rounded-sm transform transition-transform duration-1000 group-hover:scale-120"
                />
                <h3 className="absolute right-2 top-8 text-white max-w-[300px] font-semibold text-[29px]">
                  Apple iPad Pro M4  <span>With Best Glass</span>
                </h3>
                <p className="absolute bottom-20 right-31 flex items-center text-[1.25rem] gap-2 font-semibold text-white">
                  From <span className="text-[2.125rem]">$549.00</span>
                </p>
                <div className="absolute bottom-7 right-44 flex items-center gap-2 text-white font-semibold">
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

export default ProductSubCard;
