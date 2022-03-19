import React from 'react';
import {Link} from 'gatsby'
export default function Clientlogo() {

    const logoData = ['https://assets.website-files.com/61d4261bcf0684baf625a73c/61d5889139013f20a405d92d_logo-1.png',
    'https://assets.website-files.com/61d4261bcf0684baf625a73c/61d4261bcf0684834325a84c_logo-1.png',
    'https://assets.website-files.com/61d4261bcf0684baf625a73c/61d5889139013f20a405d92d_logo-1.png',
    'https://assets.website-files.com/61d4261bcf0684baf625a73c/61d4261bcf0684834325a84c_logo-1.png',
    'https://assets.website-files.com/61d4261bcf0684baf625a73c/61d5889139013f20a405d92d_logo-1.png'


]

  return <div className='container  mx-auto'>
    <br/>
    <br/>
      <h2 className='text-center text-brandColor text-3xl font-bold tracking-[1.3px]'>
      We are enabling the business to meet <br/> its vision with end-to-end technology solutions.
        
        </h2>
  <br/>
  <br/>
  <div className='flex flex-col justify-center items-center'>
  <Link className='text-[18px] text-center text-brandColor  tracking-[1.5px]' to='/contact'>View Our Projects</Link>
  <hr className='w-[185px] border-[#bdbaba]'/>
  </div>
  <br/>
  <br/>
  <br className='sm:block hidden'/>
  <br className='sm:block hidden'/>
<div className=' grid sm:grid-cols-5 grid-cols-2  gap-x-12 sm:w-[70%] mx-auto'>
  {

logoData.map((item, i) =>{

    return <img className='cols-span-1 w-[90%] my-2 block m-auto' key={i} src={item} alt="logo"/>
})
  }
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
<div className='grid grid-cols-2 gap-x-2 w-[60%] mx-auto'>

<div className='col-span-1'>
  <img src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg" alt="" className="h-[400px] w-full object-cover rounded" />
</div>
<div className='relative'>

  <h6 className="text-white text-md w-[70%] mx-auto text-left absolute top-[-10%] left-[10%]">

  Specom believes that the human components are important to any project's success and that it is here that emotional relationships between the company and its personnel are built. 
  </h6>
</div>


</div>

  <br/>
  <br/><br/>
  </div>;
}
