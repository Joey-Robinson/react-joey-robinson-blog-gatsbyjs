import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const ProjectPreview = ({ title, description, technology, slug, imageData }) => (
  <div className="portfolio--preview preview">
    <Link to={`portfolio/${slug}/`}>
      <Image className="wow" fluid={imageData} alt={title} />
    </Link>
    <h2>
      <Link to={`portfolio/${slug}/`}>{title}</Link>
    </h2>
    <p>{description}</p>
    <p>{technology}</p>
    <p>
      <Link to={`portfolio/${slug}/`}>View this project &rarr;</Link>
    </p>
  </div>
);

export default ProjectPreview
