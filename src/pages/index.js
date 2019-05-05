import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.scss"
import { FaLinkedin } from "react-icons/fa/index.esm"
import { FaGithub } from "react-icons/fa/index.esm"
import { MdEmail } from "react-icons/md/index.esm"
import { FaTwitterSquare } from "react-icons/fa/index.esm"
import Typed from "react-typed"

const Home = () => (
  <Layout>
    <SEO
      title="Home"
      description="Home for Joey Robinson"
      keywords={[
        `Joey Robinson`,
        `Blog`,
        `Front-End`,
        `Front-End Development`,
        `React`,
        `GatsbyJS`,
        `Joey Robinson Portfolio`,
      ]}
    />
    <section className="home">
      <div className="home--content__banner" />
      <div className="home--content__top">
        <h1>
          Hi! I'm Joey, I'm a&nbsp;
          <Typed
            strings={[
              "Develoepr",
              "Developer.",
              "Reader.",
              "(Poor) Writer.",
              "Person.",
              "Geek.",
              "Nerd.",
              "One Piece Fanatic.",
            ]}
            typeSpeed={90}
            backSpeed={110}
            backDelay={1000}
            loop
          />
        </h1>
      </div>
      <ul className="home--content__bottom">
        <li>
          <a
            href="https://github.com/Joey-Robinson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub aria-label="GitHub" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joey-robinson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin aria-label="LinkedIn" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/joeyrobinsondev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare aria-label="Twitter" />
          </a>
        </li>
        <li>
          <a href="mailto:joeyrobinsondev@gmail.com">
            <MdEmail aria-label="Email" />
          </a>
        </li>
      </ul>
    </section>
  </Layout>
)

export default Home
