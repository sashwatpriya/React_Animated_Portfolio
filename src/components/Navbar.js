import React from 'react'

const Navbar = () => {
  return (
    <>
  <div className= 'nav_bar'
  data-aos = "fade-down"
  data-aos-duration = "1000"
  >
    <div className="left">Devfolio</div>
      <div className="right">
      <a href="#home" className="nav_items">HOME</a>
      <a href="#projects" className="nav_items">PROJECT</a>
      <a href="#skills" className="nav_items">SKILLS</a>
      <a href="#journey" className="nav_items">JOURNEY</a>
      <a href="#aboutme" className="nav_items">ABOUT ME</a>
      <a href="#contact" className="nav_items">CONTACT</a>
      </div>
    </div>
  </>
  )
}

export default Navbar
