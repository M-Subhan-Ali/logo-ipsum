import React from 'react'
import hire from '../HireSection/hire.png';
import Lines from '../HireSection/lines6.png';
const Hire = () => {
  return (
    <div className=' px-[105px] my-24'>
        <div className='ps-[105px] w-full h-72 rounded-3xl bg-[#edf0f6] flex gap-36 justify-between  items-center '>
      <div className='w-full '>
        <p className='text-[35px] leading-[55px]  w-[531px] h-[110px] font-[700] '>Hire the best developers and <br></br> designers around!</p>
      </div>
      <div className='w-full'>
        <div className='relative'>
        <img src={hire} className=''>
        </img>
        <img src={Lines} className='absolute -top-[110%] left-[17%]'  alt="lines" />
        </div>
      </div>

        </div>
    </div>
  )
}

export default Hire
