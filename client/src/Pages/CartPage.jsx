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
    <div className="border border-gray-200 rounded-md p-4 flex items-center gap-10 space-x-6 mb-4">
      <div className="w-24 h-24 border border-gray-300 rounded-md p-1">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.src = item.fallbackImage;
          }}
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-base font-semibold">{item.name}</h3>
        <div className="text-sm text-gray-500 mt-1">
          <p>
            <span className="line-through text-gray-400">${item.MRP}</span>{" "}
            <span className="text-red-600">-10%</span>{" "}
            <span className="text-blue-700 font-semibold">${item.price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 border border-gray-300 rounded-md text-center py-1 px-2"
        />
        <div className="text-blue-700 font-semibold text-end w-[70px]">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <button
          onClick={() => handleCartDelete(item)}
          className="text-gray-600 hover:text-red-600"
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