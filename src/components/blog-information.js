import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default () => (
  <StaticQuery
    query={graphql`
      query PreviousQuery {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `}
    render={data => (
      <ul className="previous">
        {data.allContentfulBlogPost.edges.map(post => (
          <li key={post.node.id}>
            <AniLink
              direction="right"
              cover
              bg="linear-gradient(to right top, #9932cc, #6e39a4, #4d367a, #342d4e, #222222)"
              to={`/${post.node.slug}`}
            >
              {post.node.title} &rarr; <br />
            </AniLink>
            {post.node.publishedDate}
          </li>
        ))}
      </ul>
    )}
  />
)
