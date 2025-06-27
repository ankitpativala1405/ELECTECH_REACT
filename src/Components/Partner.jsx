import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRef } from "react";

const Partner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <section className="max-w-[1500px] mx-auto py-15">
        <div className="container mx-auto">
          <div className="flex justify-evenly px-7">
            <div>
              <img src="/Images/2.jpg" alt="" />
            </div>
            <div>
              <img src="/Images/1.jpg" alt="" />
            </div>
            <div>
              <img src="/Images/3.jpg" alt="" />
            </div>
            <div>
              <img src="/Images/4.jpg" alt="" />
            </div>
            <div>
              <img src="/Images/5.jpg" alt="" />
            </div>
            <div>
              <img src="/Images/2.jpg" alt="" />
            </div>
            <div>
              <img src="/Images/7.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
              <div className="relative mt-8 group">
        <button
          ref={prevRef}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 p-3 bg-white border opacity-0 group-hover:opacity-100 group-hover:duration-1000 border-gray-300 rounded-full hover:bg-[#146cda] hover:text-white"
        >
          <FaAngleLeft />
        </button>
        <button
          ref={nextRef}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 p-3 bg-white border opacity-0 group-hover:opacity-100 group-hover:duration-1000 border-gray-300 rounded-full hover:bg-[#146cda] hover:text-white"
        >
          <FaAngleRight />
        </button>

        <Swiper
          slidesPerView={6}
          spaceBetween={5}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className=""
        >
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <div className="py-7.5 px-11.25 border-1 border-gray-300 rounded-md shadow-lg">
                <h4 className="text-[1rem] text-[#333333] font-semibold">
                  “Reliable product, consistently delivers.”
                </h4>
                <p className="text-[0.875rem] text-[#777777] mt-3 mb-5 font-medium font-lexend">
                  lorem Ipsum many variations of passages of there are available
                  but the have alteration in some form by injected humour or
                  randomised words blievable lorem Ipsum is the printing and
                  typesetting.
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/Images/testimonial-1.jpg"
                    alt=""
                    className="rounded-full "
                  />
                  <h4 className="text-[1rem] text-[#333333] font-lexend) font-semibold">
                    Patrick Goodman
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
      </div>
      </section>
    </>
  );
};

export default Partner;
