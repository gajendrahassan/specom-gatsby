import React from 'react';
import {Link} from 'gatsby'
export default function Header() {
  return <div><div className='grid grid-cols-8 gap-x-6 sm:w-[90%] container mx-auto py-[1rem] sm:py-[3rem]'>

      <div className='col-span-2 flex items-start text-[#dcf2f4] '>
          <h5 className='tracking-[1.4px] sm:text-left text-center sm:text-[18px] font-extralight leading-[1.3]'>
              
          Specom help every business with exquisite custom software development services to obtain real business value and scalable solutions.              </h5>
      </div>
      <div className='col-span-4'>
          <h1 className='sm:text-[8rem] text-[3rem] text-center font-bold text-[#dcf2f4] sm:py-[3rem] py-[1rem] leading-[1] sm:leading-[1.1]' >
          Building innovative solutions
          </h1>
      </div>
      <div className='col-span-2 flex items-end text-[#dcf2f4]'>
          <h5 className='tracking-[1.4px] sm:text-right text-center sm:text-[18px] font-extralight leading-[1.3]'>
          We use ever-evolving technology to create creative solutions.
              
              <br/>
          <br/>
          <Link className='text-[12px]  tracking-[1.5px]' to='/contact'>LET'S TALK</Link>
       <hr className='w-[85px] block mx-auto border-[#bdbaba]'/>
          </h5>
      </div>
      </div>

  </div>;
}
