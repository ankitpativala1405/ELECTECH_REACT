import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const CheckoutSummary = () => {
  return (
    // <div className="bg-white p-6 shadow-md rounded-lg max-w-[30%]">
    //   <div className="border-b pb-4 mb-4">
    //     <p>1 item</p>
    //     <p>
    //       Shipping: <span className="font-semibold">Free</span>
    //     </p>
    //     <p>
    //       Total (tax incl.): <span className="font-semibold">$980.10</span>
    //     </p>
    //     <p>
    //       <span className="text-gray-500">Have a promo code?</span>
    //     </p>
    //   </div>

    //   <div className="flex mb-4">
    //     <input
    //       type="text"
    //       placeholder="Promo code"
    //       value={promoCode}
    //       onChange={(e) => setPromoCode(e.target.value)}
    //       className="border p-2 rounded-l-md flex-grow"
    //     />
    //     <button
    //       onClick={handleAddPromoCode}
    //       className="bg-blue-600 text-white rounded-r-md px-4"
    //     >
    //       Add
    //     </button>
    //   </div>

    //   <p className="text-gray-500">Close</p>
    //   <p className="text-blue-600">Take advantage of our exclusive offers:</p>
    //   <p className="text-blue-600 font-semibold">GET25OFF - Promo Code</p>

    //   <button className="bg-blue-600 text-white w-full py-2 rounded-md mt-4">
    //     PROCEED TO CHECKOUT
    //   </button>

    //   <div className="mt-6 border-t pt-4">
    //     <div className="flex items-center mb-2">
    //       <span className="material-icons text-gray-400 mr-2">lock</span>
    //       <p>Security policy (edit with the Customer Reassurance module)</p>
    //     </div>
    //     <div className="flex items-center mb-2">
    //       <span className="material-icons text-gray-400 mr-2">
    //         local_shipping
    //       </span>
    //       <p>Delivery policy (edit with the Customer Reassurance module)</p>
    //     </div>
    //     <div className="flex items-center mb-2">
    //       <span className="material-icons text-gray-400 mr-2">rotate_left</span>
    //       <p>Return policy (edit with the Customer Reassurance module)</p>
    //     </div>
    //   </div>
    // </div>
    <>
      <section className="bg-white w-[30%]">
        <div className="bg-white border-1 border-gray-300 w-full rounded-sm">
          <div className="flex flex-col">
            <div className="flex justify-between pt-4 px-4">
              <p className="flex gap-1.5 font-semibold text-[#444444]">
                <span className="">{1}</span>item
              </p>
              <span className="font-semibold text-[#146CDA]">$980.10</span>
            </div>
            <div className="flex justify-between pb-4 px-4">
              <p className="flex gap-1.5 font-semibold text-[#444444]">
                Shipping
              </p>
              <span className="font-semibold text-[#146CDA]">Free</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="max-w-[68%] mx-auto p-4">
      <div className="border border-gray-200 rounded-md p-4 flex items-center gap-10 space-x-6">
        <div className="flex-shrink-0 w-24 h-24 border border-gray-300 rounded-md p-1">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6a078bba-fe2d-4dda-9dea-363b8dfc6a80.png"
            alt="Sleek silver MacBook Pro laptop with Apple M1 Pro chip, open on a white surface"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.src =
                "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c6106b1f-024f-4fe1-86a0-1fbcc0d79ccc.png";
            }}
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-base font-semibold leading-tight max-w-lg">
            New Featured MacBook Pro With Apple M1 Pro Chip
          </h3>
          <div className="text-sm text-gray-500 mt-1 space-y-1 max-w-lg">
            <p>
              <span className="line-through mr-2 text-gray-400">$1,089.00</span>
              <span className="text-red-600 font-medium mr-2">-10%</span>
              <span className="text-blue-700 font-semibold">$980.10</span>
            </p>
            <p>
              <span className="font-semibold">RAM:</span> 4GB
            </p>
            <p>
              <span className="font-semibold">Internal Storage:</span> 128GB
            </p>
          </div>
        </div>
        <div className="flex  items-center gap-5">
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 border border-gray-300 rounded-md text-center py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Quantity"
          />
          <div className="text-blue-700 font-semibold text-lg">
            ${(980.1 * quantity).toFixed(2)}
          </div>

          <div className="text-[#555]">
            <MdDelete size={20} />
          </div>
        </div>
      </div>
      <button
        type="button"
        className="flex items-center mt-6 text-sm font-semibold text-gray-800 hover:text-gray-600 focus:outline-none"
      >
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        Continue shopping
      </button>
    </div>
  );
};

const CartPage = () => {
  return (
    <>
      <section className="bg-[#e6edf5] mx-auto">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center py-7 px-10">
            <h2 className="text-[1.5rem] text-[#333333]">
              Your Cart Item <span className="font-medium">({0})</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
              <button className="bg-[#146cda] text-white px-4 py-2 rounded hover:bg-[#0e5bb5] transition-all text-sm">
                Proceed to Checkout
              </button>
              <a href="#" className="flex text-[#333333] text-[14px]">
                Home
                <p className="ml-4 text-[#777777]">
                  | <span className="ml-4">Cart</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1400px] mx-auto mt-[70px] flex">
          <CartItem />
          <CheckoutSummary />
        </div>
      </section>
    </>
  );
};

export default CartPage;
