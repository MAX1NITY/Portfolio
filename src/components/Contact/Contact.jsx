import React from 'react'
import "./Contact.css"
import Gmail from "./Gmail.svg"
import Figma from "./Figma.svg"
import Github from "./Github.svg"

const Contact = () => {
  return (
    <section id='contact'>
      <div className='wrapper'>
        <h1 className='contact-h'>CONTACT</h1>
        <div className='contact-div'>
          <h1 className='feel-free'>Feel free to contact me</h1>
          <div className='contact-list'>
            <a href='https://www.figma.com/design/sKeyLqz7T08DONuI2nXOO0/Portfolio?m=auto&t=0KcVFOfYs0EfCsLX-6'><img src={Figma} className="icon"></img></a>
            <a href='mailto:mariobomausanga@gmail.com'><img src={Gmail} className="icon"></img></a>
            <a href='https://github.com/MAX1NITY'><img src={Github} className="icon"></img></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact