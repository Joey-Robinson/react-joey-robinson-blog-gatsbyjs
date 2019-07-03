import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import ResumeDownload from "../components/about/about.resume"

const Me = () => (
  <Layout>
    <section className="about">
      <span className="about__information">
        <h1>Information</h1>
      </span>
      <span className="about__prof">
        <Link to="/me/professional">Go To Professional</Link>
      </span>
      <span className="about__pers">
        <Link to="/me/personal">Go To Personal</Link>
      </span>
      <h1 className="about--heading">About Me</h1>
      <div className="about--opening">
        <p>
          Here I've broken my professional and personal life into two different
          sections. You can click{" "}
          <Link to="/me/professional/">here, to see my Professional</Link> life.
          That will give you some insight into my professional happenings. I'll
          feature useful links to resources that I frequently use. You can also
          find ways to contact me there through various avenues.
          <br />
          <br />
          Alternatively, you can visit{" "}
          <Link to="/me/personal">the Personal side of things</Link> to get a
          view into my personal life. I'll have links not directly related to
          Web Development. I'll also have some interesting life facts about
          myself and my upbrining.
        </p>
        <ResumeDownload />
      </div>
    </section>
  </Layout>
)

export default Me
