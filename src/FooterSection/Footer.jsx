import React from "react";
import Logo from "../FooterSection/FooterImages/Logo.png";
import google from "../FooterSection/FooterImages/google.png";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="lg:ps-[90px] border border-b-gray-300 pb-20">
        <div className="px-5 lg:flex lg:gap-24">
          <div>
            <img
              src={Logo}
              className="w-60 lg:w-[123px] mx-auto lg:mx-0"
              alt="Logo-Image"
            />
            <p className="text-[#718096] text-center lg:text-left text-xs lg:text-[18px] leading-[30px]">
              Lorem Ipsum is simply dummy text of the <br></br> printing and
              typesetting industry.{" "}
            </p>
            <img
              src={google}
              className="w-[199px] border mx-auto lg:mx-0 border-gray-300 mt-8 "
              alt="GoogleImage"
            />
          </div>
          <div className="text-center lg:text-left">
            <p className="mt-12 lg:mt-0 w-12 mx-auto lg:mx-0 font-[700] text-[#4a5568]">
              Links
            </p>
            <ul className="mt-[16px] text-[16px] leading-9 text-[#718096] cursor-pointer">
              <li>About Us</li>
              <li>Services</li>
              <li>Case Studies</li>
              <li>How it Works</li>
              <li>Blog Careers</li>
              <li>Areas We Serve</li>
            </ul>
          </div>
          <div>
            <p className="w-[96px] my-5 lg:my-0 font-[700] text-[#4a5568]">
              Contact Us
            </p>
            <p className="mt-[16px] text-[16px] leading-6 text-[#718096] cursor-pointer">
              Lorem Ipsum is simply dummy text <br></br> of the printing and
              typesetting<br></br> industry.{" "}
            </p>
            <p className="mt-[16px] text-[16px] leading-6 text-[#718096] cursor-pointer">
              +908 89097 890
            </p>
          </div>
          <div className="lg:relative pt-9 lg:pt-0  ">
            <div className="flex gap-8  justify-center lg:absolute    lg:bottom-0 cursor-pointer">
              <FaFacebookF />
              <CiInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-9 ">
        <p className="text-[14px] text-center cursor-not-allowed font-[400] text-[#4a5568]">
          © 2023 Copyright by Agency Solutions. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
