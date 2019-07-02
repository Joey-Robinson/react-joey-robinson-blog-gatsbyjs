import React from "react"
import { Link } from "gatsby"

const AboutProfessional = () => (
  <section className="professional">
    <h1 className="professional--heading">Professional</h1>
    <Link className="professional--back" to="/me/">
      &larr; Go Back
    </Link>
    <hgroup className="professional--hg">
      <h1>My Semi-Charmed Professional Life</h1>
      <h3>Where all my professional goings-on happen</h3>
    </hgroup>
    <p className="professional--opener">
      Hi, I'm Joey Robinson. I'm a self-taught Front-End Developer. I like using
      React and Gatsby to make cool, fun, and interesting things. I'm currently
      looking for my very first Development job. In the meantime, I like
      learning all things related to development.
      <br />
      <br />
      This website will serve as both a place to doument my professional life,
      but will also serve as a place for me to{" "}
      <Link to="/blog/">Share my Blog Posts</Link>, as well as talk about my{" "}
      <Link to="/me/personal/">Personal Life</Link> a bit.
    </p>
  </section>
)

export default AboutProfessional
