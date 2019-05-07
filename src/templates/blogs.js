import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogInformation from "../components/blog-information"

export const postQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
        <div className="blogs--content__top" />
        <div className="blogs--content__back">
          <AniLink
            direction="left"
            cover
            bg="linear-gradient(to left, #b3b9c5, #90939c, #6e6f74, #4c4c4f, #2d2d2d)"
            to="/blog/"
          >
            &#8592; Go Back
          </AniLink>
        </div>
        <div className="blogs--content__title">
          <h1>{post.frontmatter.title}</h1>
        </div>
        <div
          className="blogs--content__main"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="blogs--content__left">
          <BlogInformation />
        </div>
        <h4 className="blogs--content__maker">{post.frontmatter.date}</h4>
      </div>
    </Layout>
  )
}

export default BlogTemplate
