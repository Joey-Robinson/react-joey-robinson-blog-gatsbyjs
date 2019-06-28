import React, { useState, useEffect } from "react"
import DarkModeToggle from "./dark-mode"
import coffee from "../images/coffee.png"
import { Link } from "gatsby"

const Navigation = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setScroll(true) : setScroll(false)
    })
    return () => {
      setScroll()
    }
  }, [])

  return (
    <header className={scroll ? "header scroll" : "header"}>
      <h1>Joey Robinson</h1>
      <nav className="header--nav">
        <div className="nav--coffee" target="_blank" rel="noopener noreferrer">
          <a href="https://ko-fi.com/joeyrobinson">
            <img src={coffee} alt="Coffee" aria-label="Coffee" />
          </a>
        </div>
        <div className="nav--blog">
          <Link activeClassName="active" to="/blog/">
            Blog
          </Link>
        </div>
        <div className="nav--portfolio">
          <Link to="/portfolio/">Portfolio</Link>
        </div>
        <DarkModeToggle />
      </nav>
    </header>
  )
}

export default Navigation
