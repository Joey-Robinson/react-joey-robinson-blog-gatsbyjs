import React from "react"
import { Link } from "gatsby"
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
      <Link to="/portfolio/">
        &larr; <span>Back to all projects</span>
      </Link>
    </p>
  </section>
)

export default Project
