import React from "react"
import { Link } from "gatsby"

const ProjectPreview = ({ title, technology, slug }) => (
  <div className="projects">
    <h1 className="projects__heading">
      <Link to={`/${slug}`}>{title} &rarr;</Link>
    </h1>
    <p className="projects__technology">
      <span>Tech:</span> {technology}
    </p>
    <hr />
  </div>
)

export default ProjectPreview
