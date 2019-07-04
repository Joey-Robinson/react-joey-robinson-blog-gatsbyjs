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
      <section className="content">
        <div className="content__back">
          <Link to="/blog/">
            &#8592; <span>Go Back</span>
          </Link>
        </div>
        <hgroup className="content__title">
          <h1>{post.title}</h1>
          <h4>{post.publishedDate}</h4>
        </hgroup>
        <div className="content__main">
          {documentToReactComponents(post.body.json, options)}
        </div>
      </section>
    </Layout>
  )
}

export default BlogTemplate
