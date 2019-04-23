import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <>
    <main className="content">
      <Header />
      <div class="content--stars"></div>
    <div class="content--twinkling"></div>
    <div class="content--sky"></div>
      {children}
      <Footer />
    </main>
  </>
)

export default Layout