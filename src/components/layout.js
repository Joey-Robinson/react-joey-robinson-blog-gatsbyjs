import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <>
    <main className="content">
      <Header />
      <div className="content--stars"></div>
      <div className="content--twinkling"></div>
      <div className="content--sky"></div>
      {children}
      <Footer />
    </main>
  </>
)

export default Layout