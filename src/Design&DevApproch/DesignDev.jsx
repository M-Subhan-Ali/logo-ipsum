import React from 'react'
import Left from "../Design&DevApproch/Left.jsx";
import line from '../Design&DevApproch/Dev&DesignImages/line.png';

const DesignDev = () => {
  return (
    <>
      <div className='mt-40 border pt-24 pb-24 bg-[#f7f7fa] border-t-gray-300  border-b-gray-300 '>
      <div className='text-center pb-20 '>
          <img src={line} className='mx-auto pb-5' alt="line-image" />
          <h1 className='text-4xl leading-[55px] text-[#1a202c]'>Our design and
          <br></br>
          <span className='font-bold'> development approach </span></h1>
        </div>
        <div className='mx-auto'>
            <Left/>
        </div>
      </div>
    </>
  )
}

export default DesignDev
