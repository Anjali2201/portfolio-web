import React from 'react'
import './contact.css'
import { ImMail2 } from 'react-icons/im'
// import { BsInstagram } from 'react-icons/bs'
import  {ImLinkedin} from 'react-icons/im'

const contact = () => {
  
  return (
    <section id='contact'>
      <h5>Get in Touch!</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          
          <article className="contact_option">
            <ImMail2 className='icon'/>
            <h4>Email</h4>
            <a href="mailto:anjalikushwaha031@gmail.com">Send a message</a>
         
          </article>
          <article className="contact_option">
          <ImLinkedin className='icon' />
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/anjallliii/" >Send a message</a>
          </article>

        </div>

        <form action="https://formsubmit.co/anjalikushwaha031@gmail.com" method="POST" >
        <input type="text" name="name" placeholder='Your Full name' required />
        <input type="email" name="email" placeholder='Your Email' required />
        <textarea name="message" rows="5" placeholder='Drop Your message here!' required></textarea>
        <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default contact