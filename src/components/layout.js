import React from "react"
import Navigation from "./navigation"
import "../styles/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main className="primary">
        <Navigation />
        {children}
      </main>
    </>
  )
}

export default Layout
