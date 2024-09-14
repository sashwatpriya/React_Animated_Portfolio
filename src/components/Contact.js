import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="containercontact my-5 mx-5" id="contact">
        <h1>CONTACT ME</h1>
        </div>
        <div className="contacticon"
                data-aos = "zoom-in"
                data-aos-duration = "1000"
                >
          <a href="https://www.linkedin.com/in/sashwat-priya-528733186/" target="blank" className="items">
            <CiLinkedin className="icons"/>
          </a>
          <a href="https://github.com/dashboard" target="blank" className="items">
            <FaGithubSquare className="icons"/>
          </a>
          <a href="mailto:sashwatpriya1598@gmail.com" target="blank" className="items">
            <CgMail className="icons"/>
          </a>
          <a href="https://www.facebook.com/sashwat.priya.1" target="blank" className="items">
            <FaFacebookSquare className="icons"/>
          </a>
        </div>
    </>
  )
}

export default Contact
