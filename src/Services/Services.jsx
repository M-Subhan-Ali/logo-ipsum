import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ServicesData } from "../Services/DataServices.jsx";
import ellipse from '../Home/images/Ellipse.png';



import "swiper/css";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css/pagination";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const TotalSlides = ServicesData.length;
  const progressPercentage = ((activeIndex + 1) / TotalSlides) * 100;

  return (
    <>
      <div className="h-full service w-full lg:mt-32 border border-t-gray-300 border-b-gray-300  relative" style={{ background: 'linear-gradient(rgba(249, 249, 255, 1), rgba(249, 249, 255, 1))' }}>
        <div>
          <h1 className=" text-4xl text-center text-[#1a202c] lg:pt-16 font-bold mb-16">
            Services we offer
          </h1>
        </div>
        <div className="py-4">
          <Swiper
            
            pagination= {{clickable:true}}
            slidesPerView={3}
            spaceBetween={10}
            modules={[Pagination]}
            centeredSlides={true}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            
          >
            {ServicesData.map((x, i) => (
              <SwiperSlide className="mb-8" key={i}>
                <div
                  className={`${
                    activeIndex === i
                      ? "swiper-slide-active border border-[#dd5580] rounded-md swiper"
                      : ""
                  }card w-80 h-[287px]   mx-auto mb-9`}
                >
                  <div className="w-[301px]  h-[210px] pt-[38.5px] pl-[16px] gap-5 ">
                    <img
                      src={x.image}
                      className="w-[58px] h-[58px] border border-[#dd5580] rounded-full p-3 "
                      alt={x.image}
                    />
                    <h1 className="w-[271px] h-[25px] text-[#8c227d] text-[20px] leading-5 my-[15px] font-semibold">
                      {x.title}
                    </h1>
                    <p className="w-[301px] h-[92px] text-[14px] text-[#4a5568] ">
                      {x.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination ">
            <p className="w-6">0{activeIndex + 1}</p>
          </div>
          <div className="custom-pagination second ">
            <p className="w-6 font-semibold">0{TotalSlides}</p>
          </div>
          <div className="progress-bar-container ">
            <div
              className="progress-bar"
              style={{ width: `${progressPercentage}%` }}>
            </div>
          </div>
        </div>
        <div>
          <img className="absolute lg:top-[-30px] -z-10 left-[35%]" src={ellipse} alt={ellipse} />
          <img className="absolute top-[92%] left-[8%] -z-10" src={ellipse} alt={ellipse} />
        </div>
      </div>
    </>
  );
};

export default Services;
