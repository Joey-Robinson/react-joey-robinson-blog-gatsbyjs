import React from "react"
import useDarkMode from "use-dark-mode"
import sun from "../images/sun.svg"
import moon from "../images/moon.svg"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <div className="nav--mode">
      <button onClick={darkMode.toggle}>
        {!darkMode.value ? (
          <img src={moon} alt="Dark Mode" />
        ) : (
          <img src={sun} alt="Light Mode" />
        )}
      </button>
    </div>
  )
}

export default DarkModeToggle
