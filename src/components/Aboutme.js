import React from 'react'
import Myphoto from '../images/Myphoto.jpeg'

const Experience = () => {
  return (
    <>
    <div className="containerabout my-5 mx-5" id="aboutme">
    <h1>ABOUT ME</h1>
    <div className="alignment">
        <div className="aboutright"
                data-aos = "fade-up-right"
                data-aos-duration = "1000">
        <p>Hello, I'm <span class="purple">Sashwat Priya</span> and I am a passionate <span class="purple">Web Developer</span>. I believe I am very ambitious person who likes to work on making websites. Working on the web is my passion as I love to work on exciting projects. This is the field I get to express my creativity. I would look forward to work in your esteemed organisation. This is all about me.</p>
        </div>
        <div className="aboutleft"
        data-aos = "fade-up-left"
        data-aos-duration = "1000"
        >
        <img src={Myphoto} alt="myphoto"/>
      </div>
      </div>
      </div>
    </>
  )
}

export default Experience
