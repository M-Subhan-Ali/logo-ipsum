import line from "../Home/images/Deco-line.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { SponsorsData } from "../Sponsors/SponsorsData.jsx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import leftArrow from "../Sponsors/Sponsorimages/left.png";
import RightArrow from "../Sponsors/Sponsorimages/right.png";
import ellipse from "../Home/images/Ellipse.png";

const Sponsors = () => {
  return (
    <>
      <div className="w-full z-20 mt-10">
        <div className="lg:flex  lg:justify-between">
          <div className="lg:ps-28 px-5">
            <img src={line} className="  pb-4" alt="line" />
            <h1 className=" text-4xl leading-[55px]  text-[#1a202c]">
              Meet the People <br></br>
              <b>We are Working With</b>
            </h1>
          </div>
          <div className="flex xs:gap-36 m:gap-[70%] lg:gap-0  mt-3">
            <button className="left inline-block">
              <img src={leftArrow} className="lg:mx-16 ps-8 md:w-auto m:w-28 lg:ms-28" alt="left" />
            </button>
            <button className="right inline-block">
              <img src={RightArrow} className="mt-7   " alt="right" />
            </button>
          </div>
        </div>
      </div>
      <div
        className="relative lg:mt-16 border lg:flex lg:items-center pt-4 w-full   border-x-gray-300  lg:h-52 border-b-gray-300"
        style={{
          background:
            "linear-gradient(rgba(249, 249, 255, 1), rgba(249, 249, 255, 1))",
        }}
      >
        <Swiper
          loop={true}
          modules={[Navigation]}
          navigation={{ nextEl: ".right", prevEl: ".left" }}
          breakpoints={
            {
              0:{
                slidesPerView:2
              },
              768:{
                slidesPerView:5
              }
            }
          }
        >
          {SponsorsData.map((x, i) => (
            <div key={i} className="">
              <SwiperSlide key={i}>
                <img
                  src={x.image}
                  className=" lg:w-auto lg:h-auto  "
                  alt="iamges"
                ></img>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
        <img
          src={ellipse}
          className="absolute w-11 h-11 lg:w-auto lg:h-auto -top-6 left-[60%] -z-10"
          alt="ellipse"
        />
      </div>
    </>
  );
};

export default Sponsors;
