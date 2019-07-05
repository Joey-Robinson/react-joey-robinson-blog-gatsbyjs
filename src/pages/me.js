import React from "react"
import AboutImage from "../components/about/about.image"
import Layout from "../components/layout"
import ResumeDownload from "../components/about/about.resume"
import ContactList from "../components/contact/contact.list"

const Me = () => (
  <Layout>
    <section className="about">
      <h1 className="about--heading">About</h1>
      <hgroup className="about--hg">
        <h1>My Semi-Charmed Kind Of Professional Life</h1>
        <h3>Where all my professional goings-on happen</h3>
      </hgroup>
      <p>
        Hi, I'm Joey Robinson. I'm a self-taught Front-End Developer. I've been
        writing code since the middle of 2017, and I couldn't imagine myself
        doing anything else. I love getting lost in writing code and figuring
        out how something works, or how to make something work. I'm currently
        looking for my very first Development job that will help me grow as a
        developer.
      </p>
      <p>
        While I patiently wait on my first opportunity, I like to make things
        with Gatsby (Like this website you're on right now) and React. I also
        enjoy Vanilla JavaScript, though not as much as React, but it's all JS
        in the end. One of the biggest reasons I enjoy Gatsby so much is because
        of GraphQL. I enjoy the structure and general idea of GraphQL and I look
        forward to seeing it really take over the development world, more than
        it already has.
      </p>
      <p>
        While I do enjoy JavaScript, I also enjoy CSS and CSS Grid. I know Grid
        is the future of web layout and web design. I absolutely love working
        with Grid and thinking of the complex layouts I can make with it.
      </p>
      <div className="about--image">
        <AboutImage />
      </div>
      <div className="about--bottom">
        <h1>Technical Skills:</h1>
        <ul>
          <li>Vanilla JavaScript</li>
          <li>React</li>
          <li>GatsbyJS</li>
          <li>CSS</li>
          <li>CSS Grid</li>
          <li>CSS Flexbox</li>
          <li>SCSS</li>
          <li>SASS</li>
          <li>PostCSS</li>
          <li>npm</li>
          <li>npm scripts</li>
          <li>webpack</li>
          <li>babel</li>
          <li>Version Control - git</li>
          <li>GitHub</li>
          <li>GraphQL</li>
          <li>Cross Browser Testing</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>HTML</li>
          <li>AJAX</li>
          <li>fetch</li>
          <li>Responsive Design</li>
          <li>Mobile First Design</li>
          <li>Windows Development Environment</li>
          <li>MacOS Development Environment</li>
          <li>Cross Browser Testing</li>
        </ul>
      </div>
      <div className="about--contact">
        <h1>Contact:</h1>
        <ContactList />
      </div>
      <div className="about--resume">
        <h1>Resume Download:</h1>
        <ResumeDownload />
      </div>
    </section>
  </Layout>
)

export default Me
