import React, { useState } from "react";
import Logo from "../Home/images/Logo.png";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Nav = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="">
        <div className="flex justify-between shadow-md fixed top-0 w-full z-50 bg-white items-center lg:py-2 lg:px-4 lg:h-24">
          <div className="img w-[180px]">
            <img src={Logo} className="w-[180px]  " alt="Logo" />
          </div>
          <div className="lists hidden lg:block">
            <ul className="pt-3 cursor-pointer flex justify-between  gap-10 text-gray-600">
              <li>About Us</li>
              <li>Services</li>
              <li>Case Studies</li>
              <li>Blog</li>
              <li>How it Works</li>
              <li>Hire</li>
            </ul>
          </div>
          <div className="contact-btn hidden lg:block">
            <button className="contact-us w-[124px] h-[42px] text-gray-50 rounded inter ">
              Contact us
            </button>
          </div>
          <div className="icon lg:hidden">
            {show ? (
              <ImCross
                onClick={() => setShow(!show)}
                className=" pr-3 text-4xl "
              />
            ) : (
              <FaBars
                onClick={() => setShow(!show)}
                className="pr-3 text-4xl"
              />
            )}
          </div>
        </div>
        {show && (
          <div className="lists lg:hidden   ">
            <ul className="mt-36 cursor-pointer flex flex-col justify-between ps-14 gap-14 text-xl text-gray-600">
              <li>About Us</li>
              <li>Services</li>
              <li>Case Studies</li>
              <li>Blog</li>
              <li>How it Works</li>
              <li>Hire</li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
