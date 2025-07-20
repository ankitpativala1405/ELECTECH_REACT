import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import CheckoutSummary from "../Components/CheckoutSummary";
import CartProduct from "../../Methods/CartData";
import CartMethod from "../../Methods/Cart.method";
import handleCartDelete from "../Utils/CartDelete";

const CartData = CartProduct;

const CartItem = ({ item, onQuantityChange }) => {
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    let UpdateData = CartData.find((ele) => ele._id == item._id);
    console.log("UpdateData", UpdateData._id);

    if (value > 0) onQuantityChange(UpdateData._id, value);
  };

  return (
    <div className="flex items-center gap-6 border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-sm transition relative">
      {/* Image */}
      <div className="w-24 h-24 flex-shrink-0 border border-gray-300 rounded-md overflow-hidden bg-white">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.src = item.fallbackImage;
          }}
        />
      </div>

      {/* Details */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>

        <div className="mt-1 text-sm text-gray-500">
          <span className="line-through mr-2 text-gray-400">${item.MRP.toFixed(2)}</span>

          <span className="text-white font-semibold absolute top-2 left-2 bg-red-500 h-8 w-8 rounded-full text-center text-[12px]">
           <span className="my-auto"> -{Math.round(((item.MRP - item.price) / item.MRP) * 100)}%</span>
          </span>

          <span className="ml-2 text-blue-700 font-semibold">
            ${item.price.toFixed(2)}
          </span>
        </div>
      </div>


      {/* Actions */}
      <div className="flex items-center gap-4">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 border border-gray-300 rounded-md text-center py-1 px-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />

        <div className="w-[70px] text-end text-blue-700 font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </div>

        <button
          onClick={() => handleCartDelete(item)}
          className="text-gray-400 hover:text-red-500 transition"
        >
          <MdDelete size={20} />
        </button>
      </div>
    </div>

  );
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState(CartData);

  const handleQuantityChange = async (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: newQuantity } : item
      )
    );

    try {
      await CartMethod.UpdateCart({ quantity: newQuantity }, id);
      console.log(`Updated quantity for ${id} to ${newQuantity}`);
    } catch (err) {
      console.error("Failed to update quantity:", err);
    }
  };

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

      <section className="max-w-[1400px] mx-auto px-6 mt-8 flex gap-8">
        <div className="w-[70%]">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                onQuantityChange={handleQuantityChange}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty.
            </p>
          )}
        </div>
        <CheckoutSummary cartItems={cartItems} />
      </section>
    </>
  );
};

export default CartPage;