import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  const [openmenu,setOpenmenu]=useState(false)
  return (
    <nav>
        <Link to="/" className='title'>Home</Link>
        <div className='menu' onClick={()=>{setOpenmenu(!openmenu)}}>
          <span></span>
          <span></span>
          <span></span>

        </div>
        <ul className={openmenu ? "open":""}>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact-us</NavLink></li>
            <li><NavLink to="/ChatBot">ChatBot</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar
