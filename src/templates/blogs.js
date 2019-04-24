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
        <div className="blogs--content__back">
          <Link to="/blog/">&#8592; Go Back</Link>
        </div>
        <div className="blogs--content__title">
          <h1>{post.frontmatter.title}</h1>
        </div>
        <div
          className="blogs--content__main"
          dangerouslySetInnerHTML={{ __html: post.html }} 
        />
        <h4 className="blogs--content__maker">
          Posted by: {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
      </div>
    </Layout>
  )
}

export default BlogTemplate