import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ProjectPreview = ({ title, technology, slug }) => (
  <div className="projects">
    &#x1F984;
    <h1 className="projects__heading">
      <AniLink direction="right" cover bg="#222222" to={`/${slug}`}>{title} &rarr;</AniLink>
    </h1>
      <p className="projects__technology"><span>Tech:</span> {technology}</p> 
      <hr/>
  </div>
);

export default ProjectPreview
