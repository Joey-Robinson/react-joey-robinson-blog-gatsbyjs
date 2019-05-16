# Portfolio - Version 4 (V4)

### Technologies used:

- GatsbyJS / React
- GraphQL
- SCSS
- CSS Grid
- Contentful CMS
- React-Typed

### Technology Usage:

- Gatsby was used to create the files and information presented. I used the createPages function provided by Gatsby to programmatically create new pages from internal and external data. See below:

```javascript
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const projects = result.data.allProjectsJson.edges
  const posts = result.data.allContentfulBlogPost.edges

  posts.forEach(({ node: post }) => {
    const slug = post.slug
    actions.createPage({
      path: `${slug}`,
      component: require.resolve("./src/templates/blogs.js"),
    })
  })

  projects.forEach(({ node: project }) => {
    const slug = project.slug
    actions.createPage({
      path: `/${slug}`,
      component: require.resolve("./src/templates/project.js"),
      context: { slug },
    })
  })
}
```

Using the above, I'm able to create pages on the fly fromt he data that is provided. I'm extracting the data from both the data folder and the Contentful CMS (which is provided via .env variables) to render the information.
