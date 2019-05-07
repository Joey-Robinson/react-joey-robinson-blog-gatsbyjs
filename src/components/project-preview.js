import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ProjectPreview = ({ title, technology, slug }) => (
  <div className="projects">
    <h1 className="projects__heading">
      <AniLink
        direction="right"
        cover
        bg="linear-gradient(to right, #b3b9c5, #90939c, #6e6f74, #4c4c4f, #2d2d2d)"
        to={`/${slug}`}
      >
        {title} &rarr;
      </AniLink>
    </h1>
    <p className="projects__technology">
      <span>Tech:</span> {technology}
    </p>
    <hr />
  </div>
)

export default ProjectPreview
