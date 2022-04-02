import React from 'react'
import './exp.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiSpringboot } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { SiCodio } from 'react-icons/si'
import { AiOutlineDatabase } from 'react-icons/ai'
import { FaRegObjectUngroup } from 'react-icons/fa'





const exp = () => {
  return (
    <section id='experience'>
      <h5>What Skills do I have</h5>
      <h2>My Experience</h2>


      <div className="container exp_container">

        <div className="exp_front">

          <h3>Web development</h3>
          <div className="experience_content">

            <article className="exp_detail">
              <AiFillHtml5 className='exp_detail-icon' />
              <div>  <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div></article>

            <article className="exp_detail">
              <IoLogoCss3 className='exp_detail-icon'/>
              <div>  <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div></article>

            <article className="exp_detail">
              <SiJavascript className='exp_detail-icon'/>
              <div>  <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div></article>

            <article className="exp_detail">
              <FaReact className='exp_detail-icon' />
              <div>  <h4>ReactJs</h4>
                <small className='text-light'>Intermediate</small>
              </div></article>

            <article className="exp_detail">
              <SiSpringboot className='exp_detail-icon' />
              <div>  <h4>Spring</h4>
                <small className='text-light'>Intermediate</small>
              </div></article>

            <article className="exp_detail">
              <SiMysql className='exp_detail-icon' />
              <div>  <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article>

          </div>
        </div>


        <div className="languages">
          <h3>Languages</h3>
          <div className="experience_content">
          <article className="exp_detail">
            <FaJava className='exp_detail-icon' />
            <div>  <h4>Java</h4>
              <small className='text-light'>Experienced</small>
            </div></article>

          <article className="exp_detail">
            <FaPython className='exp_detail-icon'/>
            <div>  <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </div></article>

          <article className="exp_detail">
            <SiCodio className='exp_detail-icon'/>
            <div>  <h4>C/C++</h4>
              <small className='text-light'>Basic</small>
            </div></article>

          <article className="exp_detail">
            <AiOutlineDatabase className='exp_detail-icon'/>
            <div>  <h4>DSA</h4>
              <small className='text-light'>Intermediate</small>
            </div></article>

          <article className="exp_detail">
            <FaRegObjectUngroup className='exp_detail-icon'/>
            <div>  <h4>OOPS</h4>
              <small className='text-light'>Intermediate</small>
            </div></article>

        </div>
</div>

      </div>

    </section>
  )
}

export default exp