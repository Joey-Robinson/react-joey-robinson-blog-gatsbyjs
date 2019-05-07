import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/project"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
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
  const description = project.description
  const url = project.url
  const technology = project.technology
  const imageData = project.image.childImageSharp.fluid
  const github = project.github

  return (
    <Layout>
      <Project
        title={title}
        description={description}
        imageData={imageData}
        url={url}
        technology={technology}
        github={github}
      />
    </Layout>
  )
}

export default ProjectTemplate
