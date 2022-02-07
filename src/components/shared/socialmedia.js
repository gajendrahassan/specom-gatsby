import React from 'react';
import {AiOutlineInstagram, AiFillLinkedin, AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai'
export default function Socialmedia() {
  return <div className=' flex justify-center items-center  px-2 text-brandColor text-xl' >
<span className='px-5 sc py-1 border-[#c5bfbf44]  border-l-[0.2px]'>
    <AiOutlineInstagram className='sicon ' />
</span>
<span className='px-5 sc py-1 border-[#c5bfbf44]  border-l-[0.2px]'>
<AiFillLinkedin className=' sicon'/>
</span>
<span className='px-5 sc py-1 border-[#c5bfbf44]  border-l-[0.2px] '>
    <AiOutlineTwitter className='sicon '/>
</span>
<span className='px-5 sc py-1 border-[#c5bfbf44]  border-l-[0.2px]'>
<AiOutlineFacebook className='sicon '/>
</span>
  </div>;
}
