import React from 'react'
import "./Navbar.css"
import Logo from "./Logo.svg"
import List from "./List.svg"

const Navbar = () => {
  return (
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
    <div className='menu-icon'>
      <img src={List} className='List'></img>
    </div>
    </nav>
  )
}

export default Navbar