import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
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
          <Link to="/blog/">
            &#8592; <span>Go Back</span>
          </Link>
        </div>
        <div className="blogs--content__title">
          <h1>{post.title}</h1>
        </div>
        <div className="blogs--content__main">
          {documentToReactComponents(post.body.json, options)}
        </div>
        <h4 className="blogs--content__maker">{post.publishedDate}</h4>
      </div>
    </Layout>
  )
}

export default BlogTemplate
