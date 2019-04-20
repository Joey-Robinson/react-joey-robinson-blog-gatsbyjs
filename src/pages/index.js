import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const Home = () => (
  <Layout>
    <SEO title="Home" keywords={[`Joey Robinson`, `Blog`, `Front-End`, `Front-End Development`, `React`, `GatsbyJS`, `Joey Robinson Portfolio`]} />
    <section className="Home">
      <h1>Hi</h1>
      <Link to="/portfolio/">To Portfolio</Link>
      <Link to="/blog/">To Blog</Link>
    </section>
  </Layout>
)


export default Home