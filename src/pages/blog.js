import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

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
      <ul className="blog--list">
        {data.allContentfulBlogPost.edges.map(post => (
          <li
            className="blog--display blog--list__display"
            key={post.node.title}
          >
            <Link
              className="blog--display__title blog--list__title"
              to={`/${post.node.slug}`}
            >
              <h1>{post.node.title} &rarr;</h1>
            </Link>
            <div className="blog--display__date blog--list__date">
              {post.node.publishedDate}
            </div>
            <br />
            <p className="blog--display__excerpt blog--list__excerpt">
              <Link to={`/${post.node.slug}`}>{post.node.excerpt}</Link>
            </p>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default Blog
