import React from 'react';
import Socialmedia from '../shared/socialmedia';

export default function Footer() {
  return <div className=' bg-black w-full'>

<div className='grid grid-cols-2 gap-x-4 container mx-auto w-[80%] p-6'>
  <div>
    <h5 className='text-xl font-semibold text-brandColor'>Tronic</h5>
    <h6 className='text-md text-brandColor'>Award winning web designer <br/>
    street 11 california USA 
    </h6>
  </div>
  <div>
    <div className='flex justify-end'>
      <div>
    <Socialmedia/>
    <br/>
    <h6 className='text-md text-brandColor text-right mr-5'>tronic@gmail.com</h6>
    <p className='text-md text-brandColor text-right mr-5'>+8555555555</p>
    </div>
    </div>
  </div>

</div>
<div className='bg-[#0a0a0a] py-1'>
<p className='text-center text-brandColor'> &copy; copy rights by tronic </p> 
</div>
  </div>;
}
