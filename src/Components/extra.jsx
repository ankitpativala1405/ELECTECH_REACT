import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const CartDrawer = ({ isOpen, onClose }) => {
  const cartItems = [
    {
      id: 1,
      name: "New Featured MacBook Pro With Apple M1 Pro Chip",
      price: 810,
      quantity: 1,
      image: "https://image-url/macbook.jpg",
    },
    {
      id: 2,
      name: "Rumbloo Silicone Controller Grip Cover",
      price: 102,
      quantity: 1,
      image: "https://image-url/controller.jpg",
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 7;

  return (
    <>
      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 w-[360px] max-w-full h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">
            Shopping Cart ({cartItems.length})
          </h2>
          <button onClick={onClose} className="text-xl font-bold">
            &times;
          </button>
        </div>

        {/* Items */}
        <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100vh-240px)]">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 border-b pb-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="text-sm font-medium">{item.name}</h4>
                <p className="text-blue-500 font-semibold">
                  {item.quantity} x ${item.price.toFixed(2)}
                </p>
              </div>
              <MdDelete className="text-gray-500 hover:text-red-500 cursor-pointer mt-1" />
            </div>
          ))}
        </div>

        {/* Price Summary */}
        <div className="p-4 border-t space-y-1">
          <div className="flex justify-between">
            <span>{cartItems.length} items</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="font-semibold">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${(total + shipping).toFixed(2)}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="p-4 flex gap-2">
          <button className="flex-1 bg-gray-800 text-white py-2 rounded hover:bg-black transition">
            View Cart
          </button>
          <button className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
