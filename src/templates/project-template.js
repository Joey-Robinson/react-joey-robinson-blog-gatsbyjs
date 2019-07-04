import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/portfolio/project"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      long_description
      url
      technology
      github
      image {
        publicURL
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
  const long_description = project.long_description
  const url = project.url
  const technology = project.technology
  const imageData = project.image.childImageSharp.fluid
  const image = project.image.publicURL
  const github = project.github

  return (
    <Layout>
      <Project
        title={title}
        long_description={long_description}
        imageData={imageData}
        image={image}
        url={url}
        technology={technology}
        github={github}
      />
    </Layout>
  )
}

export default ProjectTemplate
