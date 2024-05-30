import React from 'react'
import {DevWorkData} from '../DevWorkData.jsx'
import line5 from '../DevWorkimages/Line5.png';
import straightLine from '../DevWorkimages/strtLine.png';
import trophy from '../DevWorkimages/trophy.png';
const DevWorkMap = () => {
  const evenImageCount=0;
  const oddimageCount=0;
  return (
    <div className='flex-col columns-3 mx-20 relative'>
    {DevWorkData.map((x,i)=>(
        <div key={i} className={`${x.id%2===0 ? "ms-24":""} ${x.id%2===0?"relative":""} ${x.id%2===1?"relative" :""} w-[299px] cursor-pointer h-40 border mb-24 border-gray-300 rounded-xl`}>
        <div className="py-4 ps-5">
      <div className='  flex gap-[10px]'>
        <p className='text-[#c6477f] text-[18px] font-[700]'>#{x.id}</p><p className='font-[700]  h-[22px]  text-[#1a202c] text-[18px]'>{x.title}</p> 
      </div>
      <p className='leading-5 pt-[15px] text-[14px] font-[400] text-[#718096]'>{x.description}</p>
        </div>
       {x.id%2===0 && evenImageCount < 3 &&( <img src={straightLine} className='absolute top-[-46px] left-36' alt="straighLine" />)}
        {x.id%2===1 && oddimageCount < 3 &&(<img src={straightLine} className='absolute top-[179px] left-[150px]' alt="straighLine" />) }

    </div>
    ))
    }
    
    <img src={line5} className='absolute left-0 top-52 ' alt="line-long" />
    <img src={trophy} alt="trophyImage" className='absolute top-[188px] right-[-40px]'/>
    </div>
  )
}

export default DevWorkMap
