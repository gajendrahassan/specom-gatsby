import React from 'react';
import Footer from '../global/footer';
import Navbar from '../global/navbar';
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
    <Featuredworks/>
    <br/>
    <br/>

    <Experience/>
    <br/>
    <br/>
    <ClientStat/>
    
  <br/>
  <br/>

    <ProjectStat/>
    <Footer/>
  </main>;
}
