import React from 'react'
import Logo from '../FooterSection/FooterImages/Logo.png';
import google from '../FooterSection/FooterImages/google.png';
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <div className='ps-[105px] border border-b-gray-300 pb-20'>
      <div className='flex gap-24'>
        <div>
            <img src={Logo} className='w-[123px] ' alt="Logo-Image" />
            <p className='text-[#718096] text-[18px] leading-[30px]'>Lorem Ipsum is simply dummy text of the <br></br> printing and typesetting industry. </p>
           <img src={google} className='w-[199px] border border-gray-300 mt-8 ' alt="GoogleImage" />
        </div>
        <div> 
          <p className='w-12 font-[700] text-[#4a5568]'>Links</p>
          <ul className='mt-[16px] text-[16px] leading-9 text-[#718096] cursor-pointer'>
            <li>About Us</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>How it Works</li>
            <li>Blog Careers</li>
            <li>Areas We Serve</li>
            <li></li>
          </ul>
        </div>
        <div>
        <p className='w-[96px] font-[700] text-[#4a5568]'>Contact Us</p>
        <p className='mt-[16px] text-[16px] leading-6 text-[#718096] cursor-pointer'>Lorem Ipsum is simply dummy text <br></br> of the printing and typesetting<br></br> industry. </p>
        <p className='mt-[16px] text-[16px] leading-6 text-[#718096] cursor-pointer'>+908 89097 890</p>
        </div>
        <div className='relative'>
          <div className='flex gap-8 absolute bottom-0 cursor-pointer'>
          <FaFacebookF/>
          <CiInstagram/>
          <FaTwitter/>
          <FaLinkedinIn/>
          </div>
        </div>
      </div>
    </div>
      <div className='w-full py-9 '>
        <p className='text-[14px] text-center cursor-not-allowed font-[400] text-[#4a5568]'>© 2023 Copyright by Agency Solutions. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer
