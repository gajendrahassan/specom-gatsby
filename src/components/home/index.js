import React from 'react';
import Navbar from '../global/navbar';
import Clientlogo from './clientlogo';
import Experience from './experience';
import Featuredworks from './featuredworks';
import Header from './header';

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

    
  </main>;
}
