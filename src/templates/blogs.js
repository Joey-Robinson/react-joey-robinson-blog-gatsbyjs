import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogInformation from "../components/blog-information"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const postQuery = graphql`
  query BlogPostByPath($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const BlogTemplate = ({ data }) => {
  const post = data.contentfulBlogPost
  const options = {
    renderNode: {
      "embeded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={alt} />
      },
    },
  }
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
          <h1>{post.title}</h1>
        </div>
        <div className="blogs--content__main">
          {documentToReactComponents(post.body.json, options)}
        </div>
        <div className="blogs--content__left">
          <BlogInformation />
        </div>
        <h4 className="blogs--content__maker">{post.publishedDate}</h4>
      </div>
    </Layout>
  )
}

export default BlogTemplate
