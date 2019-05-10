import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ProjectPreview = ({ title, technology, slug }) => (
  <div className="projects">
    <h1 className="projects__heading">
      <AniLink
        direction="right"
        cover
        bg="linear-gradient(to right top, #9932cc, #6e39a4, #4d367a, #342d4e, #222222)"
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
