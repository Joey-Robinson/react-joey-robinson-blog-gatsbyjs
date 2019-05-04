import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
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
      <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li key={post.node.id}>
          <AniLink
            direction="right" cover bg="#222222"
            to={post.node.frontmatter.path}
          >
          {post.node.frontmatter.title}
          </AniLink>
          {post.node.frontmatter.date}
        </li>
      ))}
    </ul>
    )}
  />
)