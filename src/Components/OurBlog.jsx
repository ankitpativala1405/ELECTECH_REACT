import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { useRef } from "react";
import { FaLink } from "react-icons/fa6";

import { FaSearch } from "react-icons/fa";

export default function OurBlog() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <section className="max-w-[1450px] mx-auto px-7 mt-[70px] pt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-[1.5rem] text-[#333333] font-semibold">
            Our Latest Blog
          </h2>
        </div>
        <hr className="text-gray-300 mb-[-20px]" />
      </section>

      <div className="relative max-w-[1475px] mx-auto  px-7 pt-8 extra-blog">
        <button
          ref={prevRef}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 p-3 z-10 bg-white border opacity-0 extra-subblog  border-gray-300 rounded-full hover:bg-blue-600 hover:text-white"
        >
          <FaLessThan />
        </button>
        <button
          ref={nextRef}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 p-3 z-10 bg-white border opacity-0 extra-subblog border-gray-300 rounded-full hover:bg-blue-600 hover:text-white"
        >
          <FaGreaterThan />
        </button>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="mySwiper"
        >
          {[10, 9, 8, 7, 6].map((num) => (
            <SwiperSlide key={num}>
              <div className="flex justify-center items-center">
                <div className="flex flex-col max-w-[300px] group">
                  <div className="relative h-[250px] overflow-hidden ">
                    <img
                      src={`/Images/b-blog-${num}.jpg`}
                      alt="..."
                      className="w-full h-[250px] object-cover group-hover:scale-105 transition-all duration-300 rounded-md"
                    />

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 group-~hover:rounded-md transition-all duration-300 z-10"></div>

                    <div className="absolute inset-0 flex justify-center items-center gap-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div
                        className="border-2 border-white text-center p-3 rounded-full 
             hover:bg-[#146cda] hover:border-transparent hover:text-white 
             hover:font-semibold group transition-all duration-300 cursor-pointer scale-0 group-hover:scale-100"
                      >
                        <FaSearch className="text-white" />
                      </div>
                      <div
                        className="border-2 border-white text-center p-3 rounded-full 
             hover:bg-[#146cda] hover:border-transparent hover:text-white 
             hover:font-semibold group transition-all duration-300 cursor-pointer scale-0 group-hover:scale-100"
                      >
                        <FaLink className="text-white" />
                      </div>
                    </div>
                  </div>
                  <ul className="flex items-center py-5 text-[#146CDA] font-semibold gap-5 uppercase">
                    <li className="flex items-center gap-2 text-[14px]">
                      <SlCalender />
                      <p>15 OCTOBER, 2024</p>
                    </li>
                    <li className="flex items-center gap-2 text-[14px]">
                      <IoMdMenu />
                      <p>Social media</p>
                    </li>
                  </ul>
                  <h3 className="text-[1rem] text-[#333333] font-bold font-lexend">
                    How to Build a Detailed Business Plan That Stands Out
                  </h3>
                  <p className="text-[14px] my-4 text-[#777777d5] font-semibold font-lexend line-clamp-2">
                    Expedita consequatur aut sed eaque minus Mollitia
                    consequatur ipsum ut eaque illum sint...
                  </p>
                  <a
                    href="#"
                    className="text-[14px] uppercase mt-2 text-[#171D27] underline font-semibold hover:text-[#146cda] hover:no-underline duration-300"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <hr className="mt-[100px] border-t-1 border-gray-300" />
      </div>
    </>
  );
}
