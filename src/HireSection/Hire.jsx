import React from "react";
import hire from "../HireSection/hire.png";
import Lines from "../HireSection/lines6.png";
const Hire = () => {
  return (
    <div className=" lg:px-[105px] my-24">
      <div className="pb-28 lg:pb-0 lg:ps-[105px]  w-full lg:h-72 rounded-3xl bg-[#edf0f6] lg:flex lg:gap-36 lg:justify-between  lg:items-center ">
        <div className="w-full pb-24 text-center lg:text-left  lg:pb-0">
          <p className="text-2xl lg:text-[35px]  lg:leading-[55px]  lg:w-[531px] lg:h-[110px] font-[700] ">
            Hire the best developers and <br></br> designers around!
          </p>
        </div>
        <div className="w-full">
          {/* for bigger screen */}
          <div className="relative hidden lg:block">
            <img src={hire} className=""></img>
            <img
              src={Lines}
              className="absolute lg:-top-[110%]  lg:left-[17%] xl:left-[6%] md:-top-[310%] md:left-[15%]"
              alt="lines"
            />
          </div>
          {/* for smaller screens */}
          <div className="relative w-full lg:hidden ">
            <img src={hire} className="mx-auto"></img>
            <img
              src={Lines}
              className="absolute -top-[100%] left-[30%] l:left-[35%] md:left-[43%]  "
              alt="lines"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
