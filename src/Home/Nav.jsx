import React, { useState } from 'react'
import Logo from '../Home/images/Logo.png'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const Nav = () => {
  const [show,setShow]=useState(false);
  return (
    <>
      <nav className='md:flex w-[320px]  overflow-hidden md:w-full top-0 mb-16 bg-white   justify-between items-center fixed  shadow-md  md:pt-[10px] md:pr-[25px] md:pb-[10px] md:pl-[25px] '>
        <div><img src={Logo} className='w-[180px] h-[59px]'  alt="Logo" /></div>
      <div className='absolute top-5 right-2 text-2xl '>
        {show?(<ImCross onClick={()=>setShow(!show)} className='md:hidden' />):
       (<FaBars onClick={()=>setShow(!show)} className='md:hidden' />) }
        </div> 
        {show && <div className={`relative ${show ? 'block':'hidden'} md:block md:h-[45px] ps-4 md:ps-0 md:w-[645px] pt-[10px] md:pr-[0px] pb-[10px] md:pl-[0px]`} >
          <ul className='cursor-pointer flex flex-col md:flex-row md:justify-between gap-6 md:gap-[10px] text-gray-600 '>
            <li>
              About us
            </li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Blog</li>
            <li>How it Works</li>
            <li>Hire</li>
          </ul>
        </div>}
        <div className='hidden md:block'  ><button className='contact-us w-[124px] h-[42px] text-gray-50 rounded inter '>Contact us</button></div>
      </nav>
    </>
  )
}

export default Nav
