import React from 'react'
import StraightLine from '../BuildingSoftwareSection/BuildingSoftwareImages/straightLine.png';
const LeftSide = ({person}) => {
  return (
    <div className='left w-1/2'>
    <p className='text-[28px] text-[#1a202c] font-bold pb-[30px]'>Build the right team to scale</p>
    <p className='text-[18px] leading-7 w-[534px] pb-[30px]'>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers</p>
    <p className='text=[#2d3748] text-[18px] font-[400] pb-[30px]'>Our <span className='text-[#b0397e] pb-[30px] leading-7'>delivery model</span>  helps you cut costs and deliver within <br></br> budget.</p>
    <div className='flex items-center gap-4 pb-[25px]'><img src={StraightLine} className='w-[3px] h-[87px]' alt="straightline" /> 
    <p className='w-[435px] text-[#ab488d] font-[300] text-[16px] leading-[30px]'>"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"</p>
    </div>
    <div className='text-[16px] flex gap-[10px] items-center'>
      <img src={person}  className="w-[41px] h-[41px]" alt="Person1" />
     <div>
       <p className='text-[#1a202c] pb-[5px]' >Jeewa markram</p>
      <p className='text-[#718096]'>CEO</p>
      </div>
    </div>
    </div>
  )
}

export default LeftSide
