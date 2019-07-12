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
      <h1 className="home--heading projects__span">Home</h1>
      <TypingHome />
      <div className="home--test"></div>
      <div className="home--greeting">
        <p>
          Hello everyone, 👋. Welcome to my personal site. I'm, as stated above,
          a Front End Developer. I don't know what to write here. I'm not great
          at talking about myself. So, here's me. I'm a 33 year old developer. I
          want success in my life and I'm making strides towards that. I work
          incredibly hard and try to learn as much as I can.
        </p>
        <p>
          I want to be the best me I can be. I want to be an amazing developer
          that people recognize for making amazing content and products that
          people enjoy using.
        </p>
        <p></p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
