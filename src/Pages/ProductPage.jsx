import React from "react";
import AccordionMenu from "../Components/AccordionMenu";
import { PiSquaresFourBold } from "react-icons/pi";
import { TbListDetails } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LuChartNoAxesColumn } from "react-icons/lu";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";

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
    id: 11,
    name: "HP Smart Tank All-in-one WiFi Colour Printer",
    brand: "SmartShop",
    price: 225,
    originalPrice: 270,
    image: "/Images/asset 17.jpeg",
    HoverImage: "/Images/product-wifi-hover.jpg",
    rating: 4,
  },
  {
    id: 12,
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
    id: 11,
    name: "HP Smart Tank All-in-one WiFi Colour Printer",
    brand: "SmartShop",
    price: 225,
    originalPrice: 270,
    image: "/Images/asset 17.jpeg",
    HoverImage: "/Images/product-wifi-hover.jpg",
    rating: 4,
  },
  {
    id: 12,
    name: "Latest 4K Full HDR Smart Mi TV 138.8 Cm",
    brand: "Cartify",
    price: 190,
    originalPrice: 270,
    discount: 6,
    image: "/Images/asset 24.jpeg",
    HoverImage: "/Images/product-smartTV-hover.jpg",
    rating: 4,
  },
];

function ProductGrid() {
  return (
    <div className="grid grid-cols-5 w-full mx-auto">
      {products.map((product, index) => (
        <div
          key={index}
          className="group bg-white rounded-lg py-4 px-2 text-left transition-transform hover:-translate-y-1 z-1 cursor-pointer relative overflow-hidden"
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

          <div className="uppercase w-[80%] text-center absolute bottom-10 opacity-0 right-0 left-0 !z-10 m-auto font-semibold bg-[#146cda] text-white group-hover:bottom-[-30px] group-hover:opacity-100 group-hover:duration-1000 py-2 px-4 rounded-lg">
            ADD TO CART
          </div>          
        </div>
      ))}
    </div>
  );
}

const ProductPage = () => {
  return (
    <>
      <div>
        <section className="bg-[#e6edf5]  mx-auto">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-center py-7 px-10">
              <h2 className="text-[1.5rem] text-[#333333]">Products</h2>
              <a href="" className="flex text-[#333333] text-[14px]">
                Home
                <p className="ml-4 text-[#777777]">
                  | <span className="ml-4">Product</span>
                </p>
              </a>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center py-10">
          <div className="container mx-auto max-w-[1450px] flex justify-around h-auto">
            <div className="w-[18%]">
              <div>
                <h2 className="">Home</h2>
                <hr className="my-3 text-gray-300" />
              </div>
              <AccordionMenu />
              <div className="mt-10">
                <img
                  src="/Images/headphones.jpg"
                  alt=""
                  className="rounded-md hover-animate"
                />
              </div>
            </div>
            <div className="w-[73%] flex flex-col">
              <div className="flex flex-col gap-5">
                <img
                  src="/public/Images/ProductBanner.jpg"
                  alt=""
                  className="rounded-sm"
                />
                <p className="text-[1rem] text-gray-500 font-medium font-lexend">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not now how to pursue pleasure rationally
                  encounter consequences that are extremely painful
                </p>
                <hr className="border-t border-gray-400 w-full my-3" />
              </div>
              {/* Products */}
              <div>
                <div className="flex justify-between w-full p-5">
                  <div className="flex flex-col items-start">
                    <div className="flex gap-3">
                      <PiSquaresFourBold size={30} className="text-gray-600" />
                      <TbListDetails size={30} className="text-gray-600" />
                      <p className="text-lg text-gray-600 font-lexend font-semibold">
                        There are {products.length} products.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end w-[250px]">
                    <div className="flex gap-3 items-center w-full">
                      <p className="text-nowrap text-gray-600 font-semibold">
                        Sort by:
                      </p>
                      <select className="border-1 border-gray-300 w-[100%] text-[#444444] py-2 px-4 rounded-sm selectdownarrow">
                        <option value="">Please Choose</option>
                        <option value="">opt-1</option>
                        <option value="">opt-2</option>
                        <option value="">opt-3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <ProductGrid />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductPage;
