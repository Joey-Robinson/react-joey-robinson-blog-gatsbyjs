import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/main.scss'

const Home = () => (
  <Layout>
    <SEO title="Home" description="Home for Joey Robinson" keywords={[`Joey Robinson`, `Blog`, `Front-End`, `Front-End Development`, `React`, `GatsbyJS`, `Joey Robinson Portfolio`]} />
    <section className="home">
    <div class="stars"></div>
    <div class="twinkling"></div>
    <div class="sky"></div>
      <h1>Hi</h1>
    </section>
  </Layout>
)


export default Home