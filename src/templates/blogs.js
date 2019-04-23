import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

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

// {
//   "data": {
//     "markdownRemark": {
//       "html": "<p>Hello</p>",
//       "frontmatter": {
//         "path": "/test-blog-post/",
//         "title": "Test Blog Post",
//         "author": "JBear",
//         "date": "February 01, 2019"
//       }
//     }
//   }
// }

const BlogTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="blogs">
        <Link className="blogs--content__back" to="/blog/">Go Back</Link>
        <h5>{post.frontmatter.date}</h5>
        <h1>{post.frontmatter.author}</h1>
        <div
          className="blogs--content__main"
          dangerouslySetInnerHTML={{ __html: post.html }} 
        />
        <h4 className="blogs--content__maker">
          Posted by: {post.frontmatter.title} on {post.frontmatter.path}
        </h4>
      </div>
    </Layout>
  )
}

export default BlogTemplate