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
          excerpt
          publishedDate(formatString: "MMMM Do, YYYY")
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
              bg="linear-gradient(to right top, #9932cc, #6e39a4, #4d367a, #342d4e, #222222)"
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
                bg="linear-gradient(to right top, #9932cc, #6e39a4, #4d367a, #342d4e, #222222)"
              >
                {post.node.excerpt}
              </AniLink>
              <hr />
            </p>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default Blog
