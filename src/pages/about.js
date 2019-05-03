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
        <h1>Me</h1>
        <p>I'm Joey Robinson. I'm a Frontend Developer. I'm currently not employed anywhere. I've been teaching myself to write code since 2017 and I absolutely love it. In addition to being a developer, I also love learning. Not just about development trends and technologies, but learning in general.</p>
      </div>
    </section>
  </Layout>
)


export default About