import React from 'react'
import "./Work.css"
import Arrow from "./Arrow.png"
import Fashion from "./Fashion.png"
import Profile from "./Profile.png"

const Work = () => {
  return (
    <section id='work'>
      <div className='wrapper'>
        <h1 className='work-h'>WORK</h1>
        <div className='projects'>
          <div className='column'>
            <a href=''>
            <img src={Profile} className="profile-img"></img>
            </a>

            <a href=''>
            <p className='profile-p'>Personal Project - PROFILE</p>
            </a>
          </div>

          <div className='column'>
            <a href=''>
            <img src={Fashion} className="profile-img"></img>
            </a>

            <a href=''>
            <p className='profile-p'>Personal Project - Fashion</p>
            </a>
          </div>

          <div className='column'>
            <a href=''>
            <img src={Arrow} className="profile-img"></img>
            </a>

            <a href=''>
            <p className='profile-p'>Personal Project - Portfolio</p>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Work