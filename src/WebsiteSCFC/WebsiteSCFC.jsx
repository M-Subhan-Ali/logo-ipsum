import React from 'react'
import { DataWeb } from './DataWebsiteSCFC'
import Arrow from '../WebsiteSCFC/websiteSCFCimages/arrow.png';
const WebsiteSCFC = () => {
  return (
    <>
      <div className='w-full lg:ps-8  lg:pe-11 lg:mt-28 mb-4'>
            {DataWeb.map((x,i)=>(
                
            <div className='xl:w-full px-5 md:px-20 lg:flex xl:justify-center mb-10' key={i}>
            <div className='mb-6 lg:mb-0  lg:w-2/4'>
            <img src={x.image} className='mx-auto ' ></img>
            </div>
            <div className=' lg:pb-0  lg:w-2/4 px-5 lg:px-14 border border-gray-300 rounded-3xl lg:rounded-tr-3xl lg:rounded-br-3xl'>
               <div className='pt-10'>
                <h1 className='text-[28px] lg:pb-4 font-semibold text-[#2d3748] '>{x.title}</h1>
                <p className='text-[#4a5568]  lg:pb-5 text-[14px] leading-[22px] '>{x.description}</p> 
               <button className='flex text-[14px] items-center text-[#b0397e] font-semibold ps-[60%] md:ps-[70%] lg:ps-[80%]  '>Read More <img src={Arrow} className='w-4 items-center' ></img></button>
               </div>
            </div>
        </div>
        ))
            }
        <button className='flex text-[20px] items-center text-[#b0397e] font-bold mx-auto text-center lg:ps-[78%]  '>Read more case studies <img src={Arrow} className='w-7 items-center' ></img></button>

      </div>
    </>
  )
}

export default WebsiteSCFC
