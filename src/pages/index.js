import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home">
      <a
        className="twitter-follow-button"
        href="https://twitter.com/joeyrobinsondev"
        data-size="large"
        data-show-screen-name="false"
      >
        Follow @joeyrobinsondev
      </a>
    </section>
  </Layout>
)

export default IndexPage
