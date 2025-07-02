import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { FaInstagram } from "react-icons/fa";

const Partner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const imageList = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg",
  ];
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
        <div className="relative mt-8 extra-blog">
          <button
            ref={prevRef}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-2xl w-11 h-11 bg-white border opacity-0 extra-subblog border-gray-300 rounded-full hover:bg-[#146cda] hover:text-white"
          >
            &#10094;
          </button>
          <button
            ref={nextRef}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11  text-2xl bg-white border opacity-0 extra-subblog border-gray-300 rounded-full hover:bg-[#146cda] hover:text-white"
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
          >
            {imageList.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative group overflow-hidden">
                  <img
                    src={`/Images/${image}`}
                    alt={`Slide ${index + 1}`}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>
                  <div className="absolute inset-0 flex justify-center items-center gap-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                    <div className="text-center p-3 hover:font-semibold transition-all duration-300 cursor-pointer scale-0 group-hover:scale-100">
                      <FaInstagram className="text-white text-5xl" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Partner;
