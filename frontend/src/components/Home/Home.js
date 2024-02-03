import React from 'react'
import MainArea from './MainArea'
import About from './About'
import Projects from './Projects'
import Team from './Team'
import './home.css'

function Home() {
  return (
    <>
        <div id="main" className='h-[100vh]'><MainArea/></div>
        <div id="about" className='h-[100vh] max-[620px]:h-[max-content] '><About/></div>
        <div id="projects" className='h-[max-content]'><Projects/></div>
        <div id="team" className='h-[max-content]'><Team/></div>
    </>
  )
}

export default Home