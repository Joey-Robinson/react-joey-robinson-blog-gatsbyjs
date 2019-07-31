import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import "../styles/main.scss"
import HomeFab from "./home-fab"

const Layout = ({ children }) => {
  return (
    <>
      <main className="primary">
        <Navigation />
        <HomeFab />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
