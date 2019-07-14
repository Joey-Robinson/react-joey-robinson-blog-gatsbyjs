import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

export const HomeImage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "home.image.jpg" }) {
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
      <>
        <a
          href={data.image.childImageSharp.fluid.src}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            fluid={data.image.childImageSharp.fluid}
            alt="A cute dog in a sweater in the snow."
          />
        </a>
        <br />
        <span
          style={{
            fontSize: "1.4rem",
          }}
        >
          My Dog
        </span>
      </>
    )}
  />
)

export default HomeImage
