import React, { useState } from 'react'
import Logo from '../Home/images/Logo.png'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const Nav = () => {
  const [show,setShow]=useState(false);
  return (
    <>
    <nav className=''>
      <div className='flex justify-between shadow-md fixed top-0 w-full z-50 bg-white items-center lg:py-2 lg:px-4 lg:h-24'>
        <div className='img w-[180px]'><img src={Logo} className='w-[180px]  ' alt="Logo" /></div>
        <div className='lists hidden lg:block'>
          <ul className='pt-3 cursor-pointer flex justify-between  gap-10 text-gray-600'>
            <li>
            About Us
            </li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Blog</li>
            <li>How it Works</li>
            <li>Hire</li>
          </ul>
        </div>
        <div className='contact-btn hidden lg:block' ><button className='contact-us w-[124px] h-[42px] text-gray-50 rounded inter '>Contact us</button>
</div>
     <div className='icon lg:hidden'>
     {show?(<ImCross onClick={()=>setShow(!show)} className=' pr-3 text-4xl ' />):
       (<FaBars onClick={()=>setShow(!show)} className='pr-3 text-4xl' />) }
     </div>
      </div>
     {show && <div className='lists lg:hidden   '>
          <ul className='mt-36 cursor-pointer flex flex-col justify-between ps-14 gap-14 text-xl text-gray-600'>
            <li>
            About Us
            </li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Blog</li>
            <li>How it Works</li>
            <li>Hire</li>
          </ul>
        </div>}


    </nav>
    
      {/* <nav className='md:flex   z-50 xs:w-[320px] md:w-[768px] lg:w-full top-0 overflow-hidden  bg-white   justify-between items-center fixed  shadow-lg  lg:pt-[10px] lg:pr-[25px] lg:pb-[10px] lg:pl-[25px] '>
        <div><img src={Logo} className='xs:w-[140px] l:w- md:w-[90px] lg:w-[180px] h-[59px]'  alt="Logo" /></div>
      <div className='absolute top-5 right-1 xs:text-xl text-2xl '>
        {show?(<ImCross onClick={()=>setShow(!show)} className='lg:hidden' />):
       (<FaBars onClick={()=>setShow(!show)} className='lg:hidden' />) }
        </div> 
        <div className={` hidden lg:block lg:h-[45px] ps-4 lg:ps-0 lg:w-[645px] pt-[10px] lg:pr-[0px] pb-[10px] lg:pl-[0px]`} >
          <ul className='cursor-pointer flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-[10px] text-gray-600 '>
            <li>
              About us
            </li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Blog</li>
            <li>How it Works</li>
            <li>Hire</li>
          </ul>
        </div>
        <div className='hidden lg:block'  ><button className='contact-us w-[124px] h-[42px] text-gray-50 rounded inter '>Contact us</button></div>
      </nav>
        {show && <div className={` ${show ? 'block':'hidden'} shadow-md mt-16 overflow-hidden static md:hidden w-[100vw]   ps-8 lg:ps-0 lg:w-[645px] pt-[15px] lg:pr-[0px] pb-[15px] lg:pl-[0px]`} >
          <ul className='cursor-pointer flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-[10px] text-gray-600 '>
            <li>
              About us
            </li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Blog</li>
            <li>How it Works</li>
            <li>Hire</li>
          </ul>
        </div>} */}
    </>
  )
}

export default Nav
