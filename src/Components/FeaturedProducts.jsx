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

const products = [
  {
    id: 1,
    name: "OnePlus Nord 2r Wireless Earbuds with Dual Mic",
    brand: "EcoShop",
    price: 32,
    originalPrice: 37,
    discount: 5,
    image: "/Images/asset 16.jpeg",
    HoverImage: "/Images/product-oneplus-hover.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "APPLE New AirPods Max Bluetooth Headset",
    brand: "MegaMart",
    price: 22.08,
    originalPrice: 24,
    discount: 2,
    image: "/Images/asset 10.jpeg",
    HoverImage: "/Images/product-airpods-hover.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "HP Smart Tank All-in-one WiFi Colour Printer",
    brand: "SmartShop",
    price: 225,
    originalPrice: 270,
    image: "/Images/asset 17.jpeg",
    HoverImage: "/Images/product-wifi-hover.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Noise ColorFit Ultra 3 Smart Watch",
    brand: "SmartShop",
    originalPrice: 90,
    price: 78,
    image: "/Images/asset 19.jpeg",
    HoverImage: "/Images/product-smartwatch-hover.jpg",
    rating: 4,
  },
  {
    id: 5,
    name: "LG 8 kg Fully Automatic Top Load Washing Machine",
    brand: "TrendMart",
    price: 230,
    originalPrice: 236,
    discount: 6,
    image: "/Images/asset 18.jpeg",
    HoverImage: "/Images/product-Washingmachine-hover.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "iPhone 13, 128GB, Pink - Unlocked",
    brand: "Cartify",
    price: 194,
    originalPrice: 200,
    discount: 6,
    image: "/Images/asset 20.jpeg",
    HoverImage: "/Images/product-iphone-hover.jpg",
    rating: 4,
  },
  {
    id: 7,
    name: "Latest 4K Full HDR Smart Mi TV 138.8 Cm",
    brand: "Cartify",
    price: 190,
    originalPrice: 270,
    discount: 6,
    image: "/Images/asset 24.jpeg",
    HoverImage: "/Images/product-smartTV-hover.jpg",
    rating: 4,
  },
  {
    id: 8,
    name: `Apple MacBook Air 13.3" With Retina Display`,
    brand: "Cartify",
    price: 772,
    originalPrice: 972,
    discount: 6,
    image: "/Images/asset 25.jpeg",
    HoverImage: "/Images/product-macbook-hover.jpg",
    rating: 5,
  },
  {
    id: 9,
    name: "LG 8 kg Fully Automatic Top Load Washing Machine",
    brand: "TrendMart",
    price: 230,
    originalPrice: 236,
    discount: 6,
    image: "/Images/asset 18.jpeg",
    HoverImage: "/Images/product-Washingmachine-hover.jpg",
    rating: 4,
  },
  {
    id: 10,
    name: "HP Smart Tank All-in-one WiFi Colour Printer",
    brand: "SmartShop",
    price: 225,
    originalPrice: 270,
    image: "/Images/asset 17.jpeg",
    HoverImage: "/Images/product-wifi-hover.jpg",
    rating: 4,
  },
];

function ProductGrid({ currentIndex, productsPerPage }) {
  return (
    <div
      className={`grid grid-cols-${productsPerPage} max-w-[1250px] px-4 mx-auto mb-[50px]`}
    >
      {products
        .slice(currentIndex, currentIndex + productsPerPage)
        .map((product, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg py-4 px-3  text-left transition-transform hover:-translate-y-1 cursor-pointer relative"
          >
            <div className="relative h-40 w-full mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover border border-gray-200 rounded-md transition-opacity duration-300 group-hover:duration-1000 group-hover:opacity-0"
              />
              <img
                src={product.HoverImage}
                alt={product.name + " hover"}
                className="h-full w-full object-cover border border-gray-200 rounded-md absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:duration-1000 group-hover:opacity-100"
              />
            </div>

            <p className="text-[14px] px-2 text-[#848484] font-semibold">
              {product.brand}
            </p>
            <p className="font-semibold px-2 text-[#333333] line-clamp-2">
              {product.name}
            </p>
            <p className="px-2 text-yellow-500 flex gap-1 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < product.rating ? "text-yellow-500" : "text-gray-300"
                  }
                />
              ))}
            </p>

            <p className="px-2 font-bold mt-2 flex gap-3">
              <del className="text-[#777777]">${product.originalPrice}</del>
              <span className="text-[#146cda]">${product.price}</span>
            </p>

            <div className="absolute top-[-100px] right-7 flex flex-col gap-2 text-gray-500 transition-all duration-300 group-hover:top-6 group-hover:duration-1000 group-hover:opacity-100 opacity-0">
              <span className="bg-white border border-gray-300 rounded-full p-1 hover:bg-[#146cda] hover:text-white transition-all duration-200">
                <CiHeart size={20} />
              </span>
              <span className="bg-white border border-gray-300 rounded-full p-1 hover:bg-[#146cda] hover:text-white transition-all duration-200">
                <LuChartNoAxesColumn size={20} />
              </span>
              <span className="bg-white border border-gray-300 rounded-full p-1 hover:bg-[#146cda] hover:text-white transition-all duration-200">
                <HiOutlineArrowsExpand size={20} />
              </span>
            </div>

            <div className="uppercase w-[80%] text-center absolute bottom-10 opacity-0 right-0 left-0 m-auto font-semibold bg-[#146cda] text-white group-hover:bottom-[-30px] group-hover:opacity-100 group-hover:duration-1000 py-2 px-4 rounded-lg">
              options
            </div>
          </div>
        ))}
    </div>
  );
}

const FeaturedProducts = ({ productsPerPage = 5 }) => {
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
      <section className="max-w-[1500px] mx-auto px-3 pt-15">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[1.5rem] text-[#333333] font-semibold active">
              Featured Products
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
          <div className="overflow-hidden w-[33%] mt-[-30px]">
            <div className="relative group">
              <img
                src="/Images/asset 81.jpeg"
                alt=""
                className="rounded-sm transform transition-transform duration-1000 group-hover:scale-120"
              />
              <h3 className="absolute left-60 top-8 text-white max-w-[140px] text-left leading-[40px] font-semibold text-[2rem]">
                Redmi 10 Prime Phone
              </h3>
              <p className="absolute bottom-20 right-12 flex flex-col text-[1rem] max-w-[200px] text-wrap font-semibold text-white">
                From<span className="text-[30px] text-white">$159.00</span>
              </p>
              <div className="absolute bottom-7 right-7 flex items-center gap-2 text-white font-semibold">
                <span className="bg-[#146cda] p-2 rounded-full">
                  <FaArrowRight />
                </span>
                <span className="text-white uppercase underline">Shop Now</span>
              </div>
            </div>
          </div>

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

export default FeaturedProducts;
