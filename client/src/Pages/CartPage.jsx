import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import policies from "../Utils/policy";

const CheckoutSummary = ({ cartItems }) => {
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col gap-4 w-[30%] mx-auto">
      <section className="bg-white">
        <div className="bg-white border border-gray-300 w-full rounded-sm">
          <div className="flex flex-col border-b border-gray-300">
            <div className="flex justify-between pt-4 px-4">
              <p className="font-semibold text-[#444444]">
                {itemCount} item(s)
              </p>
              <span className="font-semibold text-[#146CDA]">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between pb-4 px-4">
              <p className="font-semibold text-[#444444]">Shipping</p>
              <span className="font-semibold text-[#146CDA]">Free</span>
            </div>
          </div>
          <div className="flex justify-between pt-4 px-4">
            <p className="font-semibold text-[#444444]">Total</p>
            <span className="font-semibold text-[#146CDA]">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="px-4 py-2">
            <a href="#" className="text-[#146CDA] font-semibold underline">
              Have a promo code?
            </a>
          </div>
          <div className="px-4 pb-4">
            <input
              type="text"
              placeholder="Promo code"
              className="border border-gray-300 rounded p-2 w-[65%] mr-2"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              ADD
            </button>
          </div>
          <p className="text-[#777777] text-[1rem] px-4">
            Take advantage of our exclusive offers:
          </p>
          <p className=" px-4">
            <span className="text-[#146CDA] text-[0.9rem] font-semibold underline">
              GET25OFF
            </span>
            <span className="text-[#FF9A52] text-[0.9rem] font-semibold">
              - Promo Code
            </span>
          </p>

          <div className="w-fit mx-auto my-5">
            <button className="bg-[#146CDA] text-white font-semibold py-3 px-5 rounded-sm">
              Proceed to checkout
            </button>
          </div>
        </div>
      </section>

      <div className="rounded-sm mx-auto flex flex-col gap-1 mt-5 mb-20 bg-white w-full">
        {policies.map(({ id, title, description, icon }) => (
          <div
            key={id}
            className="flex items-start border-s-4 gap-3 bg-[#f7f7f7] border-s-[#146CDA] px-4 py-3"
          >
            <div className="pt-1">{icon}</div>
            <div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) onQuantityChange(item.id, value);
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
            <span className="line-through text-gray-400">
              ${item.originalPrice}
            </span>{" "}
            <span className="text-red-600">-10%</span>{" "}
            <span className="text-blue-700 font-semibold">${item.price}</span>
          </p>
          <p>
            <strong>RAM:</strong> {item.ram}
          </p>
          <p>
            <strong>Storage:</strong> {item.storage}
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
        <div className="text-blue-700 font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="text-gray-600 hover:text-red-600"
        >
          <MdDelete size={20} />
        </button>
      </div>
    </div>
  );
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "MacBook Pro With Apple M1 Pro",
      price: 980.1,
      originalPrice: 1089.0,
      quantity: 1,
      ram: "4GB",
      storage: "128GB",
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6a078bba-fe2d-4dda-9dea-363b8dfc6a80.png",
      fallbackImage:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c6106b1f-024f-4fe1-86a0-1fbcc0d79ccc.png",
    },
    {
      id: 2,
      name: "MacBook Pro With Apple M1 Pro",
      price: 980.1,
      originalPrice: 1089.0,
      quantity: 1,
      ram: "4GB",
      storage: "128GB",
      image:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6a078bba-fe2d-4dda-9dea-363b8dfc6a80.png",
      fallbackImage:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c6106b1f-024f-4fe1-86a0-1fbcc0d79ccc.png",
    },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
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
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemoveItem}
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
