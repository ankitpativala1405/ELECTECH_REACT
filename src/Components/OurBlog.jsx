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
                  <div>
                    <ul className="flex items-center py-2 text-[#146CDA] font-semibold gap-5 uppercase">
                      <li className="flex items-center">
                        <SlCalender />

                        <p>15 OCTOBER, 2024</p>
                      </li>

                      <li className="flex items-center">
                        <IoMdMenu />
                        <p>Social media</p>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-[1rem] text-[#333333] font-bold font-(family-name:lexend)">
                    How to Build a Detailed Business Plan That Stands Out
                  </h3>
                  <p className="text-[14px] text-[#777777] font-(family-name:lexend)">
                    Expedita consequatur aut sed eaque minus Mollitia
                    consequatur ipsum ut eaque illum sint. Sapiente ea
                    explicabo. Lure esse quia Ducimus voluptatem...
                  </p>
                  <a href="text-[14rem] uppercase">Read more</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="flex justify-center items-center">
              <div className="py-7.5 px-11.25 border-1 border-gray-300 rounded-md shadow-lg">
                <h4 className="text-[1rem] text-[#333333] font-semibold">
                  “Excellent product, A+ customer service.”
                </h4>
                <p className="text-[0.875rem] text-[#777777] mt-3 mb-5 font-medium font-(family-name:lexend)">
                  There are many variations of passages of lorem Ipsum available
                  but the have alteration in some form by injected humour
                  randomised words which dont look even believable lorem Ipsum
                  is simply text.
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/Images/testimonial-2.jpg"
                    alt=""
                    className="rounded-full "
                  />
                  <h4 className="text-[1rem] text-[#333333] font-(family-name:lexend) font-semibold">
                    Luies Charls
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <div className="flex justify-center items-center">
              <div className="py-7.5 px-11.25 border-1 border-gray-300 rounded-md shadow-lg">
                <h4 className="text-[1rem] text-[#333333] font-semibold">
                  “Impressive quality, durable and reliable.”
                </h4>
                <p className="text-[0.875rem] text-[#777777] mt-3 mb-5 font-medium font-(family-name:lexend)">
                  Generation many variations of passages of even blievable lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry lorem Ipsum available but the have alteration in some
                  form.
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/Images/testimonial-3.jpg"
                    alt=""
                    className="rounded-full "
                  />
                  <h4 className="text-[1rem] text-[#333333] font-(family-name:lexend) font-semibold">
                    Jecob Goeckno
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <div className="flex justify-center items-center">
              <div className="py-7.5 px-11.25 border-1 border-gray-300 rounded-md shadow-lg">
                <h4 className="text-[1rem] text-[#333333] font-semibold">
                  “Excellent product, worth every penny.”
                </h4>
                <p className="text-[0.875rem] text-[#777777] mt-3 mb-5 font-medium font-(family-name:lexend)">
                  lorem Ipsum is simply dummy text of the printing and
                  typesetting industry There are many variations of passages of
                  lorem Ipsum available but the have alteration in some form by
                  injected humour.
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/Images/testimonial-4.jpg"
                    alt=""
                    className="rounded-full "
                  />
                  <h4 className="text-[1rem] text-[#333333] font-(family-name:lexend) font-semibold">
                    Danial Smith
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
}
