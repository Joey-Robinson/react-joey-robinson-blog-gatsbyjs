import React from "react"
import useDarkMode from "use-dark-mode"
import sun from "../images/sun.svg"
import moon from "../images/moon.svg"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <div className="header--mode">
      <button onClick={darkMode.toggle}>
        {darkMode.value ? (
          <img src={sun} alt="Light Mode" />
        ) : (
          <img src={moon} alt="Dark Mode" />
        )}
      </button>
    </div>
  )
}

export default DarkModeToggle
