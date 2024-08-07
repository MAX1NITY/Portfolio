import React, { useState } from 'react'
import "./Navbar.css"
import Logo from "./Logo.svg"
import List from "./List.svg"
import Closeicon from "./Closeicon.svg"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
    <nav>
       <a href='#about' className='logo'><img src={Logo} className="logo-img"></img>MARIO</a>

    <ul>
      <li>
        <a href='#'>Home</a>
      </li>

      <li>
        <a href='#about'>About</a>
      </li>

      <li>
        <a href='#work'>Work</a>
      </li>

      <li>
        <a href='#contact'>Contact</a>
      </li>
      
    </ul>
    <div onClick={() => setIsActive(true)} className='menu-icon'>
      <img src={List} className='List'></img>
    </div>
    </nav>

    <div className={`mobile-menu-cont ${isActive ? "active" : ""}`}>
      <div onClick={() => setIsActive(false)} className='close-icon'>
        <img src={Closeicon} />
      </div>
      
      <ul className='menu-items'>
      <li>
        <a onClick={() => setIsActive(false)} href='#'>Home</a>
      </li>

      <li>
        <a onClick={() => setIsActive(false)} href='#about'>About</a>
      </li>

      <li>
        <a onClick={() => setIsActive(false)} href='#work'>Work</a>
      </li>

      <li>
        <a onClick={() => setIsActive(false)} href='#contact'>Contact</a>
      </li>
      
    </ul>
    </div>

    </>
  )
}

export default Navbar