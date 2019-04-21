import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <header>
    <nav>
      <h1>決意</h1>
      <Link to="/">
        Home
      </Link>
      <Link to="/blog/">
        Blog
      </Link>
      <Link to="/portfolio">
        Portfolio
      </Link>
    </nav>
  </header>
)

export default Header