import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/main.scss'
import { FaLinkedin } from 'react-icons/fa/index.esm'
import { FaGithub } from 'react-icons/fa/index.esm'
import { MdEmail } from 'react-icons/md/index.esm'
import { FaTwitterSquare } from 'react-icons/fa/index.esm'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Home = () => (
  <Layout>
    <SEO title="Home" description="Home for Joey Robinson" keywords={[`Joey Robinson`, `Blog`, `Front-End`, `Front-End Development`, `React`, `GatsbyJS`, `Joey Robinson Portfolio`]} />
    <section className="home">
      <div className="home--content__banner"></div>
      <div className="home--content__top">
        <h1>Hi, I'm Joey.</h1>
        <p>I'm a Frontend Developer and I like making things. My primary focus is using React (GatsbyJS) and Vanilla JavaScript. I'm not a designer but I enjoy working with S/CSS and CSS Grid. I'm looking to create and maintain amazing websites and web applications. Feel free to contact me with any questions or comments.</p>
        <p>A bit more about me: I started web development in 2017 and have been teaching myself everything I can inside of the development sphere. To read more about me head over to the <AniLink direction="right" cover bg="#05012b" to="/about/">About</AniLink> page.</p>
      </div>
      <ul className="home--content__bottom">
        <li>
          <a href="https://github.com/Joey-Robinson" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/joey-robinson/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="mailto:joeyrobinsondev@gmail.com">
            <MdEmail />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/joeyrobinsondev" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare />
          </a>
        </li>
      </ul>
    </section>
  </Layout>
)


export default Home