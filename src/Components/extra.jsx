import React, { useState } from "react";

const categories = [
  // ... (your existing categories array)
];

export default function CategoryShopUI() {
  const itemsPerPage = 4; // Show 4 categories per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  // Get current categories to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = categories.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-[1500px] mx-auto px-5 py-10">
      <h2 className="text-[1.5rem] font-semibold mb-3 text-[#333333] border-b-2 border-[#146cda] inline-block pb-1">
        Shop By Category
      </h2>
      <hr className="text-gray-300 mt-[-14px]"/>
      
      <div className="flex justify-between items-center pt-10 space-x-5 overflow-x-auto scrollbar-hide">
        {currentItems.map((category) => (
          <div
            key={category.name}
            className="flex-shrink-0 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="w-34 h-34 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden mb-2">
              <img
                src={category.img}
                alt={category.name}
                className="object-contain w-30 h-30"
                loading="lazy"
              />
            </div>
            <strong className="text-gray-800">{category.name}</strong>
            {category.shopNow ? (
              <a
                href="#"
                className="text-blue-600 font-semibold text-sm mt-1 hover:underline"
              >
                SHOP NOW
              </a>
            ) : (
              <small className="text-gray-500 text-sm mt-1">
                ({category.items} items)
              </small>
            )}
          </div>
        ))}
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-3 h-3 rounded-full ${currentPage === index + 1 ? 'bg-[#146cda]' : 'bg-gray-300'}`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


