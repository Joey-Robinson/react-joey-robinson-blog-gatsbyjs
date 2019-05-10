import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO
      title="About"
      description="About Page for Joey Robinson"
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
    <section className="about">
      <div className="about--top" />
      <div className="about__resources">
        <h1>Resources</h1>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://anichart.net/Spring-2019"
            >
              AniChart &rarr;
            </a>
            Seasonal anime chart viewer.
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.animenewsnetwork.com/"
            >
              Anime Newsnetwork &rarr;
            </a>
            Reports on anime, manga, and more.
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://myanimelist.net/"
            >
              Myanime List &rarr;
            </a>
            Social Networking for Anime.
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/"
            >
              ReactJS &rarr;
            </a>
            Official docs for react.
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gatsbyjs.org/"
            >
              GatsbyJS &rarr;
            </a>
            Official site for GatsbyJS.
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://dev.to/">
              Dev.to &rarr;
            </a>
            Great resource for development articles.
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/"
            >
              MDN &rarr;
            </a>
            Mozilla Developer Network.
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://css-tricks.com/"
            >
              CSS Tricks &rarr;
            </a>
            Everything you need for CSS & more.
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://stackoverflow.com/"
            >
              Stackoverflow &rarr;
            </a>
            Duplicate, deleted.
          </li>
        </ul>
      </div>
      <div className="about--left">
        <h1>Me</h1>
        <p>
          I'm Joey Robinson. I'm a Frontend Developer. I'm currently not
          employed anywhere. I've been teaching myself to write code since 2017
          and I absolutely love it. In addition to being a developer, I also
          love learning. Not just about development trends and technologies, but
          learning in general.
        </p>
        <p>
          I'm a huge Geek or Nerd. Whatever fits. I love technology, movies, and
          anime. I especially love anime. It's been an important part of my life
          for the better part of 20 years.
        </p>
        <p>
          I just want to make amazing things. I made this website to showcase
          some of my skills and I hope that someone will notice it. I love
          everything about writing code.
        </p>
        <p>
          As stated above, I've been writing code since 2017. I don't see myself
          doing anything else. I enjoy what I do and have a deep passion and
          desire to do it more.
        </p>
        <p>
          In the right column, I have a list of resources I use on almost a
          daily basis.{" "}
        </p>
      </div>
    </section>
  </Layout>
)

export default About
