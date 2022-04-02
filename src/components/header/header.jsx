import React from 'react'
import './header.css'
import CTA from './CTA'
import Headersocials from './headersocials'
const header = () => {
  return (
   <header >
     <div className="container header_container">
       <h5>Hello I'm</h5>
       <h1>Anjali Kushwaha</h1>
       <h5 className="text-light">Frontend Web Developer </h5>
       <CTA/>
       <Headersocials/>
      {/*<div className="me">
         <img src={Pic} alt="" />
  </div>*/}
       <a href="#contact" className='scroll_down'>Scroll Down</a>

     </div>
   </header>
  )
}

export default header