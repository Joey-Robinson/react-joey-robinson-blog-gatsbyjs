import React from 'react'
// import { Link } from 'gatsby'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <>
    <main className="content">
      <Header />
      {children}
      <Footer />
    </main>
  </>
);

export default Layout