import React from 'react'
// import rocket from "../Design&DevApproch/Dev&DesignImages/rocket.png"
// import black from "../Design&DevApproch/Dev&DesignImages/black.png"
import {DesignData} from "../Design&DevApproch/Design&DevData.jsx"; 
const left = () => {
    console.log(DesignData)
  return (
    <div className='flex ps-14 flex-wrap  w-full gap-8'>

       {DesignData.map((x,i)=>(
           <div key={i} className=' relative  border w-[600px] cursor-pointer  h-[237px] flex items-center  border-gray-300' >
         
           <div className=' flex items-center ps-[34px]'>
        <img src={x.image}  className='absolute z-10 left-12 w-[34px] h-[35px]' alt="image" />
        <img src={x.backgroundImage} className='absolute w-[59px] h-[56px]' alt="images" />
        </div>
      <div className='ps-20'>
       <p className='text-[#1a202c] text-xl font-[600] leading-7 pb-[10px]'>{x.title}</p>
       <p className='text-[14px] text-[#4a5568] leading-[22.5px] font-[400]'>Unlike other companies, we are a <span className={x.color} >UX first</span>  development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
      </div>
    </div>
         
        ))
    }
    </div>
  )
}

export default left
