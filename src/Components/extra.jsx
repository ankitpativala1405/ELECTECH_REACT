                  {/* <img
                    src={`/Images/b-blog-${num}.jpg`}
                    alt={`Blog ${num}`}
                    className="rounded-sm"
                  /> */}
                  <SwiperSlide key={num}>
  <div className="flex justify-center items-center">
    <div className="flex flex-col max-w-[300px]">
      <div className="relative h-[250px] overflow-hidden group"> {/* <- Group moved here */}
        <img
          src={`/Images/b-blog-${num}.jpg`}
          alt="..."
          className="w-full h-[250px] object-cover group-hover:scale-105 transition-all duration-300 rounded-lg"
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>

        <div className="absolute inset-0 flex justify-center items-center gap-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="border-2 border-white text-center p-3 rounded-sm 
             hover:bg-red-500 hover:border-transparent hover:text-white 
             hover:font-semibold transition-all duration-300 cursor-pointer scale-0 group-hover:scale-100">
            <FaLink className="text-white" />
          </div>
          <div className="border-2 border-white text-center p-3 rounded-sm 
             hover:bg-red-500 hover:border-transparent hover:text-white 
             hover:font-semibold transition-all duration-300 cursor-pointer scale-0 group-hover:scale-100">
            <FaTruckFast className="text-white" />
          </div>
        </div>
      </div>
      {/* ...rest of the content */}
    </div>
  </div>
</SwiperSlide>
