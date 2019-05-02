import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from 'gatsby-image'

const ProjectPreview = ({ title, description, technology, slug, imageData }) => (
  <div className="portfolio--preview preview">
    <AniLink direction="right" cover bg="#222222" className="preview--image" to={`/${slug}`}>
      <Image className="wow" fluid={imageData} alt={title} />
    </AniLink>
      <div className="preview--content">
        <h2 className="preview--content__heading">
          <AniLink direction="right" cover bg="#222222" to={`/${slug}`}>{title} &rarr;</AniLink>
        </h2>
          <p className="preview--content__technology"><span>Tech:</span> {technology}</p> 
      </div>
  </div>
);

export default ProjectPreview
