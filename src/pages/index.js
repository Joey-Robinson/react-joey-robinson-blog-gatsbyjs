import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TypingHome from "../components/home/typing.home"
import PageHeading from "../components/page.heading"
import HomeImage from "../components/home/home.image"
import hero from "../images/home.hero.gif"
import LazyLoad from "react-lazyload"

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
      <PageHeading content="Home" />
      <TypingHome />
      <div className="home--greeting">
        <p>
          Hello everyone,{" "}
          <span role="img" aria-label="waving hand emoji">
            👋
          </span>
          . Welcome to my personal site. I'm, as stated above, a Front End
          Developer. I don't know what to write here. I'm not great at talking
          about myself. So, here's me. I'm a 33 year old developer. I want
          success in my life and I'm making strides towards that. I work
          incredibly hard and try to learn as much as I can.
          <br />
          <br />
          Here's a picture of my cute dog:
        </p>
        <div className="home--image">
          <HomeImage />
        </div>
        <br />
        <div className="home--bottom">
          <LazyLoad>
            <a href={hero} target="_blank" rel="noopener noreferrer">
              <img
                src={hero}
                alt="Deku being wholesome and protecting his mother while dressed up as All Might."
              />
            </a>
          </LazyLoad>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
