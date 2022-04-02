import React from 'react'
import './index.css'
import Header from './components/header/header.jsx'
import Nav from './components/nav/nav.jsx'
import About from './components/about/about.jsx'
import Experience from './components/experience/exp'

import Testimonials from './components/testimonials/test'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    /*importing files*/
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App