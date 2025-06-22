import React from "react";
import DynamicProductIndex from "./DynamicProductIndex";

const BestSellingProduct = () => {
  return (
    <>
      <section className="max-w-[1500px] mx-auto px-7 pt-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[1.5rem] text-[#333333] font-semibold active">
              Best Selling Products
            </h2>
          </div>
          <div className="text-[15px] font-semibold text-[#333333] flex gap-5 uppercase">
            <p className="active-right">All best sellers</p>
          </div>
        </div>
        <hr className="text-gray-300 mb-[-20px]" />
      </section>
      <DynamicProductIndex productsPerPage={6} />

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

export default BestSellingProduct;
