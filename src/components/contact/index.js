import React from 'react';
import Footer from '../global/footer';
import Navbar from '../global/navbar';
import ContactForm from './form';

export default function index() {
  return <main>
    <Navbar/> 
    <br/>
    <h1 className='text-brandColor text-8xl text-center my-8'>Stay in <br/> Touch</h1>
<br/>
<div className='grid grid-cols-2 gap-x-8 container mx-auto w-[80%]'>
  <div className=' bg-black'>
    {/* <img src="" alt=""/> */}
  </div>
  <div>
    <ContactForm/>
  </div>
</div>
<br/>
<br/>
<Footer/>
  </main>;
}
