import React from 'react';
import Footer from '../global/footer';
import Navbar from '../global/navbar';
import ReadyToTalk from '../shared/readyToTalk';
import Clientlogo from './clientlogo';
import ClientStat from './clientStat';
import Experience from './experience';
import Featuredworks from './featuredworks';
import Header from './header';
import ProjectStat from './projectStat';

export default function index() {
  return <main className='container mx-auto'>
    <Navbar/>
    <Header/>
    <Clientlogo/>
    <br/>
    <br/>
    <Featuredworks/>
    <br/>
    <br/>

    <Experience/>
    <br/>
    <br/>
    <br/>
    <br/>
    <ClientStat/>
    <br/>
    <br/> <br/>
    <br/>
  <br/>
  <br/>

    <ProjectStat/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='bg-[#0f0f0f] py-5'>
    <ReadyToTalk/>
    </div>
  
    <Footer/>
  </main>;
}
