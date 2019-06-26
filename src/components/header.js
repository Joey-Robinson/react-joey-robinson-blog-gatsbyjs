import React, { useState, useEffect } from "react"
import DarkModeToggle from "./dark-mode"

const Header = () => {
  // const [scroll, setScroll] = useState(false)

  return (
    <header className="header">
      <h1>From header</h1>
      <DarkModeToggle />
    </header>
  )
}

export default Header
