import React from 'react'
import web from '../Home/images/web-development 1.png'
const Started = () => {
  return (
    <>
     <div className='mt-[95px]  '>
     <div className="main w-full sm:pl-[104px] lg:justify-between lg:flex">
        <div className='left  flex-col   lg:mt-24'>
        <div className='mt-12  sm:mt-0 px-5 lg:px-0'>
             <h1 className='font-[700] text-2xl  lg:text-[45px] lg:leading-[71px] text-[#1a202c] lg:px-5 sm:px-0 '>Great <span className='text-[#af387e]'>software </span> is <br></br> <b className='font-extrabold  text-2xl lg:text-[52px]'> built by great <span className='text-[#af387e]'>teams</span></b> </h1>
        </div>
        <div className='lg:mt-5 py-5  mx-5 lg:mx-0'>
            <p className='text-[16px] lg:text-[18px] text-[#4a5568] leading-7 lg:leading-9 '>We help build and manage a team of world-class developers to bring your vision to life</p>
        </div>
        <div className='lg:mt-16 ps-4 lg:ps-0'>
            <button className='lg:w-[175px] lg:h-[52px] py-3 lg:py-0 px-2 lg:px-2 rounded bg-[#57007b] text-white text-center '><span className='lg:text-[14px]'>Let’s get started!</span></button>
        </div>
        </div>
        <div className=''>
         <img src={web} className='w-full' alt="web-image" />
        </div>
     </div>
    </div> 
    </>
  )
}

export default Started
