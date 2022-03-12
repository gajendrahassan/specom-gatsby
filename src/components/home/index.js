import React from 'react';
import Footer from '../global/footer';
import Navbar from '../global/navbar2';
import ReadyToTalk from '../shared/readyToTalk';
import Clientlogo from './clientlogo';
import ClientStat from './clientStat';
import Experience from './experience';
import Featuredworks from './featuredworks';
import Header from './header';
import ProjectStat from './projectStat';

export default function index() {
  return <main >
    <Navbar/>
    <Header/>
    <Clientlogo/>
    <br/>
    <br className='sm:block hidden'/>
    <Featuredworks/>
    <br/>
    <br className='sm:block hidden'/>

    <Experience/>
    <br/>
    <br/>
    <br className='sm:block hidden'/>
    <br className='sm:block hidden'/>
    <ClientStat/>
    <br/>
    <br/> <br className='sm:block hidden'/>
    <br className='sm:block hidden'/>
  <br/>
  <br className='sm:block hidden'/>

    <ProjectStat/>
    <br/>
    <br/>
    <br className='sm:block hidden'/>
    <br className='sm:block hidden'/>
    <div className='bg-[#0f0f0f] py-5'>
    <ReadyToTalk/>
    </div>
  
    <Footer/>
  </main>;
}
