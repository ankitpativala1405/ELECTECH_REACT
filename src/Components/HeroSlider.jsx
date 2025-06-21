"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <Swiper
      cssMode={true}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative w-full h-[500px]">
          <img
            src="/Images/hero-sample-1.jpg"
            alt="VR Headset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-end pr-32 text-black">
            <div className="max-w-[500px] text-left text-[#353435]">
              <p className="text-[1.5rem] mb-[30px]">Flat 20% Discount</p>
              <h2 className="text-[2.8rem] mb-[-10px] font-bold whitespace-nowrap">
                JBL Tune 510 Ear
              </h2>
              <span className="whitespace-nowrap text-[2.8rem] font-bold mb-7 block">
                Wireless Headphones
              </span>
              <p className="text-[30px] mb-4 mt-[30px]">
                From{" "}
                <span className="text-[#146cda] font-bold text-[2.9rem]">
                  $199.99
                </span>
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-[500px]">
          <img
            src="/Images/hero-sample-2.jpg"
            alt="VR Headset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-end pr-32 text-black">
            <div className="max-w-[500px] text-left text-[#353435]">
              <p className="text-[1.5rem] mb-[30px]">Flat 30% Discount</p>
              <h2 className="text-[2.8rem] mb-[-10px] font-bold whitespace-nowrap">
                VR Virtual Reality
              </h2>
              <span className="whitespace-nowrap text-[2.8rem] font-bold mb-7 block">
                Headset Smartphone
              </span>
              <p className="text-[30px] mb-4 mt-[30px]">
                From{" "}
                <span className="text-[#146cda] font-bold text-[2.9rem]">
                  $199.99
                </span>
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
