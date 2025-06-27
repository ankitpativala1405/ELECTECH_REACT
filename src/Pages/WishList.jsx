import React from "react";

const WishList = () => {
  return (
    <>
      <section className="bg-[#e6edf5]  mx-auto">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center py-7 px-10">
            <h2 className="text-[1.5rem] text-[#333333]">Your Wishlist</h2>
            <a href="" className="flex text-[#333333] text-[14px]">
              Home
              <p className="ml-4 text-[#777777]">
                | <span className="ml-4">Wishlist</span>
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Table Start */}

      <section>
        <div className="max-w-[1400px] mx-auto">
          <table className="w-full border border-gray-400">
            <thead className="bg-gray-100">
              <tr className="text-left text-sm font-semibold text-gray-900">
                <th className="py-3 px-4 border-r-gray-400">Name</th>
                <th className="py-3 px-4 border-r-gray-400">Quantity</th>
                <th className="py-3 px-4 border-r-gray-400">Viewed</th>
                <th className="py-3 px-4 border-r-gray-400">Created</th>
                <th className="py-3 px-4 border-r-gray-400">Direct Link</th>
                <th className="py-3 px-4 border-r-gray-400">Default</th>
                <th className="py-3 px-4">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm text-gray-700">
                <td className="py-3 px-4 border-t border-gray-300">Product A</td>
                <td className="py-3 px-4 border-t border-gray-300">5</td>
                <td className="py-3 px-4 border-t border-gray-300">12</td>
                <td className="py-3 px-4 border-t border-gray-300">2025-06-26</td>
                <td className="py-3 px-4 border-t border-gray-300 text-blue-600 underline cursor-pointer">Link</td>
                <td className="py-3 px-4 border-t border-gray-300"><input type="checkbox" defaultChecked /></td>
                <td className="py-3 px-4 border-t border-gray-300 text-red-600 cursor-pointer">Delete</td>
               </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default WishList;
