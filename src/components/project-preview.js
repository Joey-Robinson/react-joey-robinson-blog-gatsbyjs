import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const ProjectPreview = ({ title, description, technology, slug, imageData }) => (
  <div className="portfolio--preview preview">
    <Link className="preview--image" to={`portfolio/${slug}/`}>
      <Image className="wow" fluid={imageData} alt={title} />
    </Link>
      <div className="preview--content">
        <h2 className="preview--content__heading">
          <Link to={`portfolio/${slug}/`}>{title}</Link>
        </h2>
          <p className="preview--content__description">{description}</p>
          <p className="preview--content__technology">{technology}</p> 
          <p className="preview--content__view">
            <Link to={`portfolio/${slug}/`}>View this project &rarr;</Link>
          </p>
      </div>
  </div>
);

export default ProjectPreview
