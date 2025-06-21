import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const categories = [
  {
    name: "Android TV",
    items: 14,
    img: "/Images/asset 32.jpeg",
  },
  {
    name: "Wireless Printer",
    items: 20,
    img: "/Images/asset 33.jpeg",
  },
  {
    name: "Earbuds Bose",
    items: 21,
    img: "/Images/asset 34.jpeg",
  },
  {
    name: "Apple Ipad",
    items: 19,
    img: "/Images/asset 35.jpeg",
    shopNow: true,
  },
  {
    name: "Smart Phones",
    items: 18,
    img: "/Images/asset 36.jpeg",
  },
  {
    name: "Game Controller",
    items: 13,
    img: "/Images/asset 37.jpeg",
  },
  {
    name: "Headphone",
    items: 11,
    img: "/Images/asset 38.jpeg",
  },
  {
    name: "Smart Watch",
    items: 12,
    img: "/Images/asset 39.jpeg",
  },
  {
    name: "Smart Speakers",
    items: 15,
    img: "/Images/asset 40.jpeg",
  },
];

export default function CategoryShopUI() {
  return (
    <div className="max-w-[1500px] mx-auto px-5 py-10">
      <h2 className="text-[1.5rem] font-semibold mb-3 text-[#333333] border-b-2 border-[#146cda] inline-block pb-1">
        Shop By Category
      </h2>
      <hr className="text-gray-300 mt-[-14px]" />

      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper pb-[100px]"
      >
        {categories.map((category) => (
          <SwiperSlide
            key={category.name}
            className="flex flex-col pt-10 items-center text-center cursor-pointer swiper-div"
          >
            <div className="w-34 h-34 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden mb-2 ">
              <img
                src={category.img}
                alt={category.name}
                className="object-contain w-30 h-30"
                loading="lazy"
              />
            </div>
            <strong className="text-center text-[#333333]">
              {category.name}
            </strong>
            <p className="text-[#777777]"> ({category.items} items)</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-pagination {
          margin-top: 90px;
          text-align: center;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #ccc;

          opacity: 1;
          margin: 0 5px !important;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background-color: #146cda;
          transform: scale(1.2);
        }

        .swiper-div:hover > p {
          display: none;
        }
        .swiper-div:hover::after {
          content: "SHOP NOW";
          display: block;
          color: #146cda;
          font-weight: bold;
          text-decoration: underline;
          font-size: 14px;
          transition: all 2s ease;
        }
      `}</style>
    </div>
  );
}
