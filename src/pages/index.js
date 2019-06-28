import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TypingHome from "../components/home/typing.home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home">
      <TypingHome />
      <h1>I'm currently live-updating this. Keep checking back.</h1>
    </section>
  </Layout>
)

export default IndexPage
