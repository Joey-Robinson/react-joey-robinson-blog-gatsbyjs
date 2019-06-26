import React from "react"
import Header from "./header"
import "../styles/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main className="primary">
        <Header />
        {children}
      </main>
    </>
  )
}

export default Layout
