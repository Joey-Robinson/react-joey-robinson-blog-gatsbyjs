import React from 'react'
import AniLink from 'gatsby-plugin-transition-link'
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
      <AniLink direction="left" cover bg="#05012b" to="/portfolio/">&larr; back to all projects</AniLink>
    </p>
  </div>
);

export default Project
