import React from 'react'
import './test.css'
import {GiLaptop} from 'react-icons/gi'
import {BiCodeAlt} from 'react-icons/bi'
import {BsCamera} from 'react-icons/bs'
const test = () => {
  return (
    <section id="test">
      <h5>Where do I work</h5>
      <h2>Organisations</h2>

      <div className="container test-container">
        <div className="test_ele">
          <GiLaptop className="test_ele_icon"/>
          <h2>Technical Club,RCOEM</h2>
          <h5 className='text-light'>Web Developer</h5>
          <h5 className='right'>Contribution - <a  href="https://www.rcoemtechnical.club/clubs.html">See here!</a></h5>
        </div>
        <div className="test_ele">
          <BiCodeAlt className="test_ele_icon"/>
          <h2>Codebreakers Club,RCOEM</h2>
          <h5 className='text-light'>CP, Backend developer</h5>
          <h5 className='right'>Contibution - <a href="http://thecodebreakers.club/">See here!</a></h5>
        </div>
        <div className="test_ele">
          <BsCamera className="test_ele_icon"/>
          <h2>Photography Club,RCOEM</h2>
          <h5 className='text-light'>Systems</h5>
        </div>
      </div>


    </section>
    
  )
}

export default test