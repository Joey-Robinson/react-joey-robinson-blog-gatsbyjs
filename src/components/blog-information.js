import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default () => (
  <StaticQuery
    query={graphql`
      query PreviousQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ul className="previous">
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.id}>
            <AniLink
              direction="right"
              cover
              bg="linear-gradient(to right, #b3b9c5, #90939c, #6e6f74, #4c4c4f, #2d2d2d)"
              to={post.node.frontmatter.path}
            >
              {post.node.frontmatter.title} &rarr; <br />
            </AniLink>
            {post.node.frontmatter.date}
          </li>
        ))}
      </ul>
    )}
  />
)
