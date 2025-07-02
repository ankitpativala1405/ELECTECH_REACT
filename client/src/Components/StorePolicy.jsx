import React from "react";
import { PiTruckLight } from "react-icons/pi";
import { MdAutorenew } from "react-icons/md";
import { FaRegCreditCard, FaGift } from "react-icons/fa";
import { IoMdHeadset } from "react-icons/io";

const features = [
  {
    icon: <PiTruckLight size={32} />,
    title: "Free Shipping",
    subtitle: "For all Orders Over $100",
  },
  {
    icon: <MdAutorenew size={32} />,
    title: "30 Days Returns",
    subtitle: "For an Exchange Product",
  },
  {
    icon: <FaRegCreditCard size={32} />,
    title: "Offers And Discounts",
    subtitle: "Payment Cards Accepted",
  },
  {
    icon: <FaGift size={32} />,
    title: "Special Gifts",
    subtitle: "Contact us Anytime",
  },
  {
    icon: <IoMdHeadset size={32} />,
    title: "Support 24/7",
    subtitle: "Contact us Anytime",
  },
];

const StorePolicy = () => {
  return (
    <div className="bg-[#146cda] max-w-[1500px] mx-auto text-white rounded-md py-6 px-4">
      <div className="flex flex-wrap justify-around gap-6 mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 w-full sm:w-auto">
            <div className="text-white">{feature.icon}</div>
            <div>
              <p className="font-semibold">{feature.title}</p>
              <p className="text-sm">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePolicy;
