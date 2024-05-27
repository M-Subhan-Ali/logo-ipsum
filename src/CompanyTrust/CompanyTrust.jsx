import React from 'react'
import line from '../Home/images/Deco-line.png';
import arrow from '../Home/images/Group.png';
import groupPhoto from '../Home/images/Abou-us-Video.png';

const CompanyTrust = () => {
  return (
    <>
      <div className='w-full h-full mt-9'>
        <div className='flex gap-12 lg:py-44 lg:px-28'>
          <div className='left w-[50%]'>
            <img src={line} className='w-[69px] h-[5px] mb-5' alt="" />
            <h1 className='w-[474px] h-[108px]  text-4xl lg:mb-[18px]'>Leading companies trust us <span className='text-[#1a202c] font-bold leading-[55px]'>to develop software</span></h1>
            <p className='text-[18px] leading-9 text-[#718096] font-medium'>We <span className='text-[#b0397e]'>add development capacity </span> to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.    
            </p>
            <p className='w-auto text-[#57007b] font-semibold mt-11'>See more Informations <img className='inline-block' src={arrow}></img></p>
          </div>
          <div className='right w-[50%] '>
            <img src={groupPhoto} alt="groupphoto" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanyTrust
