import React from 'react'
import './footer.css'
import  {SiLinkedin} from 'react-icons/si'
import {FaGithubSquare} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
const footer = () => {
  return (
   <footer>
    <ul className="permalink">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#test">Organisations</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footersocials">
    <a href="https://www.linkedin.com/in/anjallliii/" ><SiLinkedin/></a>
        <a href="https://github.com/Anjali2201" ><FaGithubSquare/></a>
        <a href="https://www.instagram.com/by.anjallii/" ><AiFillInstagram/></a>
    </div>
   </footer>
  )
}

export default footer