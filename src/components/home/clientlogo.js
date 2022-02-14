import React from 'react';
import {Link} from 'gatsby'
export default function Clientlogo() {

    const logoData = ['https://assets.website-files.com/61d4261bcf0684baf625a73c/61d5889139013f20a405d92d_logo-1.png',
    'https://assets.website-files.com/61d4261bcf0684baf625a73c/61d4261bcf0684834325a84c_logo-1.png',
    'https://assets.website-files.com/61d4261bcf0684baf625a73c/61d5889139013f20a405d92d_logo-1.png',
    'https://assets.website-files.com/61d4261bcf0684baf625a73c/61d4261bcf0684834325a84c_logo-1.png',
    'https://assets.website-files.com/61d4261bcf0684baf625a73c/61d5889139013f20a405d92d_logo-1.png'


]

  return <div className='container w-[90%] mx-auto'>
    <br/>
    <br/>
      <h2 className='text-center text-brandColor text-3xl font-bold tracking-[1.3px]'>We are blessed to work <br/> with leading brands.</h2>
  <br/>
  <br/>
  <div className='flex flex-col justify-center items-center'>
  <Link className='text-[18px] text-center text-brandColor  tracking-[1.5px]' to='/contact'>View Our Projects</Link>
  <hr className='w-[185px] border-[#bdbaba]'/>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
<div className=' grid grid-cols-5 gap-x-12 w-[70%] mx-auto'>
  {

logoData.map((item, i) =>{

    return <img className='cols-span-1 w-[90%] block m-auto' key={i} src={item} alt="logo"/>
})
  }
  </div>
  <br/>
  <br/><br/>
  </div>;
}
