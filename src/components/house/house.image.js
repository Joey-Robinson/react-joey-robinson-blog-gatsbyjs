import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export const HouseImage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "house" } }) {
        edges {
          node {
            id
            absolutePath
            publicURL
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
      }
    }
  `)

  const houseImages = data.allFile.edges

  return (
    <>
      {houseImages.map(img => (
        <a
          href={img.node.childImageSharp.fluid.src}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={img.node.childImageSharp.fluid} />
          <br />
        </a>
      ))}
    </>
  )
}

export default HouseImage
