import line from "../Home/images/Deco-line.png";
import {Swiper,SwiperSlide} from 'swiper/react';
import {SponsorsData} from '../Sponsors/SponsorsData.jsx'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Navigation } from 'swiper/modules'
import  leftArrow from '../Sponsors/Sponsorimages/left.png';
import  RightArrow from '../Sponsors/Sponsorimages/right.png';
import ellipse from "../Home/images/Ellipse.png";


const Sponsors = () => {
  return (
    <>
      <div className="w-full z-20"  >
       <div className="flex justify-between">
        <div className="">

         <img src={line} className="ps-28 pb-4" alt="line" />
        <h1 className=" text-4xl leading-[55px] ps-28 text-[#1a202c]">
          Meet the People <br></br>
          <b>We are Working With</b>
        </h1>
        </div>
        <div className="flex  mt-3">
            <button className="left inline-block"><img src={leftArrow} className="ms-28" alt="left" /></button>
            <button className="right inline-block"><img src={RightArrow} className="mt-7  " alt="right" /></button>
        </div>
        </div>
      </div>
      <div className=" mt-16 border flex items-center  border-x-gray-300 h-52 border-b-gray-300" style={{background:"linear-gradient(rgba(249, 249, 255, 1), rgba(249, 249, 255, 1))"}}>
        <Swiper slidesPerView={5}
        loop={true}
        modules={[Navigation]}
        navigation={{nextEl:".right",prevEl:".left"}}> 
            {SponsorsData.map((x,i)=>(
                <div key={i} className="">
            <SwiperSlide key={i}>
             <img src={x.image} alt="iamges"></img>
            </SwiperSlide>
                </div>
            ))
            }
        </Swiper>
      </div>
      <div className="relative"><img src={ellipse} className="absolute top-[-245px] left-[60%] -z-10" alt="ellipse" /></div>
    </>
  );
};

export default Sponsors;
