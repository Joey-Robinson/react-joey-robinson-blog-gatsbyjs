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
      path: `/${slug}`,
      component: require.resolve("./src/templates/blog-template.js"),
      context: { slug },
    })
  })

  projects.forEach(({ node: project }) => {
    const slug = project.slug
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/project-template.js"),
      context: { slug },
    })
  })
}
