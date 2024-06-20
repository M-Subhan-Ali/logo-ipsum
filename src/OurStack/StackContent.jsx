import React from "react";
import nodejs from "../OurStack/Stackimages/node.png";
import php from "../OurStack/Stackimages/php.png";
import mysql from "../OurStack/Stackimages/mysql.png";
import java from "../OurStack/Stackimages/java.png";
import NETCore from "../OurStack/Stackimages/NETCore.png";
import python from "../OurStack/Stackimages/python.png";
import rails from "../OurStack/Stackimages/rails.png";
import Go from "../OurStack/Stackimages/Go.png";
import mongodb from "../OurStack/Stackimages/mongodb.png";
const StackContent = () => {
  return (
    <div className="mx-auto">
      <div className="lg:flex mx-auto lg:mx-32 lg:h-32 items-center justify-center ">
        <div className="lg:w-[166px] items-center lg:block py-4 flex justify-center lg:h-[94px] mx-auto">
          <img src={nodejs} className="" alt="" />
        </div>
        <div className="lg:w-[166px] items-center lg:block py-4 flex justify-center lg:h-[94px] mx-auto">
          <img src={php} className="" alt="" />
        </div>
        <div className="lg:w-[166px] items-center lg:block py-4 flex justify-center lg:h-[94px] mx-auto">
          <img src={mysql} className="" alt="" />
        </div>
        <div className="lg:w-[166px] items-center lg:block py-4 flex justify-center lg:h-[94px] mx-auto">
          <img src={java} className="" alt="" />
        </div>
        <div className="lg:w-[166px] items-center lg:block py-4 flex justify-center lg:h-[94px] mx-auto">
          <img src={NETCore} className="" alt="" />
        </div>
      </div>
      <div className="lg:flex lg:mx-80 lg:h-32 items-center">
        <div className="lg:w-[166px] lg:block py-4 flex justify-center items-center lg:h-[94px] pt-6 mx-auto">
          <img src={python} alt="" />
        </div>
        <div className="lg:w-[166px] lg:block py-4 flex justify-center items-center lg:h-[94px] pt-6 mx-auto">
          <img src={rails} alt="" />
        </div>
        <div className="lg:w-[166px] lg:block py-4 flex justify-center items-center lg:h-auto pt-6 mx-auto">
          <img src={Go} alt="" />
        </div>
        <div className="lg:w-[166px] lg:block py-4 flex justify-center items-center lg:h-[94px] pt-6 mx-auto">
          <img src={mongodb} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StackContent;
