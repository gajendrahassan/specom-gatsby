import React from 'react'
import Footer from '../global/footer'
import Navbar from '../global/navbar2'
import ProjectStat from '../shared/projectStat'
import Project from './project'

export default function index() {
  return (
    <div>        
        <Navbar/>
        <br/>
        <br/>
        <Project/>
        <br/>
        <ProjectStat/>
        <br/>
        <Footer/>
    </div>
  )
}
