import React, { useState } from "react";
import { VscListFlat } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
// import Image from "next/image";
// import "./style.css";

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
    <div className="grid grid-cols-5 gap-4 px-4">
      {products
        .slice(currentIndex, currentIndex + productsPerPage)
        .map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform hover:-translate-y-1 cursor-pointer"
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

const NavbarHeader = () => {
  const categories = [
    { label: "Gadgets", src: "/Images/cat-1.jpg" },
    { label: "Smart Watch", src: "/Images/cat-2.jpg" },
    { label: "Headphone", src: "/Images/cat-3.jpg" },
    { label: "Smart Phones", src: "/Images/cat-4.jpg" },
    { label: "MacBook", src: "/Images/cat-5.jpg" },
    { label: "Earbuds Bose", src: "/Images/cat-6.jpg" },
    { label: "Smart Speakers", src: "/Images/cat-7.jpg" },
    { label: "Accessories", src: "/Images/cat-8.jpg" },
  ];

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
    <section className="bg-[#146cda] fixed-navbar">
      <div className="container mx-auto p-3">
        <nav className="flex justify-center">
          <div className="flex items-center gap-[45px] py-1">
            <VscListFlat size={25} className="text-white font-black" />
            <div className="relative group">
              <p className="bg-[#146cda] text-white flex items-center gap-[5px] font-bold uppercase cursor-pointer">
                Browse All Category <IoIosArrowDown />
              </p>

              <div className="absolute left-[-20px] top-full mt-4 w-65 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-1000 z-50">
                <ul className="text-black py-2 text-sm font-medium space-y-1">
                  <li className="ligroup px-4 py-1 rounded cursor-pointer transition-all duration-1000 hover:bg-[#146cda] hover:text-white  hover:py-3">
                    <div className="relative w-full">
                      <p className="text-sm font-medium ">Android TV</p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px] hover-target"></div>
                    </div>
                  </li>
                  <li className="ligroup px-4 py-1 rounded cursor-pointer transition-all duration-1000 hover:bg-[#146cda] hover:text-white  hover:py-3">
                    <div className="relative w-full">
                      <p className="text-sm font-medium ">Apple Ipad</p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px] hover-target"></div>
                    </div>
                  </li>
                  <li className="ligroup px-4 py-1 rounded cursor-pointer transition-all duration-1000 hover:bg-[#146cda] hover:text-white  hover:py-3">
                    <div className="relative w-full">
                      <p className="text-sm font-medium ">Accessories</p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px] hover-target"></div>
                    </div>
                  </li>
                  <li className="ligroup px-4 py-1 rounded cursor-pointer transition-all duration-1000 hover:bg-[#146cda] hover:text-white  hover:py-3">
                    <div className="relative w-full">
                      <p className="text-sm font-medium ">Game Controller</p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px] hover-target"></div>
                    </div>
                  </li>
                  <li className="ligroup px-4 py-1 rounded cursor-pointer transition-all duration-1000 hover:bg-[#146cda] hover:text-white  hover:py-3">
                    <div className="relative w-full">
                      <p className="text-sm font-medium ">Headphone</p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px] hover-target"></div>
                    </div>
                  </li>
                  <li className="ligroup px-4 py-1 rounded cursor-pointer transition-all duration-1000 hover:bg-[#146cda] hover:text-white  hover:py-3">
                    <div className="relative w-full">
                      <p className="text-sm font-medium ">Smart Watch</p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px] hover-target"></div>
                    </div>
                  </li>
                  <li className="ligroup px-4 py-1 rounded cursor-pointer transition-all duration-1000 hover:bg-[#146cda] hover:text-white  hover:py-3">
                    <div className="relative w-full">
                      <p className="text-sm font-medium ">
                        Convertible Laptops
                      </p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px] hover-target"></div>
                    </div>
                  </li>
                  <li className="ligroup px-4 py-1 rounded cursor-pointer transition-all duration-1000 hover:bg-[#146cda] hover:text-white  hover:py-3">
                    <div className="relative w-full">
                      <p className="text-sm font-medium ">MacBook</p>
                      <div className="h-[1px] bg-gray-300 w-full mt-[5px] hover-target"></div>
                    </div>
                  </li>
                  <li className="ligroup px-4 py-1 rounded cursor-pointer transition-all duration-1000 hover:bg-[#146cda] hover:text-white  hover:py-3">
                    <div className="relative w-full">
                      <p className="text-sm font-medium ">Adapter Plug</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>


            <Link to='/product'>
              <div className="relative group">
                <p className="flex items-center gap-[5px] text-white font-bold uppercase cursor-pointer">
                  Phones
                  <IoIosArrowDown />
                </p>

                <div className="absolute left-[-370px] top-full mt-4 w-[1370px] bg-[#ededed] shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-2000 z-50">
                  <div className="flex justify-around gap-[20px]">
                    <div className="">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="font-bold mb-4 uppercase">
                          Smart Devices
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="#">Wireless Printer</a>
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="#">Game Controller</a>
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="#">Headphone</a>
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="#">Smart Phones</a>
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="#">Smart Watch</a>
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="#">Speakers</a>
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="#">Personal Computer</a>
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="#">MacBook</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="font-bold mb-4 uppercase">
                          Laptop & Computers
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="">Apple Ipad</a>
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="">Smart Watch</a>
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="">Basic Phones</a>
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="">Accessories</a>
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="">Gadgets</a>
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="">Feature Phones</a>
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="">Convertible Laptops</a>
                        </li>
                        <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                          <a href="">Ultraportable Laptops</a>
                        </li>
                      </ul>
                    </div>

                    <div className="text-center">
                      <h4 className="font-bold mb-2">Featured Products</h4>
                      <div className="space-y-2 flex flex-col text-sm text-gray-700 gap-4">
                        <div className="flex justify-between gap-4">
                          <div className="flex items-center text-ellipsis bg-white rounded">
                            <img
                              src="/Images/asset-3.jpeg"
                              alt=""
                              className="w-12 h-12 object-cover"
                            />
                            <div className="py-4 max-w-[120px]  overflow-hidden">
                              <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                                MacBook Pro 2023
                              </p>
                              <p className="text-blue-600 font-bold">$810.00</p>
                            </div>
                          </div>
                          <div className="flex items-center text-ellipsis bg-white rounded">
                            <img
                              src="/Images/asset-3.jpeg"
                              alt=""
                              className="w-12 h-12 object-cover"
                            />
                            <div className="py-4 max-w-[120px]  overflow-hidden">
                              <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                                MacBook Pro 2023
                              </p>
                              <p className="text-blue-600 font-bold">$810.00</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between gap-4">
                          <div className="flex items-center text-ellipsis bg-white rounded">
                            <img
                              src="/Images/asset-3.jpeg"
                              alt=""
                              className="w-12 h-12 object-cover"
                            />
                            <div className="py-4 max-w-[120px]  overflow-hidden">
                              <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                                MacBook Pro 2023
                              </p>
                              <p className="text-blue-600 font-bold">$810.00</p>
                            </div>
                          </div>
                          <div className="flex items-center text-ellipsis bg-white rounded">
                            <img
                              src="/Images/asset-3.jpeg"
                              alt=""
                              className="w-12 h-12 object-cover"
                            />
                            <div className="py-4 max-w-[120px]  overflow-hidden">
                              <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                                MacBook Pro 2023
                              </p>
                              <p className="text-blue-600 font-bold">$810.00</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between gap-4">
                          <div className="flex items-center text-ellipsis bg-white rounded">
                            <img
                              src="/Images/asset-3.jpeg"
                              alt=""
                              className="w-12 h-12 object-cover"
                            />
                            <div className="py-4 max-w-[120px]  overflow-hidden">
                              <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                                MacBook Pro 2023
                              </p>
                              <p className="text-blue-600 font-bold">$810.00</p>
                            </div>
                          </div>
                          <div className="flex items-center text-ellipsis bg-white rounded">
                            <img
                              src="/Images/asset-3.jpeg"
                              alt=""
                              className="w-12 h-12 object-cover"
                            />
                            <div className="py-4 max-w-[120px]  overflow-hidden">
                              <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                                MacBook Pro 2023
                              </p>
                              <p className="text-blue-600 font-bold">$810.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <img
                        src="/Images/asset-7.jpeg"
                        alt="banner"
                        className="w-full h-[260px] object-cover rounded-md"
                      />
                      <div className="absolute top-5 left-4 text-black">
                        <p className="font-semibold text-md">Weekend Discount</p>
                        <p className="font-bold text-xl">Latest Phones</p>
                        <p className="text-[#146cda] font-bold text-md mt-1">
                          {" "}
                          From $199.00{" "}
                        </p>
                        <button className="mt-2 text-md underline">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <div className="relative group">
              <p className="flex items-center gap-[5px] text-white font-bold uppercase cursor-pointer">
                Categories
                <IoIosArrowDown />
              </p>

              <div className="absolute left-[-510px] top-full mt-4 w-[1370px] bg-[#ededed] shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-2000 z-50">
                <div className="flex justify-around gap-[20px]">
                  <div className="">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="font-bold mb-4 uppercase">
                        Chargers & Cables
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Adapter Plug</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Bettery Chargers</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">USB Type Cable</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">USB-C Charger</a>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="font-bold mb-4 mt-4 uppercase">
                        Products
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Best Sellers</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">New Products</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Prices Drop</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Sitemap</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="font-bold mb-4 uppercase">TV & Speaker</li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Home Theatre Systems</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Party Speakers</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Android TV</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">TV & Audio Accessories</a>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="font-bold mb-4 mt-4 uppercase">Pages</li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Legal Notice</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Contact Us</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Secure Payment</a>
                      </li>
                      <li className="px-2 py-1 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000">
                        <a href="#">Delivery</a>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-4 gap-y-7 gap-x-3 justify-items-center py-10">
                    {categories.map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-md">
                          <img
                            src={item.src}
                            alt={item.label}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <p className="text-sm font-medium text-center mt-2">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <h4 className="font-bold mb-2">Featured Products</h4>
                    <div className="space-y-2 flex flex-col text-sm text-gray-700 gap-4">
                      <div className="flex justify-between gap-4">
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                        <div className="flex items-center text-ellipsis bg-white rounded">
                          <img
                            src="/Images/asset-3.jpeg"
                            alt=""
                            className="w-12 h-12 object-cover"
                          />
                          <div className="py-4 max-w-[120px]  overflow-hidden">
                            <p className="text-sm font-medium text-wrap text-ellipsis w-[120px]">
                              MacBook Pro 2023
                            </p>
                            <p className="text-blue-600 font-bold">$810.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <p className="bg-[#146cda] text-white flex items-center gap-[5px] font-bold uppercase cursor-pointer">
                Accessories <IoIosArrowDown />
              </p>

              <div className="absolute left-[-20px] top-full mt-4 w-65 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-1000 z-50">
                <ul className="text-black py-2 text-sm font-medium space-y-1">
                  <li className="p-2 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000 hover:py-3">
                    TV & Speaker
                  </li>
                  <li className="p-2 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000 hover:py-3">
                    MacBook
                  </li>
                  <li className="p-2 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000 hover:py-3">
                    Wireless Printer
                  </li>
                  <li className="p-2 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000 hover:py-3">
                    Earbuds Bose
                  </li>
                  <li className="p-2 rounded cursor-pointer hover:bg-[#146cda] hover:text-white transition-all duration-1000 hover:py-3">
                    Gadgets
                  </li>
                </ul>
              </div>
            </div>

            <section className="bg-[#146cda]">
              <div className="container mx-auto">
                <nav className="flex justify-center">
                  <div className="flex items-center gap-[5px]">
                    <div className="relative group">
                      <p className="flex items-center gap-[5px] text-white font-bold uppercase cursor-pointer">
                        Products <IoIosArrowDown />
                      </p>

                      <div className="absolute left-[-920px] top-full flex mt-4 w-[1480px] bg-[#ededed] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-2000 z-50">
                        <div className="p-6 border-r border-gray-400 max-w-[250px]">
                          <h4 className="text-lg font-bold mb-2">
                            New Arrivals 2024
                          </h4>
                          <p className="mb-4">
                            Fully drag and drop mega menu content. Put any
                            amazing HTML content here. Fully drag and drop menu
                            content.
                          </p>
                          <button className="mt-4 text-md underline text-blue-600">
                            Shop Now
                          </button>
                        </div>

                        <div className="p-6 flex-grow relative group/carousel">
                          <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-1 border-gray-700 hover:bg-[#146cda] hover:border-0 hover:text-white rounded-full flex items-center justify-center text-gray-700 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
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
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-1 border-gray-700 hover:bg-[#146cda] hover:border-0 hover:text-white rounded-full flex items-center justify-center text-gray-700 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
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
                </nav>
              </div>
            </section>

            <p className="uppercase text-white font-bold">MacBook</p>
            <p className="uppercase text-white font-bold">Contact us</p>
            <p className="uppercase text-white font-bold">Blog</p>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavbarHeader;
