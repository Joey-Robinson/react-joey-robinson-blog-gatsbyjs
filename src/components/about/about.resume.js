import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ResumeDownload = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {data.allFile.edges.map((file, index) => {
          return (
            <li key={`pdf-${index}`}>
              <a href={file.node.publicURL} download>
                <button className="about--download">
                  Download: {file.node.name}
                </button>
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default ResumeDownload
