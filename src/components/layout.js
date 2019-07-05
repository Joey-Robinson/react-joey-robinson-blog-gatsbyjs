import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import "../styles/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main className="primary">
        <Navigation />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
