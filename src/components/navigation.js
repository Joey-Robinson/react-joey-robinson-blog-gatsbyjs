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
      setScroll(false)
    }
  }, [])

  return (
    <header className={scroll ? "header scroll" : "header"}>
      <h1>
        <Link to="/">Joey Robinson</Link>
      </h1>
      <nav className="header--nav">
        <div className="nav--coffee">
          <a
            href="https://ko-fi.com/joeyrobinson"
            target="_blank"
            rel="noopener noreferrer"
          >
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
        <div className="nav--contact">
          <Link to="/contact/">Contact</Link>
        </div>
        <div className="nav--about">
          <Link to="/me/">About</Link>
        </div>
        <DarkModeToggle />
      </nav>
    </header>
  )
}

export default Navigation
