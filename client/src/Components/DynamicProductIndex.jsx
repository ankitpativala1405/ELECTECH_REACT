import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import ProductGrid from "./ProductGrid";
import { ProductLegth } from "../Utils/products";


const DynamicProductIndex = ({productsPerPage}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);


  const handleNext = () => {
    const newIndex = currentIndex + productsPerPage;
    if (newIndex >= ProductLegth.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex - productsPerPage;
    if (newIndex < 0) {
      const lastFullPageIndex =
        Math.floor((ProductLegth.length - 1) / productsPerPage) * productsPerPage;
      setCurrentIndex(lastFullPageIndex);
    } else {
      setCurrentIndex(newIndex);
    }
  };
  return (
    <>
      <section className="relative">
        <div className="p-6 flex-grow group/carousel">
          <button
            className="absolute left-2 top-40 m-auto w-10 h-10 bg-white border-1 border-gray-700 z-2 hover:bg-[#146cda] hover:border-0 hover:text-white rounded-full flex items-center justify-center text-gray-700 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
            onClick={handlePrev}
          >
            <MdKeyboardArrowLeft
              size={40}
              className="transition-all duration-1000"
            />
          </button>

          <ProductGrid
            products={ProductLegth}
            currentIndex={currentIndex}
            productsPerPage={productsPerPage}
            className="max-w-[1400px]"
          />

          <button
            className="absolute right-2 top-40  w-10 h-10 bg-white border-1 border-gray-700 z-2 hover:bg-[#146cda] hover:border-0 hover:text-white rounded-full flex items-center justify-center text-gray-700 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
            onClick={handleNext}
          >
            <MdOutlineKeyboardArrowRight
              size={40}
              className="transition-all duration-1000"
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default DynamicProductIndex;
