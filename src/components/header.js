import React, { useState, useEffect } from "react"
import DarkModeToggle from "./dark-mode"

const Header = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // if (window.scrollY > 20) {
      //   setScroll(true)
      // } else {
      //   setScroll(false)
      // }
      {
        window.scrollY > 20 ? setScroll(true) : setScroll(false)
      }
    })
    return () => {
      setScroll()
    }
  }, [])

  return (
    <header className={scroll ? "header scroll" : "header"}>
      <h1>Joey Robinson</h1>
      <DarkModeToggle />
    </header>
  )
}

export default Header
