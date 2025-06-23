import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { LuChartNoAxesColumn } from "react-icons/lu";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const products = [
  {
    id: 1,
    name: "New Featured MacBook Pro With Apple M1 Pro Chip",
    originalPrice: 900.0,
    discountedPrice: 810.0,
    discount: "-12%",
    rating: 4,
    available: 122,
    image: "/Images/asset 3.jpeg",
    image2: "/Images/asset 67.jpeg",
    image3: "/Images/asset 68.jpeg",
    image4: "/Images/asset 69.jpeg",
    image5: "/Images/asset 70.jpeg",
    buttonText: "SELECT OPTION",
    countdown: { days: 773, hrs: 0, min: 17, sec: 26 },
  },
  {
    id: 2,
    name: `Apple MacBook Air 13.3" With Retina Display`,
    originalPrice: 978.0,
    discountedPrice: 872.0,
    discount: "-$6.00",
    rating: 5,
    available: 124,
    image: "/Images/asset 12.jpeg",
    image2: "/Images/asset 67.jpeg",
    image3: "/Images/asset 68.jpeg",
    image4: "/Images/asset 69.jpeg",
    image5: "/Images/asset 70.jpeg",
    buttonText: "SELECT OPTION",
    countdown: { days: 773, hrs: 0, min: 0, sec: 38 },
  },
  {
    id: 3,
    name: "iPhone 13, 128GB, Pink - Unlocked Premium",
    originalPrice: 200.0,
    discountedPrice: 194.0,
    discount: "-$6.00",
    rating: 5,
    available: 124,
    image: "/Images/asset 11.jpeg",
    image2: "/Images/asset 67.jpeg",
    image3: "/Images/asset 68.jpeg",
    image4: "/Images/asset 69.jpeg",
    image5: "/Images/asset 70.jpeg",
    buttonText: "SELECT OPTION",
    countdown: { days: 773, hrs: 0, min: 0, sec: 38 },
  },
  
];

const PaginationButton = ({ totalSlides, activeIndex, setActiveIndex }) => {
  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 group-hover:opacity-100 opacity-0 group-hover:bottom-14 transition-all duration-300">
      <div className="flex justify-center items-center gap-2 py-2">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-transform duration-200 ${
              activeIndex === index ? "bg-blue-600 scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

const DealDay = ({ visibleProducts }) => {
  return (
    <div className="flex justify-between gap-6 px-4">
      {visibleProducts.map((product) => {
        const imageArray = [
          product.image,
          product.image2,
          product.image3,
          product.image4,
          product.image5,
        ];
        const [activeIndex, setActiveIndex] = useState(0);

        return (
          <div
            key={product.id}
            className="relative  bg-white rounded-sm border-2 border-blue-500 shadow-md w-full max-w-md overflow-hidden group"
          >
            <div className="flex">
              <div className="relative w-[45%] py-4">
                <span className="absolute top-2 left-2 text-xs text-white bg-red-600 px-2 py-0.5 rounded">
                  {product.discount}
                </span>

                <img
                  src={imageArray[activeIndex]}
                  alt={product.name}
                  className="object-contain h-60 mx-auto my-4 transition duration-300"
                />

                <div className="absolute top-0 right-8 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all group-hover:top-16 duration-300">
                  {[CiHeart, LuChartNoAxesColumn, HiOutlineArrowsExpand].map(
                    (Icon, idx) => (
                      <span
                        key={idx}
                        className="bg-white border border-gray-300 rounded-full p-1 hover:bg-blue-600 hover:text-white"
                      >
                        <Icon size={18} />
                      </span>
                    )
                  )}
                </div>

                <PaginationButton
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                  totalSlides={imageArray.length}
                />
              </div>

              <div className="w-[55%] py-5 px-3 flex flex-col justify-between">
                <h3 className="text-[14px] font-semibold text-[#333333] line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex">
                  {[...Array(product.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 mt-[-10px]">
                      ★
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 text-sm mt-[-10px]">
                  <span className="line-through text-gray-400">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-blue-600 font-semibold">
                    ${product.discountedPrice.toFixed(2)}
                  </span>
                </div>

                <p className="text-xs text-gray-600">
                  <span className="text-green-600 font-medium">
                    Available:
                  </span>{" "}
                  <span className="font-bold text-gray-800">
                    {product.available}
                  </span>{" "}
                  items
                </p>

                <div className="grid grid-cols-4 gap-1 text-center text-[12px] font-semibold">
                  {["Days", "Hrs", "Min", "Sec"].map((label, i) => (
                    <div
                      key={i}
                      className="bg-red-100 text-red-600 py-1 rounded"
                    >
                      {
                        [
                          product.countdown.days,
                          product.countdown.hrs.toString().padStart(2, "0"),
                          product.countdown.min.toString().padStart(2, "0"),
                          product.countdown.sec.toString().padStart(2, "0"),
                        ][i]
                      }
                      <br />
                      {label}
                    </div>
                  ))}
                </div>

                <button className="mt-3 py-2 w-full bg-blue-600 text-white rounded hover:bg-blue-700 text-sm transition">
                  {product.buttonText}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const DealOfTheDay = ({ productsPerPage = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + productsPerPage
  );

  return (
    <section className="bg-gray-200">
      <div className="py-10 max-w-[1450px] mx-auto relative extra-group">
        <h2 className="text-2xl font-bold mb-6 px-4 text-gray-800">
          Deal Of The Day
        </h2>


        <button
          className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 z-10 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center text-gray-700 opacity-0 extra-group-1 group-hover:opacity-100 transition-opacity duration-200"
          onClick={handlePrev}
        >
          <MdKeyboardArrowLeft size={24} />
        </button>

        <DealDay visibleProducts={visibleProducts} />


        <button
          className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 z-10 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center text-gray-700 opacity-0 extra-group-1 group-hover:opacity-100 transition-opacity duration-200"
          onClick={handleNext}
        >
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default DealOfTheDay;
