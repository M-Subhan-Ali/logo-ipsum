import React from 'react'
import line from '../BuildingSoftwareSection/BuildingSoftwareImages/line.png';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import people from "../BuildingSoftwareSection/BuildingSoftwareImages/people.png";
import people1 from "../BuildingSoftwareSection/BuildingSoftwareImages/people1.png";
import people2 from "../BuildingSoftwareSection/BuildingSoftwareImages/people2.png";
import Person1 from "../BuildingSoftwareSection/BuildingSoftwareImages/person1.png";
import Person2 from "../BuildingSoftwareSection/BuildingSoftwareImages/person2.png";
import Person3 from "../BuildingSoftwareSection/BuildingSoftwareImages/person3.png";
import yellowEclipse from "../BuildingSoftwareSection/BuildingSoftwareImages/EllipseYellow.png";
import PinkEclipse from "../BuildingSoftwareSection/BuildingSoftwareImages/pinkEclipse.png";

const BuildingSoftware = () => {
  return (
    <>
      <div className=' mt-32'>
        <div className='text-center '>
          <img src={line} className='mx-auto pb-5' alt="line-image" />
          <h1 className='text-4xl leading-[55px] text-[#1a202c]'>Way of building <br></br>
          <span className='font-bold'> Great Software </span></h1>
        </div>
        <div className='px-[102px] pt-[95px] gap-24 flex relative'>
          <LeftSide person={Person1}/>
          <RightSide people={people}/>
          <img src={PinkEclipse}  className='absolute top-[94.5%] left-[70%] w-[28px] -z-10' alt="eclipsePink" />
          <img src={yellowEclipse} className='absolute left-[52.5%] w-[64.48px] top-[70px] -z-10' alt="eclipseyellow" />
        </div>
        <div className='px-[102px] pt-[95px] gap-24 flex relative'>
          <RightSide people={people1}/>
          <LeftSide className="relative" person={Person2}/>
          <img src={PinkEclipse}  className='absolute top-[15.5%] left-[44.5%] w-[28px] -z-10' alt="eclipsePink" />
          <img src={yellowEclipse} className='absolute left-[15.5%] w-[64.48px] top-[91%] -z-10' alt="eclipseyellow" />
        </div>
        <div className='px-[102px] pt-[95px] gap-24 flex relative'>
          <LeftSide person={Person3}/>
          <RightSide people={people2}/>
          <img src={PinkEclipse}  className='absolute top-[14.3%] left-[74%] w-[38px] -z-10' alt="eclipsePink" />
          <img src={yellowEclipse} className='absolute left-[53%] w-[43.48px] top-[92%] -z-10' alt="eclipseyellow" />
        </div>
      </div>
    </>
  )
}

export default BuildingSoftware
