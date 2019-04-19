import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title="Blog" keywords={[`Joey Robinson`]} />
      <div className="blog-content">
        <Link className="blog-content-goBack" to="/blog/">Go Back</Link>
        <h5>{post.frontmatter.date}</h5>
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-content-main"
          dangerouslySetInnerHTML={{ __html: post.html }} />
        <h4 className="blog-content-maker">
          Posted by: {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: {path: {eq: $path}}){
      html
      frontmatter {
        path
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`