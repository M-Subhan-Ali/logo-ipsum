import React from 'react'
import { DataWeb } from './DataWebsiteSCFC'
import Arrow from '../WebsiteSCFC/websiteSCFCimages/arrow.png';
const WebsiteSCFC = () => {
  return (
    <>
      <div className='w-full ps-8 pe-11 mt-28 mb-4'>
            {DataWeb.map((x,i)=>(
                
            <div className='w-full flex mb-10' key={i}>
            <div className='2/4'>
            <img src={x.image} className='' ></img>
            </div>
            <div className='w-2/4 px-14 pt-11 border border-gray-300 rounded-tr-3xl rounded-br-3xl'>
                <h1 className='text-[28px] font-semibold text-[#2d3748] '>{x.title}</h1>
                <p className='text-[#4a5568] text-[14px] leading-[22px] mt-8'>{x.description}</p>
               
                 <button className='flex text-[14px] items-center text-[#b0397e] font-semibold ps-[80%] mt-16 '>Read More <img src={Arrow} className='w-4 items-center' ></img></button>
                
            </div>
        </div>
        ))
            }
        <button className='flex text-[20px] items-center text-[#b0397e] font-bold ps-[78%]  '>Read more case studies <img src={Arrow} className='w-7 items-center' ></img></button>

      </div>
    </>
  )
}

export default WebsiteSCFC
