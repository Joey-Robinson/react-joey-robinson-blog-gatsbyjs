import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

export const AboutImage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "about.image.png" }) {
          childImageSharp {
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
      }
    `}
    render={data => (
      <a
        href={data.image.childImageSharp.fluid.src}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="An example of my development environment"
        />
      </a>
    )}
  />
)

export default AboutImage
