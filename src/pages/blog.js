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
      description="Blog Page for Joey Robinson's Website"
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
      <>
        <h1 className="blog--heading">Blog</h1>
        {data.allContentfulBlogPost.edges.map(post => (
          <div key={post.node.title} className="container">
            <h1 className="container--title">
              <Link to={`/${post.node.slug}/`}>{post.node.title} &rarr;</Link>
            </h1>
            <p className="container--date">{post.node.publishedDate}</p>
            <p className="container--excerpt">{post.node.excerpt}</p>
          </div>
        ))}
      </>
    </section>
  </Layout>
)

export default Blog
