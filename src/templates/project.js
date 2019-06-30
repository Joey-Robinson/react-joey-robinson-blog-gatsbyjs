import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/portfolio/project"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      short_description
      url
      technology
      github
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson
  const title = project.title
  const short_description = project.short_description
  const url = project.url
  const technology = project.technology
  const imageData = project.image.childImageSharp.fluid
  const github = project.github

  return (
    <Layout>
      <Project
        title={title}
        short_description={short_description}
        imageData={imageData}
        url={url}
        technology={technology}
        github={github}
      />
    </Layout>
  )
}

export default ProjectTemplate
