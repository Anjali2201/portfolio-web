import React from 'react'
import './portfolio.css'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
<article className="portfolio_item">
  <div className="portfolio_item-img">
    <h3>Technical Club Website</h3>
    <a href="https://github.com/Technical-Club-RCOEM/Tech-Club-Website" className='btn'>Github</a>
    <a href="https://www.rcoemtechnical.club/">Live Demo</a>

  </div>
</article>
      </div>
    </section>
  )
}

export default portfolio