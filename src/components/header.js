import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <header className="header">
    <h1>決意</h1>
    
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio/">Portfolio</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </nav>

  </header>
)

export default Header