import React from 'react'
import Line from '../Home/images/Deco-line.png';
import leftQuote from '../Home/images/left Quotes.png';
import rightQuote from '../Home/images/right Quotes.png';
import {CustomerData} from '../Customers/CustomersData.jsx';
import Star from '../Customers/Customers-images/Star_perspective_matte.png';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation,FreeMode } from 'swiper/modules';
import right from '../Customers/Customers-images/btnr.png'
import left from '../Customers/Customers-images/btn.png'
import arrowUp from '../Customers/Customers-images/arrowup.png';
import arrowDown from '../Customers/Customers-images/arrowdown.png';
import Ellipse from '../Home/images/Ellipse.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';


const Customers = () => {
  return (
    <>
      <div className='w-full h-full mt-40'>
       <div className='px-[51px]'>
        <div className='flex flex-col items-center relative '>
        <img src={Line} className='w-[69px]' alt="Decoration-Line" />
        <h1 className='text-4xl text-center leading-[55px]'>Why cutomers love <br></br>
        <b> working with us</b></h1>
        <p className=' text-xl w-[575px] mt-16 text-center  leading-9 text-[#718096] ' >Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.
        </p>
        <img src={leftQuote}   className='absolute left-[20%]  top-40' alt="LeftQuote" />
        <img src={rightQuote} className='absolute right-[20%] top-72' alt="rightQuote" />
        </div>
       <div className='w-auto ' >

       <Swiper slidesPerView={5}
       modules={[FreeMode,Navigation]}
       navigation={{prevEl:'.Left',nextEl:".Right"}}
       centeredSlides={true}
       freeMode={{clickable:true}}
       loop={true}
       className="mySwiper"
       >
        {CustomerData.map((x,i)=>(
            <div className=' mx-auto' key={i}>

            <SwiperSlide key={i}>
            <div className='mx-4  '>
            <img src={x.image}></img>
            <div>
                <div className='flex' >
                {Array.from({length:5},(_,ii)=>(
                    <div key={ii}>
                        <img src={Star} alt={`Star ${ii}`} ></img>

                    </div>
                ))}
                    </div> 
                <h1 className='text-[#57007b] text-[18px] font-semibold'>{x.name} </h1>
                <p>{x.description}</p>
            </div>
            </div>
        </SwiperSlide>
            </div>
        ))
    }
       </Swiper>
    </div>
    </div>
    <div className='flex relative'>
        <button className='Left absolute top-[-320px] left-20'><img src={left}></img></button>
        <button className='Right absolute top-[-350px] right-20'><img src={right}></img></button>
    </div>
    <div className='relative'>
  <img src={arrowUp} className='absolute top-10' alt="arrowup" />
  <img src={arrowDown} className='absolute top-10 right-40' alt="arrowdown" />
  <img src={Ellipse} className='absolute top-60 left-64 w-[18px]' alt="Ellipse" />
    </div>
    <div className=' mx-auto mt-64 '>
  <img src={Line} className=' mx-auto mb-5 '  alt="Line" />
  <h1 className='text-4xl text-center leading-[50px] text-[#1a202c] mb-5'>Our recent  <br></br>
 <b className='font-bold leading-[50px] '> Case studies  </b></h1>
    </div>
      </div>
    </>
  )
}

export default Customers
