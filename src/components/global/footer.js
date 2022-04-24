import React from 'react';
import { MdLocationPin, MdMail, MdPhone } from 'react-icons/md';
import Socialmedia from '../shared/socialmedia';

export default function Footer() {
  return <div className=' bg-[#080808] w-full'>

<div className='sm:grid grid-cols-2 gap-x-4 container mx-auto sm:w-[90%] w-[95%] py-2 sm:p-6'>
  <div className=''>
    <h5 className='text-xl font-semibold text-brandColor'>Specom</h5>
    <br className='sm:hidden'/>
    <h6 className='sm:text-[15px]   text-brandColor text-[12px] '>
    Specom help every business with exquisite custom solutions <br/>to obtain real business value <br/>and scalable solutions.
    </h6>
  </div>
  <div>
    <div className='flex sm:justify-end'>
      <div>
        <br/>
    <Socialmedia/>
    <br/>
    <h6 className='sm:text-[15px] text-[12px]  text-brandColor lowercase text-left sm:mr-5 flex items-center'> <MdMail/> &nbsp;&nbsp; INFO@SPECOMUNIVERSE.COM </h6>
        <p className='sm:text-[15px] text-[12px]  lowercase text-brandColor text-left  sm:mr-5 flex items-center'><MdLocationPin/>&nbsp; &nbsp;-109, Kasaba hubli, JLB ROAD, YELETHOTHA,</p>
        <p className='sm:text-[15px] text-[12px]  lowercase text-brandColor text-left  sm:mr-5'>&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;VIDYARANYAPURAM,MYSURU- 570004 </p>

    <p className='sm:text-[15px] text-[12px]    text-brandColor text-left sm:mr-5 flex items-center'><MdPhone/>&nbsp; &nbsp;7090589999</p>
    </div>
    </div>
  </div>

</div>
<div className='bg-[#0a0a0a] py-1'>
<p className='text-center text-brandColor'> &copy; copy rights by Specom </p> 
</div>
  </div>;
}
