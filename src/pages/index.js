import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/main.scss'

const Home = () => (
  <Layout>
    <SEO title="Home" description="Home for Joey Robinson" keywords={[`Joey Robinson`, `Blog`, `Front-End`, `Front-End Development`, `React`, `GatsbyJS`, `Joey Robinson Portfolio`]} />
    <section className="home">
    <div className="home--content__top">
      <h1>weonfwe</h1>
    </div>
    <div className="home--content__bottom">
      <h1>From home--content__bottom</h1>
    </div>
    </section>
  </Layout>
)


export default Home