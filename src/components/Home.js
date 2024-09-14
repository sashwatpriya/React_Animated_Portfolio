import React, {useEffect, useRef } from 'react'
import pdf from '../pdf/Aadharcard.pdf'
import hero from '../images/hero.avif'
import Typed from "typed.js";


const Home = () => {
  const typeData = useRef(null)
  useEffect(() => { 
    const options = {
      strings: ["Welcome to my profile","My name is Sashwat Priya","I'm a front-end web developer",],
      typeSpeed: 50,
      backSpeed: 50,
      loop:true
    }

    const typed = new Typed(typeData.current, options);
    return () => {
      typed.destroy();
    };

  },[]);
  return (
    <div>
      <div className="home" id="home">
        <div className="homeleft"
        data-aos = "fade-up-right"
        data-aos-duration = "1000"
        >
        <h1 ref={typeData}>
        
        </h1>

        <a href={pdf} 
        download="Aadharcard.pdf" 
        className="btn btn-outline-warning">
        Download Resume
        </a>
        </div>
        <div className="homeright">
          <div className="image_home"
                 data-aos = "fade-up-left"
                 data-aos-duration = "1000"
                 >
          <img src={hero} alt="hero"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
