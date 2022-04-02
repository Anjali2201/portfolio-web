import React from 'react'
import './nav.css'
import { GoHome } from 'react-icons/go'
import { FaUserAlt } from 'react-icons/fa'
import { BsBookHalf } from 'react-icons/bs'
import { MdOutlineContactMail } from 'react-icons/md'
import { HiUserGroup } from 'react-icons/hi'



const nav = () => {

  return (

    <nav>
      <a href="#" ><GoHome /></a>
      <a href="#about" ><FaUserAlt /></a>
      <a href="#experience" ><BsBookHalf /></a>
     {/* <a href="#portfolio"><VscProject /></a>*/}
      <a href="#test"><HiUserGroup /></a>
      <a href="#contact"><MdOutlineContactMail /></a>

    </nav>
  )
}

export default nav