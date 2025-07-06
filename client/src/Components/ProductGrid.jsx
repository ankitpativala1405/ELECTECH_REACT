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

  return (
    <>
      <div className={`grid grid-cols-${productsPerPage} px-4 max-w-[1500px] mx-auto mb-[100px]`}>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full mb-4 rounded"
            />
            <p className="text-gray-700 mb-2">{selectedProduct.brand}</p>
            <p className="text-[#146cda] font-bold">
              ${selectedProduct.price}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductGrid;
