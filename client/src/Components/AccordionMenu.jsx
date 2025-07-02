import React, { useState } from "react";

const AccordionMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setActiveSubIndex(null);
  };

  const toggleSubAccordion = (index) => {
    setActiveSubIndex(index === activeSubIndex ? null : index);
  };

  const categories = [
    {
      title: "Accessories",
      items: [
        {
          title: "TV & Speaker",
          subItems: [
            "- Home Theatre Systems",
            "- Party Speakers",
            "- Android TV",
            "- TV & Audio Accessories",
          ],
        },
        { title: "Macbook" },
        { title: "Wireless Printer" },
        { title: "Earbuds Bose" },
        { title: "Gadgets" },
      ],
    },
    {
      title: "Phones",
      items: [
        { title: "Apple Ipad" },
        { title: "Basic Phones" },
        { title: "Feature Phones" },
        { title: "Smart Phones" },
      ],
    },
    {
      title: "Smart Devices",
      items: [
        { title: "Game Controller" },
        { title: "HeadPhone" },
        { title: "Smart Watch" },
        { title: "Smart Speakers" },
      ],
    },
    {
      title: "Laptop & Computers",
      items: [
        { title: "Convertible Laptops" },
        { title: "Personal Laptops" },
        { title: "Ultraportable Laptops" },
        { title: "Macbook" },
      ],
    },
    {
      title: "Chargers & Cables",
      items: [
        { title: "USB-C Charger" },
        { title: "Battery Chargers" },
        { title: "USB Type Cable" },
        { title: "Adapter Plug" },
      ],
    },
    {
      title: "Clothing",
      items: [{ title: "Shirts" }, { title: "Tunics" }, { title: "Jackets" }],
    },
    {
      title: "Home and Kitchen",
      items: [
        { title: "Blenders" },
        { title: "Furniture" },
        { title: "Cookware" },
      ],
    },
  ];

  return (
    <div>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mt-2 text-[#444444]">
            <div
              className="cursor-pointer flex justify-between items-center text-[#777777] font-semibold duration-2000"
              onClick={() => toggleAccordion(index)}
            >
              {category.title}
              <span className="text-xl">
                {activeIndex === index ? String.fromCharCode(8722) : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <ul
                className={`ml-4 mt-2 text-sm text-[#777777] font-semibold }`}
              >
                {category.items.map((item, i) => (
                  <li key={i} className="py-1">
                    {item.subItems ? (
                      <>
                        <div
                          className="cursor-pointer flex justify-between items-center hover:text-blue-500"
                          onClick={() => toggleSubAccordion(i)}
                        >
                          {item.title}
                          <span className="text-sm">
                            {activeSubIndex === i
                              ? String.fromCharCode(8722)
                              : "+"}
                          </span>
                        </div>
                        {activeSubIndex === i && (
                          <ul className="ml-4 mt-1 text-gray-600">
                            {item.subItems.map((subItem, j) => (
                              <li
                                key={j}
                                className="py-0.5 hover:text-blue-400 cursor-pointer"
                              >
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <span className="cursor-pointer hover:text-blue-500">
                        {item.title}
                      </span>
                    )}
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
