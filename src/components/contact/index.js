import React from 'react';

import Footer from '../global/footer';
import Navbar from '../global/navbar2';
import ProjectStat from '../shared/projectStat';
import ContactForm from './form';

export default function Index() {


  return <main>
    <Navbar/> 
    <br/>
    <h1 className='text-brandColor leading-3  opacity-85 sm:text-8xl text-3xl text-center my-4 sm:my-8'>Stay in <b className='text-[#dd8705]'>Touch</b> </h1>
<br className='sm:block hidden'/>
<div className='sm:grid grid-cols-2 gap-x-8 container mx-auto w-[80%]'>
  <div className=' bg-cover bg-[url(https://cdn.pixabay.com/photo/2019/11/04/01/11/cellular-4599956__340.jpg)]'>
    {/* <img src="" alt=""/> */}
  </div>
  <div>
    <ContactForm/>
  </div>
</div>
<br/>
<br/>
<br/>
<br/>

<ProjectStat/>
<br/>
<Footer/>
  </main>;
}
