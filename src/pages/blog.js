import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
          body {
            json
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
        {data.allContentfulBlogPost.edges.map(post => (
          <li
            className="blog--display blog--list__display"
            key={post.node.title}
          >
            <AniLink
              direction="right"
              cover
              bg="linear-gradient(to right, #b3b9c5, #90939c, #6e6f74, #4c4c4f, #2d2d2d)"
              className="blog--display__title blog--list__title"
              to={`/${post.node.slug}`}
            >
              <h1>{post.node.title} &rarr;</h1>
            </AniLink>
            <div className="blog--display__date blog--list__date">
              {post.node.publishedDate}
            </div>
            <br />
            <p className="blog--display__excerpt blog--list__excerpt">
              <AniLink
                to={`/${post.node.slug}`}
                direction="right"
                cover
                bg="linear-gradient(to right, #b3b9c5, #90939c, #6e6f74, #4c4c4f, #2d2d2d)"
              >
                Hi
              </AniLink>
            </p>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default Blog
