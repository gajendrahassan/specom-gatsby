import React from 'react';
import Footer from '../global/footer';
import Navbar from '../global/navbar2';
import ProjectStat from '../shared/projectStat';
import CareerForm from './form';
import Table from './table';
export default function index() {
  return <main>
    <Navbar/>
    <br/>
    <h1 className='text-brandColor leading-3  opacity-85 sm:text-8xl text-3xl text-center my-4 sm:my-8'>Work <b className='text-[#dd8705]'>With Us</b> </h1>

<p className='text-[grey] w-[80%] mx-auto text-center'>
Each employee is critical to the success of a business. Employees are the ones that spread the company's brand and culture around the world. We also believe in concepts that contribute to both employee and corporate progress. As a result, we constantly anticipate the finest ones joining us shortly to take the next step in their professional careers. We're excited to have you onboard as we investigate foreign trade potential. 
<br/>
<br/>
<b className='text-xl text-[#dd8705]'>Join us on a journey of discovery! </b>
</p>
<br/>
<br className='sm:block hidden'/>

<div className='sm:grid grid-cols-2 gap-x-8 container mx-auto w-[80%]'>
  <div className=' bg-cover bg-[url(https://cdn.pixabay.com/photo/2019/11/04/01/11/cellular-4599956__340.jpg)]'>
    {/* <img src="" alt=""/> */}
  </div>
  <div>
    <CareerForm/>
  </div>
</div>
<br/>
<div className='my-5 hidden sm:block container mx-auto w-[80%]'>
<Table/>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>

<ProjectStat/>
<br/>
<Footer/>
  </main>;
}
