import React from 'react'
import line from '../OurStack/Stackimages/line.png';
import stack from "../OurStack/Stackimages/stacks.png";
const OurStack = () => {
  return (
    <>
    <div className='border border-b-gray-300 mb-10 pb-20 '>

     <div className='text-center pb-10 mt-28 '>
          <img src={line} className='mx-auto pb-5' alt="line-image" />
          <h1 className='text-4xl leading-[55px] text-[#1a202c]'>Our
          <br></br>
          <span className='font-[700]'>Tech Stack</span></h1>
        </div> 
        <div className='relative' >
          <ul className='text-[#1a202c] font-[400] flex gap-[60px] justify-center'>
            <li className='text-[18px] text-[#c1437e] font-[600] '>Backend</li>
            <li className='text-[18px] '>Frontend</li>
            <li className='text-[18px] '>Databases</li>
            <li className='text-[18px] '>CMS</li>
            <li className='text-[18px] '>CloudTesting</li>
            <li className='text-[18px] '>DevOps</li>
            </ul>
            <img src={line}  className='absolute left-[315px] top-6 rounded w-6 h-1 ' alt="line"  />
        </div>
        <div><img src={stack} className='mx-auto mt-16' alt="stack-img" /></div>
    </div>
    </>
  )
}

export default OurStack
