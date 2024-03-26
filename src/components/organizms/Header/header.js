import React from 'react'
import { Link } from "react-router-dom";
import './headerWrapper.scss'

const Header = () => {
  return (
    <nav className='header_content'>
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/saved">Saved Movies</Link>
        </li>
        </ul>
    </nav>
  )
}

export default Header;