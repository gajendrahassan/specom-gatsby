import React from 'react';
import {AiOutlineInstagram, AiFillLinkedin, AiOutlineTwitter, AiOutlineFacebook} from 'react-icons/ai'
export default function Socialmedia() {
  return <div className=' flex justify-center items-center  px-2 text-brandColor text-xl' >
<span className='px-5 sc py-1 border-[#c5bfbf44]  border-l-[0.2px]'>
<a href='https://www.instagram.com/specomuniverse/?igshid=YmMyMTA2M2Y=' target='_tab'>

    <AiOutlineInstagram className='sicon ' />
    </a>
</span>
<span className='px-5 sc py-1 border-[#c5bfbf44]  border-l-[0.2px]'>
  <a href='https://www.linkedin.com/company/specom-universe/' target='_tab'>
<AiFillLinkedin className=' sicon'/>
</a>
</span>
<span className='px-5 sc py-1 border-[#c5bfbf44]  border-l-[0.2px] '>
<a href=' https://twitter.com/SpecomUniverse' target='_tab'>

    <AiOutlineTwitter className='sicon '/>
    </a>
</span>
<span className='px-5 sc py-1 border-[#c5bfbf44]  border-l-[0.2px]'>
<a href='https://www.facebook.com/specomuniverse/?ref=nf&hc_ref=ARTAt1lhdtI-aXOF24dztfpkYGQyHHmfXnJvHTG53uM_NVRGC7qp7XRrlZUY5hPYt10' target='_tab'>

<AiOutlineFacebook className='sicon '/>
</a>
</span>
  </div>;
}
