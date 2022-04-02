import React from 'react'
import './about.css'
import {FaLaptopCode} from 'react-icons/fa'
import {RiBuilding2Fill} from 'react-icons/ri'
import {SiJava} from 'react-icons/si'

const about = () => {
  return (
    <section id='about' >
      <h5>Get to Know</h5>
      <h2>About ME</h2>

      <div className="container about_container">
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaLaptopCode className='about_icon'/>
              <h5>Frontend Web Developer</h5>
              
            </article>
            <article className="about_card">
              <RiBuilding2Fill className='about_icon'/>
              <h5>Artist</h5>
              
            </article>
            <article className="about_card">
              <SiJava className='about_icon'/>
              <h5>Java Developer</h5>
              
            </article>
            
          </div>
          
        </div>
      </div>
      <div className="para">
      <p>A sophomore Student from computer science background pursuing my Bachelors Degree in Data science.
              
               Started with sketching and then switched to web designing and now learning different frameworks for implementation</p>
               </div>
    </section >
  )
}

export default about