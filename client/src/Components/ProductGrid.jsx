import React, { useState } from "react";
import products from "../Utils/products";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LuChartNoAxesColumn } from "react-icons/lu";
import { HiOutlineArrowsExpand } from "react-icons/hi";

function ProductGrid({ currentIndex, productsPerPage }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const getGridCols = (count) => {
    switch (count) {
      case 5:
        return "grid-cols-5";
      case 6:
        return "grid-cols-6";
      default:
        return "grid-cols-3";
    }
  };

  return (
    <>
      <div className={`grid ${getGridCols(productsPerPage)} px-4 max-w-[1500px] mx-auto mb-[100px]`}>
        {products
          .slice(currentIndex, currentIndex + productsPerPage)
          .map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg py-4 px-5 text-left transition-transform hover:-translate-y-1 cursor-pointer relative"
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
                <span
                  onClick={() => openModal(product)}
                  className="bg-white border border-gray-300 rounded-full p-1 hover:bg-[#146cda] hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <HiOutlineArrowsExpand size={20} />
                </span>
              </div>

              <div className="uppercase w-[80%] text-center absolute bottom-10 opacity-0 right-0 left-0 m-auto font-semibold bg-[#146cda] text-white group-hover:bottom-[-30px] group-hover:opacity-100 group-hover:duration-1000 py-2 px-4 rounded-lg">
                options
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}


      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-50 overflow-auto">
          <div className="bg-white p-6 rounded-lg max-w-6xl w-full relative flex ">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>

            <div className="flex flex-col w-[45%]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full rounded "
              />
              <div className="flex gap-2 justify-around mt-4 w-full">
                {[selectedProduct.image1, selectedProduct.image2, selectedProduct.image3, selectedProduct.image4].map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="w-30 h-26 bg-gray-200 rounded border border-gray-300 overflow-hidden"
                  >
                    <img
                      src={imgSrc}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-[55%] gap-4">
              <h1 className="text-2xl font-bold">{selectedProduct.name}</h1>
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
                  {selectedProduct.brand}
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
                ${selectedProduct.price}
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
      )}

    </>
  );
}

export default ProductGrid;
