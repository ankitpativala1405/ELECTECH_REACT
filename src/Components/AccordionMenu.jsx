import React, { useState } from "react";

const AccordionMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const categories = [
    { title: "Accessories", items: ["Headphones", "Cases", "Cables"] },
    { title: "Phones", items: ["iPhone", "Samsung", "OnePlus"] },
    { title: "Smart Devices", items: ["Smartwatch", "Alexa", "Thermostat"] },
    { title: "Laptop & Computers", items: ["MacBook", "Gaming Laptops"] },
    { title: "Chargers & Cables", items: ["USB-C", "Lightning", "Adapters"] },
    { title: "Clothing", items: ["Shirts", "Shoes", "Jackets"] },
    { title: "Home and Kitchen", items: ["Blenders", "Furniture", "Cookware"] },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mt-2 text-[#444444]">
            <div
              className="cursor-pointer items-center flex justify-between gap-5 text-[#333333] mt-2 font-semibold"
              onClick={() => toggleAccordion(index)}
            >
              {category.title}
              <span className="text-xl text-[#333333]">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <ul className="ml-4 mt-1 text-sm text-gray-600 transition-all duration-300">
                {category.items.map((item, i) => (
                  <li key={i} className="py-1 hover:text-blue-500 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccordionMenu;
