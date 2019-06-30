import React from "react"
import { Link } from "gatsby"

const ProjectPreview = ({ title, technology, slug, short_description }) => (
  <div className="projects">
    <h1 className="projects__heading">
      <Link to={`/${slug}`}>{title} &rarr;</Link>
    </h1>
    <p className="projects__technology">
      <span className="projects__span">Tech:</span> {technology}
    </p>
    <p className="projects__short__description">
      <span className="projects__span">Brief Overview: </span>
      &nbsp;{short_description}
    </p>
    <hr className="projects--hr" />
  </div>
)

export default ProjectPreview
