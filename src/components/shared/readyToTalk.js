import { Link } from 'gatsby'
import React from 'react'

export default function ReadyToTalk() {
  return (
      
    <div className='container mx-auto w-[80%] '>
      <p className=' text-brandColor text-center'>Stay in touch</p>
      <hr className='w-[6%] mx-auto'/>
      <br/>
      <br/>
      <h1 className='text-5xl text-center text-brandColor font-extrabold'>Ready to Talk</h1>
      <br/>
      <p className='text-white text-center opacity-10'>feel free to contact us</p>

      <br/>
      

      <Link className='text-brandColor block mx-auto text-center' to='/contact'>Let's Talk</Link>
      <hr className='w-[6%] mx-auto'/>

    </div>
  )
}
