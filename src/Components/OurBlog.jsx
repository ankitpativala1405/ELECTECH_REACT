import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const BlogInfo = [
  {
    id: 1,
    image: `/Images/`,
  },
];

export default function OurBlog() {
  return (
    <>
      <section className="max-w-[1450px] mx-auto px-7 pt-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[1.5rem] text-[#333333] font-semibold active">
              Our Latest Blog
            </h2>
          </div>
        </div>
        <hr className="text-gray-300 mb-[-20px]" />
      </section>
      <div className="relative max-w-[1450px] mx-auto px-7 pt-8">
        <button className=" absolute left-1 top-1/2 -translate-y-1/2 p-3 z-10 bg-white border border-gray-300 rounded-full  hover:bg-blue-600 hover:text-white">
          <FaLessThan />
        </button>
        <button className=" absolute right-1 top-1/2 -translate-y-1/2 p-3 z-10 bg-white border border-gray-300 rounded-full  hover:bg-blue-600 hover:text-white">
          <FaGreaterThan />
        </button>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <div className="flex flex-col"> 
                <div>
                  <img
                    src="/public/Images/b-blog-10.jpg"
                    alt=""
                    className="rounded-sm"
                  />
                </div>
                <div>
                  <div className="">
                    <ul className="flex items-center flex-nowrap py-2 text-[#146CDA] font-semibold gap-5 uppercase">
                      <li className="flex items-center flex-nowrap">
                        <SlCalender />

                        <p>15 OCTOBER, 2024</p>
                      </li>

                      <li className="flex items-center flex-nowrap">
                        <IoMdMenu />
                        <p>Social media</p>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-[1rem] text-[#333333] font-bold px-2 font-(family-name:lexend)">
                    How to Build a Detailed Business Plan That Stands Out
                  </h3>
                  <p className="text-[14px] text-[#777777] font-(family-name:lexend)">
                    Expedita consequatur aut sed eaque minus Mollitia
                    consequatur ipsum ut eaque illum sint. Sapiente ea
                    explicabo. Lure esse quia Ducimus voluptatem...
                  </p>
                  <a href="text-[14rem] uppercase mt-2">Read more</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
