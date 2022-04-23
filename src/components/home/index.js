import React from 'react';
import Footer from '../global/footer';
import Navbar from '../global/navbar2';
import ReadyToTalk from '../shared/readyToTalk';
import Clientlogo from './clientlogo';
import ClientStat from './clientStat';
import Experience from './experience';
import Featuredworks from './featuredworks';
import MFeaturedworks from './mfeaturework';

import Fetured from './fetured';
import Header from './header';
import ProjectStat from '../shared/projectStat';

export default function index() {
  return <main >
    <Navbar/>
    <Header/>

     <ClientStat/>

    <br/>
    <br/>

    <br className='sm:block hidden'/>
    <div className='sm:block hidden'>
    <Featuredworks/>
    </div>
    <br/>
    <div className='sm:hidden block'>
    <MFeaturedworks/>
    </div>
    <br/>
    <br className='sm:block hidden'/>

    <Experience/>
    <br/>
    <br/> 
    <br className='sm:block hidden'/>
    <br className='sm:block hidden'/>
    <br/>
    <Clientlogo/>

    <br/> <br className='sm:block hidden'/>
    <br className='sm:block hidden'/>
    <Fetured/>
  <br className='sm:block hidden'/>
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
