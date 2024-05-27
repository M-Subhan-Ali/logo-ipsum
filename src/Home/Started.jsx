import React from 'react'
import web from '../Home/images/web-development 1.png'
const Started = () => {
  return (
    <>
     <div className='lg:mt-[80px] '>
     <div className="main   lg:mt-[148px] lg:ml-[104px] flex">
        <div className='left  flex-col   lg:mt-24'>
        <div>
             <h1 className='h2 font-thin text-[#1a202c] '>Great <span className='text-[#af387e]'>software </span> is <br></br> <b className='font-extrabold  lg:text-[52px]'> built by great <span className='text-[#af387e]'>teams</span></b> </h1>
        </div>
        <div className='lg:mt-5'>
            <p className='text-[18px] text-[#4a5568] leading-9 '>We help build and manage a team of world-class developers to bring your vision to life</p>
        </div>
        <div className='lg:mt-16'>
            <button className='lg:w-[175px] lg:h-[52px] rounded bg-[#57007b] text-white text-center '><span className='lg:text-[14px]'>Let’s get started!</span></button>
        </div>
        </div>
        <div>
         <img src={web} className='w-auto' alt="web-image" />
        </div>
     </div>
    </div> 
    </>
  )
}

export default Started
