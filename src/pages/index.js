import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TypingHome from "../components/home/typing.home"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Home Page for Joey Robinson's Website"
      keywords={[
        `Joey Robinson`,
        `Portfolio`,
        `Front-End`,
        `Front-End Development`,
        `React`,
        `GatsbyJS`,
        `Joey Robinson Portfolio`,
      ]}
    />
    <section className="home">
      <h1 className="home--heading">Home</h1>
      <TypingHome />
      <div className="home--greeting">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          inventore iure molestiae reiciendis saepe beatae sunt autem
          necessitatibus mollitia ipsum!
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
