import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            author
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => (
  <Layout>
    <SEO
      title="Blog"
      description="Blog for Joey Robinson"
      keywords={[
        `Joey Robinson`,
        `Blog`,
        `Front-End`,
        `Front-End Development`,
        `React`,
        `GatsbyJS`,
        `Joey Robinson Blog`,
      ]}
    />
    <section className="blog">
      <div className="blog--top" />
      <ul className="blog--list">
        {data.allMarkdownRemark.edges.map(post => (
          <li className="blog--display blog--list__display" key={post.node.id}>
            <AniLink
              direction="right"
              cover
              bg="#222222"
              className="blog--display__title blog--list__title"
              to={post.node.frontmatter.path}
            >
              <h1>{post.node.frontmatter.title}</h1>
            </AniLink>
            <div className="blog--display__date blog--list__date">
              {post.node.frontmatter.date}
            </div>
            <br />
            <p className="blog--display__excerpt blog--list__excerpt">
              <AniLink
                to={post.node.frontmatter.path}
                direction="right"
                cover
                bg="#222222"
              >
                {post.node.excerpt}
              </AniLink>
            </p>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default Blog
