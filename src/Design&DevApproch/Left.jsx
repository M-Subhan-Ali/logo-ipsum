import React from "react";

import { DesignData } from "../Design&DevApproch/Design&DevData.jsx";
const left = () => {
  return (
    <div className="lg:flex px-5 lg:px-0 lg:ps-14 lg:flex-wrap  w-full gap-8">
      {DesignData.map((x, i) => (
        <div
          key={i}
          className=" relative mb-7 lg:mb-0 border lg:w-[600px] cursor-pointer  lg:h-[237px] lg:flex lg:items-center  border-gray-300"
        >
          <div className="hidden  lg:flex lg:items-center  lg:ps-[34px]">
            <img
              src={x.image}
              className="absolute z-10  lg:left-12 w-[34px] h-[35px]"
              alt="image"
            />
            <img
              src={x.backgroundImage}
              className="absolute  w-[59px] h-[56px]"
              alt="images"
            />
          </div>
          <div className="lg:hidden ps-2 pt-2    ">
            <img
              src={x.image}
              className="absolute z-10 top-5 left-5 w-[34px] h-[35px]"
              alt="image"
            />
            <img
              src={x.backgroundImage}
              className="absolute  w-[59px] h-[56px]"
              alt="images"
            />
          </div>
          <div className="lg:ps-20 px-2 lg:px-0 pt-20 pb-4 lg:pb-0 lg:pt-0">
            <p className="text-[#1a202c] text-xl font-[600] leading-7 pb-[10px]">
              {x.title}
            </p>
            <p className="text-[14px] text-[#4a5568] leading-[22.5px] font-[400]">
              Unlike other companies, we are a{" "}
              <span className={x.color}>UX first</span> development company.
              Projects are driven by designers and they make sure design and
              experiences translate to code.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default left;
