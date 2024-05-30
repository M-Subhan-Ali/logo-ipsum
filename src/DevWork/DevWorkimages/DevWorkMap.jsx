import React from 'react'
import {DevWorkData} from '../DevWorkData.jsx'
import line5 from '../DevWorkimages/Line5.png';
import straightLine from '../DevWorkimages/strtLine.png';
import trophy from '../DevWorkimages/trophy.png';
const DevWorkMap = () => {
  return (
    <div className='flex-col columns-3 mx-20 relative'>
    {DevWorkData.map((x,i)=>(
        <div key={i} className={`${x.id%2===0 ? "ms-24":""} w-[299px] cursor-pointer h-40 border mb-24 border-gray-300 rounded-xl`}>
        <div className="py-4 ps-5">
      <div className='  flex gap-[10px]'>
        <p className='text-[#c6477f] text-[18px] font-[700]'>#{x.id}</p><p className='font-[700]  h-[22px]  text-[#1a202c] text-[18px]'>{x.title}</p> 
      </div>
      <p className='leading-5 pt-[15px] text-[14px] font-[400] text-[#718096]'>{x.description}</p>
        </div>
    </div>
    ))
    }
    
    <img src={line5} className='absolute left-0 top-52 ' alt="line-long" />
    <img src={straightLine} className='absolute top-[179px] left-36' alt="straighLine" />
    <img src={straightLine} className='absolute top-[210px] left-60' alt="straighLine" />
    <img src={straightLine} className='absolute top-[179px] left-[550px]' alt="straighLine" />
    <img src={straightLine} className='absolute top-[210px] left-[640px]' alt="straighLine" />
    <img src={straightLine} className='absolute top-[179px] left-[950px]' alt="straighLine" />
    <img src={straightLine} className='absolute top-[210px] left-[1025px]' alt="straighLine" />
    <img src={trophy} alt="trophyImage" className='absolute top-[188px] right-[-40px]'/>
    </div>
  )
}

export default DevWorkMap
{/* <div>
    <div className='w-[299px] h-40 border border-gray-300 rounded-xl'>
        <div className='py-5 px-4'>
      <div className='  flex gap-[10px]'>
        <p className='text-[#c6477f] text-[18px] font-[700]'>#1</p><p className='font-[700] w-[245px] h-[22px]  text-[#1a202c] text-[18px]'>Assemble the right team</p> 
      </div>
      <p className='leading-5 pt-[15px] text-[14px] w-[245px]'>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
        </div>
    </div>
    </div> */}