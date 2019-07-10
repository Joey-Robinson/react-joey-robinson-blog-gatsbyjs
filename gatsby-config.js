require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Joey Robinson`,
    description: `Portfolio for Joey Robinson`,
    author: `@joeyrobinsondev`,
    site: "https://joeyrobinson.netlify.com/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: "./data",
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/static`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          heading: null,
          maxDepth: 6,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    feeds: [
      {
        serialize: ({ query: { site, allContentfulBlogPost } }) => {
          return allContentfulBlogPost.edges.map(edge => {
            return Object.assign({}, edge.node.frontmatter, {
              description: edge.node.excerpt,
              date: edge.node.frontmatter.date,
              url: site.siteMetadata.siteUrl + edge.node.fields.slug,
              guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
              custom_elements: [{ "content:encoded": edge.node.html }],
            })
          })
        },
        query: `
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
            `,
        output: "/rss.xml",
        title: "Your Site's RSS Feed",
      },
    ],
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joey Robinson Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
