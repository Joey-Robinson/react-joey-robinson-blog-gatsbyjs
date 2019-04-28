import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const Project = ({ title, description, technology, url, imageData }) => (
  <section className="project">
    <h1 className="project--title">{title}</h1>
      <Image className="project--image image" fluid={imageData} alt={title} />
    <p className="project--description">{description}</p>
    <p className="project--technology">{technology}</p>
    <p className="project--live">
      <a href={url} target="_blank" rel="noopener noreferrer">View this project online &rarr;</a>
    </p>
    <p className="project--back">
      <Link to="/portfolio/">&larr; Back to all projects</Link>
    </p>
  </section>
);

export default Project
