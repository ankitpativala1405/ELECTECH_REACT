import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
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
      <section className="mb-2.5">
        <div className="relative mt-8 group">
          <button
            ref={prevRef}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-2xl w-11 h-11 bg-white border opacity-0 group-hover:opacity-100 group-hover:duration-1000 border-gray-300 rounded-full hover:bg-[#146cda] hover:text-white"
          >
            &#10094;
          </button>
          <button
            ref={nextRef}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11  text-2xl bg-white border opacity-0 group-hover:opacity-100 group-hover:duration-1000 border-gray-300 rounded-full hover:bg-[#146cda] hover:text-white"
          >
            &#10095;
          </button>

          <Swiper
            slidesPerView={6}
            spaceBetween={8}
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
            <SwiperSlide><div><img src="/Images/01.jpg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div><img src="/Images/02.jpg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div><img src="/Images/03.jpg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div><img src="/Images/04.jpg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div><img src="/Images/05.jpg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div><img src="/Images/06.jpg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div><img src="/Images/07.jpg" alt="" /></div></SwiperSlide>
            <SwiperSlide><div><img src="/Images/08.jpg" alt="" /></div></SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Partner;
