import React, { useState } from "react";
import line from "../OurStack/Stackimages/line.png";
import StackContent from "./StackContent";
const OurStack = () => {
  const [color, setColor] = useState("Backend");
  const menuItems = [
    { name: "Backend", key: "Backend" },
    { name: "Frontend", key: "Frontend" },
    { name: "Databases", key: "Databases" },
    { name: "CMS", key: "CMS" },
    { name: "CloudTesting", key: "CloudTesting" },
    { name: "DevOps", key: "DevOps" },
  ];

  const On = (x) => {
    setColor(x);
  };
  return (
    <>
      <div className="border border-b-gray-300 mb-10 pb-20 ">
        <div className="text-center pb-10 mt-28 ">
          <img src={line} className="mx-auto pb-5" alt="line-image" />
          <h1 className="text-4xl leading-[55px] text-[#1a202c]">
            Our
            <br></br>
            <span className="font-[700]">Tech Stack</span>
          </h1>
        </div>
        <div className="relative">
          <ul className="text-[#1a202c] text-center  font-[400] flex flex-col lg:flex-row lg:gap-[60px] lg:justify-center">
            {menuItems.map((item) => (
              <li
                onClick={() => On(item.name)}
                className={`text-[18px] cursor-pointer pb-3 lg:pb-0 ${
                  color === item.key ? "text-[#c1437e]" : ""
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <img
            src={line}
            className="absolute hidden lg:block left-[315px] top-6 rounded w-6 h-1 "
            alt="line"
          />
        </div>
        <div className="mt-24">
          <StackContent />
        </div>
      </div>
    </>
  );
};

export default OurStack;
