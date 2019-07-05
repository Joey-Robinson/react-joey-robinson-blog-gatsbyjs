import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({
  title,
  long_description,
  technology,
  url,
  github,
  imageData,
  image,
}) => (
  <section className="project">
    <h1 className="project--title">
      <span className="projects__span">Name:</span>&nbsp;
      {title}
    </h1>
    <a
      href={image}
      target="_blank"
      rel="noopener noreferrer"
      className="project--container"
    >
      <Image className="project--image image" fluid={imageData} alt={title} />
    </a>
    <p className="project__long__description">{long_description}</p>
    <p className="project--technology">
      <span className="projects__span">Tech:</span> {technology}
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
