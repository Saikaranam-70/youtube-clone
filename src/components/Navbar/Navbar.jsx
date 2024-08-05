import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = ({setSideBar}) => {
  return (
    <nav className='flex-div'>
        <div className="nav-left">
        <i class="fa-solid fa-bars" onClick={()=>setSideBar(prev=>prev===false?true:false)}></i>
        <Link to='/'><i className="fa-brands fa-youtube">MY_YOUTUBE</i></Link>
        </div>
        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
          <input type="text" placeholder='search.....'/>
          <i class="fa-solid fa-magnifying-glass"></i>
          </div> 
        </div>
        <div className="nav-right flex-div">
        <i class="fa-solid fa-upload"></i>
        <i class="fa-solid fa-circle-chevron-down"></i>
        <i class="fa-solid fa-bell"></i>
        <i class="fa-solid fa-user"></i>

        </div>
    </nav>
  )
}

export default Navbar