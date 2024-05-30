import React from 'react'
import line from '../FeaturedResources/FeaturedResourceimages/line.png';
import FeaturedSwiper from './FeaturedSwiper';
const FeaturedResource = () => {
  return (
    <div className='h-full'>
      <div className='text-center pb-10 mt-28 '>
          <img src={line} className='mx-auto pb-5' alt="line-image" />
          <h1 className='text-4xl leading-[55px] text-[#1a202c]'>Featured 
          <br></br>
          <span className='font-[700]'>Resources</span></h1>
        </div>
        <div>
          <FeaturedSwiper/>
        </div>
    </div>
  )
}

export default FeaturedResource
