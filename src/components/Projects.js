import React from 'react'
import projects from './Data/projects.json'

const Project = () => {
  return (
    <>
      <div className="container project my-5" id="projects">
        <h1>PROJECT</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {projects.map((data) => (
            <>
              <div key={data.id} className=" my-3 col-lg-4">
                <div className="card bg-dark text-light" 
                style={{ 
                  padding: '20px',
                  width: "18rem",
                  border: '1px solid yellow',
                  boxShadow: '5px 5px 10px 10px rgba(91, 138, 30, 0.5)'
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000">
                <div className="img d-flex justify-content-center align-content-center ">
                <img src={data.imageSrc} classname="card-img-top" alt="..."
                  style={{
                    width:'250px',
                    height: '200px',
                    border: '1px solid yellow',
                    borderRadius: '10px',
                  }}
                />
                
                </div>
                    <div classname="card-body textAlign-center">
                      <h5 classname="card-title" 
                      style={{
                        textAlign:  'center'
                      }}
                      >{data.title}</h5>
                      <p classname="card-text"
                      style={{
                        textAlign : 'center'
                      }}>
                      {data.description}
                      </p>
                      <div className="buttons"
                      style={{
                        textAlign: 'center'
                      }}>
                      <a href={data.demo} className="btn btn-primary mx-3"
                      style={{
                        textAlign: 'center',

                      }}>
                      Demo
                      </a>
                      <a href={data.source} className="btn btn-warning"
                      style={{
                        textAlign: 'center',
                      }}>
                      Code
                      </a>
                    </div>
                    </div>
                </div>
            </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Project
