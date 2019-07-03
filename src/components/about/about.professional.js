import React from "react"
import { Link } from "gatsby"
import AboutImage from "./about.image"

const AboutProfessional = () => (
  <section className="professional">
    <h1 className="professional--heading">Professional</h1>
    <Link className="professional--back" to="/me/">
      &larr; Go Back
    </Link>
    <hgroup className="professional--hg">
      <h1>My Semi-Charmed Kind Of Professional Life</h1>
      <h3>Where all my professional goings-on happen</h3>
    </hgroup>
    <p className="professional--opener">
      Hi, I'm Joey Robinson. I'm a self-taught Front-End Developer. I've been
      writing code since the middle of 2017, and I couldn't imagine myself doing
      anything else. I love getting lost in writing code and figuring out how
      something works, or how to make something work. I'm currently looking for
      my very first Development job. In the meantime, I like learning all things
      related to development.
      <br />
      <br />
      Right now I'm enjoying working with React & GatsbyJS, though I do enjoy
      Vanilla JavaScript. I also have a deep passion for all things CSS Grid
      realted, as it's the way the web should and will be.
    </p>
    <div className="professional--image">
      <AboutImage />
    </div>
    <div className="professional--bottom">
      <p></p>
    </div>
  </section>
)

export default AboutProfessional
