import React from 'react';
import Navbar from '../global/navbar2';
import Footer from '../global/footer';
import Team from './team';
import ProjectStat from '../shared/projectStat';

export default function index() {
  return <main >
    <Navbar/>
    <br/>
    <br/>
<Team/>
<br/>
<br/>
<ProjectStat/>
<br/>
<Footer/>
  </main>;
}
