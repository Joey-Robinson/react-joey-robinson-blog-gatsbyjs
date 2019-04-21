import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }){
      edges {
        node {
          id
          excerpt(pruneLength: 50)
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
    <SEO title="Blog" description="Blog for Joey Robinson" keywords={[`Joey Robinson`, `Blog`, `Front-End`, `Front-End Development`, `React`, `GatsbyJS`, `Joey Robinson Blog`]} />
    <section className="blog">
      {data.allMarkdownRemark.edges.map(post => (
        <div className="blog-display" key={post.node.id}>
          <Link
            className="blog-display-title"
            to={post.node.frontmatter.path}
          >
            <h1 className="blog-display-title-h1">
              {post.node.frontmatter.title}
            </h1>
          </Link>
          <div className="blog-display-postedBy">
            {post.node.frontmatter.date}
          </div>
          <p className="blog-display-excerpt">
            {post.node.excerpt}
          </p>
        </div>
      ))}
    </section>
  </Layout>
)

export default Blog