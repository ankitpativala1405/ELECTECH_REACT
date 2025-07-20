import React, { useState, useRef, useEffect } from "react";
import policies from "../Utils/policy";
import { useNavigate, useLocation } from "react-router";


const CheckoutSummary = ({ cartItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const navigate = useNavigate()
  const location = useLocation();


  let totalPrice = Number(subtotalPrice);

  const Shipping = 7.0;
  const TotalShipping = Number(Shipping);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [cartItems]);

  const handleCheckout = () => {
    navigate("/checkout")
  }
  
  return (
    <div className="flex flex-col gap-4 w-[30%] mx-auto">
      <section className="bg-white">
        <div className="bg-white border border-gray-300 w-full rounded-sm">
          <div className="flex flex-col border-b border-gray-300">
            <div
              className="flex justify-between pt-4 px-4 cursor-pointer"
              onClick={toggleExpand}
            >
              <p className="font-semibold text-[#444444]">
                {itemCount} item(s)
              </p>
              <span className="font-semibold text-[#146CDA]">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <div
              style={{
                maxHeight: isExpanded ? `${height}px` : "0px",
                opacity: isExpanded ? 1 : 0,
                transition: "max-height 0.4s ease, opacity 0.4s ease",
                overflow: "hidden",
              }}
            >
              <div ref={contentRef} className="px-4 py-2">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm py-1 border-b border-b-gray-300 last:border-b-0"
                  >
                    <span className="truncate max-w-[250px] inline-block align-middle font-medium text-gray-500">
                      {item.name}
                    </span>

                    <div className="flex flex-row">
                      <span className="mr-3 font-bold flex gap-2 text-green-600">
                        <span className="text-[#146CDA]">X</span> {item.quantity}
                      </span>
                      <span className="w-[70px] text-end font-bold text-[#146CDA]">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between pb-4 px-4">
              <p className="font-semibold text-[#444444]">Shipping</p>
              <span className="font-semibold text-[#146CDA]">
                ${Shipping.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex justify-between pt-4 px-4">
            <p className="font-semibold text-[#444444]">Total</p>
            <span className="font-semibold text-[#146CDA]">
              ${(totalPrice + TotalShipping).toFixed(2)}
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
          <p className="px-4">
            <span className="text-[#146CDA] text-[0.9rem] font-semibold underline">
              GET25OFF
            </span>
            <span className="text-[#FF9A52] text-[0.9rem] font-semibold">
              - Promo Code
            </span>
          </p>

          <div className="w-fit mx-auto my-5">
            {location.pathname === "/checkout" ? null : (
              <button
                className="bg-[#146CDA] text-white font-semibold py-3 px-5 rounded-sm"
                onClick={handleCheckout}>
                Proceed to checkout
              </button>
            )}
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

export default CheckoutSummary;