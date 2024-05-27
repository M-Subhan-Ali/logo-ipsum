import React from 'react'
import Logo from '../Home/images/Logo.png'
const Nav = () => {
  return (
    <>
      <nav className='flex  top-0  bg-white   justify-between items-center fixed  w-full shadow-md  lg:pt-[10px] lg:pr-[25px] lg:pb-[10px] lg:pl-[25px] '>
        <div><img src={Logo} className='w-[180px] h-[59px]'  alt="Logo" /></div>
        <div className=' h-[45px] w-[645px] lg:pt-[10px] lg:pr-[0px] lg:pb-[10px] lg:pl-[0px] '>
          <ul className='cursor-pointer flex justify-between gap-[10px] text-gray-600 '>
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
        <div  ><button className='contact-us w-[124px] h-[42px] text-gray-50 rounded inter '>Contact us</button></div>
      </nav>
    </>
  )
}

export default Nav
