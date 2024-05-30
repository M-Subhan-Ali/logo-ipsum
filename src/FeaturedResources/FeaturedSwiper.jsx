import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import photo from "../FeaturedResources/FeaturedResourceimages/photo.png";
import arrow from "../FeaturedResources/FeaturedResourceimages/arrow.png";
import { FeaturedData } from "../FeaturedResources/FeaturedData.jsx";

const FeaturedSwiper = () => {
  return (
    <div className="flex gap-[60px] overflow-hidden">
      {FeaturedData.map((x, i) => (
      

        <div key={i} className="w-64 h-[315px]">
          <img
            src={x.image}
            className=" h-[175px] w-full pb-5 rounded-md"
            alt="photo"
          />
          <p className="text-[16px] font-[500] pb-5 text-[#2d3748] leading-6">
            How to Build a Scalable Application up to 1 Million Users on AWS
          </p>
          <div className="w-[122px] ms-[50%] h-6">
            <p className="flex justify-between text-[#57007b] font-[500] text-[16px]">
              Read More <img src={arrow} className="nexttArrow" alt="arrow" />{" "}
            </p>
          </div>
        </div>
       
      ))}
    </div>
  );
};

export default FeaturedSwiper;
