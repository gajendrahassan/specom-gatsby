import React from 'react';
import Socialmedia from '../shared/socialmedia';

export default function Footer() {
  return <div className=' bg-[#080808] w-full'>

<div className='grid grid-cols-2 gap-x-4 container mx-auto sm:w-[90%] p-6'>
  <div className=''>
    <h5 className='text-xl font-semibold text-brandColor'>Specom</h5>
    <br className='sm:hidden'/>
    <h6 className='text-md text-brandColor'>
    Specom help every business with exquisite custom solutions <br/>to obtain real business value <br/>and scalable solutions.
    </h6>
  </div>
  <div>
    <div className='flex justify-end'>
      <div>
    <Socialmedia/>
    <br/>
    <h6 className='text-md text-brandColor lowercase text-right mr-5'>INFO@SPECOMUNIVERSE.COM </h6>
        <p className='text-md lowercase text-brandColor text-right mr-5'>-109, Kasaba hubli, JLB ROAD, <br/> YELETHOTHA, VIDYARANYAPURAM,MYSURU- 570004</p>

    <p className='text-md    text-brandColor text-right mr-5'>7090589999</p>
    </div>
    </div>
  </div>

</div>
<div className='bg-[#0a0a0a] py-1'>
<p className='text-center text-brandColor'> &copy; copy rights by Specom </p> 
</div>
  </div>;
}
