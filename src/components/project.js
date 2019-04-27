import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const Project = ({ title, description, technology, url, imageData }) => (
  <div>
    <h1>{title}</h1>
      <Image fluid={imageData} alt={title} />
    <p>{description}</p>
    <p>{technology}</p>
    <p>
      <a href={url} target="_blank" rel="noopener noreferrer">View this project online &rarr;</a>
    </p>
    <p>
      <Link to="/portfolio/">&larr; back to all projects</Link>
    </p>
  </div>
);

export default Project
