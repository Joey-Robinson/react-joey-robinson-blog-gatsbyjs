import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TypingHome from "../components/home/typing.home"
import PageHeading from "../components/page.heading"
import HomeImage from "../components/home/home.image"

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
        <div className="home--bottom">
          <p>
            I don't have much else to say. I love Hamilton, The Musical. I like
            a lot of heavy rock. I'm self-conscious but like to put on a front.
            I often take criticism very personal and try to not show it. I've
            overcome many obstacles to be where I am now, but I'm nowhere near
            where I want to be. Until I get there, I'll continue to keep moving
            forward towards my own personal goals.
          </p>
          <p>
            I like thought provoking questions and discussions. Some people will
            say I'm overly optimistic but I see that as a strength. I can come
            off as cold or rude at times, but that's not anyones fault but my
            own.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
