import React from 'react';
import Footer from '../global/footer';
import Navbar from '../global/navbar2';
import ProjectStat from '../shared/projectStat';
import Slider from './slider';

export default function index() {
  return <main>
    <Navbar/>
<br className='sm:block hidden'/>
<br className='sm:block hidden'/>
<Slider/>
<br/>
<br/>
<br/>
<ProjectStat/>
<br/>
<Footer/>
  </main>;
}
