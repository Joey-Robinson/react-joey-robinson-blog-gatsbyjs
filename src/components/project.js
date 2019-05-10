import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"

const Project = ({
  title,
  description,
  technology,
  url,
  github,
  imageData,
}) => (
  <section className="project">
    <div className="project--left" />
    <h1 className="project--title">{title}</h1>
    <Image className="project--image image" fluid={imageData} alt={title} />
    <p className="project--description">{description}</p>
    <p className="project--technology">
      <span>Tech:</span> {technology}
    </p>
    <p className="project--github">
      <a href={github} target="_blank" rel="noopener noreferrer">
        Visit the GitHub &rarr;
      </a>
    </p>
    <p className="project--live">
      <a href={url} target="_blank" rel="noopener noreferrer">
        View this project online &rarr;
      </a>
    </p>
    <p className="project--back">
      <AniLink
        direction="left"
        cover
        bg="linear-gradient(to left top, #9932cc, #6e39a4, #4d367a, #342d4e, #222222)"
        to="/portfolio/"
      >
        &larr; Back to all projects
      </AniLink>
    </p>
  </section>
)

export default Project
