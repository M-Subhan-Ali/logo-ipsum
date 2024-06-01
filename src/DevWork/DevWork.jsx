import React from 'react'
import line from '../DevWork/DevWorkimages/line.png';
import DevWorkMap from './DevWorkimages/DevWorkMap';
const DevWork = () => {
  return (
    <div>
      <div className='text-center pb-10 mt-28 '>
          <img src={line} className='mx-auto pb-5' alt="line-image" />
          <h1 className='text-3xl lg:text-4xl leading-[55px] text-[#1a202c]'>How development 
          <br></br>
          <span className='font-[700]'>through Alcaline works</span></h1>
        </div> 
        <div>
            <DevWorkMap/>
        </div>
    </div>
  )
}

export default DevWork
