import React from 'react'

function Journey() {
  return (
    <>
      <div className="containerjourney mx-5" id="journey">
        <h1>MY JOURNEY</h1>
        <div className="align">
        <div className="learning"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
        <h2>Learning</h2>
            <ul>
                <li>
                Did my Schooling from Ursuline English Medium School<br></br>(ICSE Board)
                </li>
                <li>
                Did my High School from Ursuline Intermediate School
                </li>
                <li>
                Pursued my BTech degree from National Institute of Science and Technology
                </li>
            </ul>
        </div>
        <div className="workexperience"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
            <h2>Work Experience</h2>
            <ul>
                <li>
                Currently working in Tata Consultancy Services Limited as a Web developer
                </li>
                <li>
                Former Secretary at National Service Scheme(NSS)
                </li>
            </ul>
        </div>
      </div>
      </div>
    </>
  )
}

export default Journey

