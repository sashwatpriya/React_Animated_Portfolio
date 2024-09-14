import React from 'react'
import pdf from '../pdf/Aadharcard.pdf'
import hero from '../images/hero.avif'

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="homeleft">
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing</h1>
        <a href={pdf} 
        download="Aadharcard.pdf" 
        className="btn btn-outline-warning">Download Resume</a>
        </div>
        <div className="homeright">
          <div className="image_home">
          <img src={hero} alt="hero"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
