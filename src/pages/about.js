import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title="About" description="About Page for Joey Robinson" keywords={[`Joey Robinson`, `Blog`, `Front-End`, `Front-End Development`, `React`, `GatsbyJS`, `Joey Robinson Portfolio`]} />
    <section className="about">
      <div className="about--top">
        
      </div>
      <div className="about--main">
        <h1>A bit of history:</h1>
        <p>Well, this is me. As stated on the home page, I'm a Frontend Developer. I started this journey roughly 2 years and I absolutely love it. I love being able to control every aspect of what I or someone else sees. I'm just trying to make amazing stuff with what I've learned and hopefully soon I make find a more professional role that will enable me to do that on a larger scale.</p>
        <p>In my spare time I'm usually reading documentation on specific technologies or watching youtube videos about an idea or concept I find interesting. When I need a break, I'll usually watch some anime (Anything is acceptable except <s>Evangelion</s>) or play with my wonderful dog.</p>
        <p>I currently don't have my primary computer with me but when I do, I enjoy playing a variety of games which range from RPG to RTS.</p>
      </div>
    </section>
  </Layout>
)


export default About