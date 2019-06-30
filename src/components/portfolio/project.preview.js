import React from "react"
import { Link } from "gatsby"

const ProjectPreview = ({ title, technology, slug, short_description }) => (
  <div className="projects">
    <h1 className="projects__heading">
      <Link to={`/${slug}`}>{title} &rarr;</Link>
    </h1>
    <p className="projects__technology">
      <span>Tech:</span> {technology}
    </p>
    <p className="projects__short__description">
      <span>Brief Overview: </span>
      {short_description}
    </p>
    <hr />
  </div>
)

export default ProjectPreview
