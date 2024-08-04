import React from 'react'
import "./Footer.css"
import Logo from "./Logo.svg"
import Gmail from "./Gmail.svg"
import Figma from "./Figma.svg"
import Github from "./Github.svg"

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='wrapper'>
        <div className='footer-info'>
          <img src={Logo} className='footer-logo'></img>
          <div className='link-cont'>
            <div className='link'>
              <div className='home-about'>
                <a href='#'><p className="text">HOME</p></a>
                <a href='#about'><p className="text">ABOUT</p></a>
              </div>
              <div className='work-cont'>
                <a href='#work'><p className="text">WORK</p></a>
                <a href='#work'><p className="text">CONTACT</p></a>
              </div>
            </div>
            <div className="cont">
              <a href='https://www.figma.com/design/sKeyLqz7T08DONuI2nXOO0/Portfolio?m=auto&t=0KcVFOfYs0EfCsLX-6'><img src={Figma} className="icon"></img></a>
              <a href='mailto:mariousangaboma@gmail.com'><img src={Gmail} className="icon"></img></a>
              <a href='https://github.com/MAX1NITY'><img src={Github} className="icon"></img></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer