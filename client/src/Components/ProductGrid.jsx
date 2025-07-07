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
          <div className="bg-white p-6 rounded-lg max-w-4xl w-full relative grid grid-cols-1 md:grid-cols-2 gap-8">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>

            <div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full rounded "
              />
              <div className="flex gap-2 justify-around mt-4 w-full">
                {[1, 2, 3, 4].map((_, idx) => (
                  <div
                    key={idx}
                    className="w-20 h-16 bg-gray-200 rounded border"
                  ></div>
                ))}
              </div>
            </div>


            <div className="flex flex-col gap-2">
              <h2 className="text-[1.5rem] text-[#333333] font-bold">{selectedProduct.name}</h2>
              <p className="text-[#777777] text-[0.9rem]">
                You can enjoy unlimited entertainment at the comfort of your home with
                this smart printer. The PurColour technology delivers vibrant and lifelike
                quality with its wide range...
              </p>
              <div className="text-sm">
                <p>
                  <span className="font-semibold">Brand:</span>{" "}
                  {selectedProduct.brand}
                </p>
                <p>
                  <span className="font-semibold">Condition:</span> New
                </p>
                <p>
                  <span className="font-semibold">In Stock:</span>{" "}
                  <span className="text-green-600">218 Items</span>
                </p>
              </div>

              {/* Colors */}
              <div className="flex items-center gap-2">
                <span className="font-semibold">Color:</span>
                {["bg-gray-500", "bg-red-500", "bg-blue-500", "bg-yellow-500"].map(
                  (color, idx) => (
                    <div
                      key={idx}
                      className={`${color} w-6 h-6 rounded-full border cursor-pointer`}
                    ></div>
                  )
                )}
              </div>

              {/* Price */}
              <div className="text-2xl font-bold text-blue-700">
                ${selectedProduct.price}
              </div>
              <p className="text-gray-500 text-sm">
                Tax included. Est. Delivery Time 2-3 Days
              </p>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                  Add to Cart
                </button>
                <button className="text-gray-600 hover:text-red-500">
                  ♥
                </button>
              </div>

              {/* Checkout icons */}
              <div className="mt-4 border-t pt-4">
                <p className="font-semibold mb-2">Guarantee Safe Checkout</p>

                <div>
                  <img src="/Images/trust_badge.png" alt="..." />
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
