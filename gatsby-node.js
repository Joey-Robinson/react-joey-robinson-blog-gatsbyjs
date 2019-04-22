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
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
  `)

  const projects = result.data.allProjectsJson.edges
  const blogs = result.data.allMarkdownRemark.edges

  blogs.forEach(({ node }) => {
    const title = node.frontmatter.path
    actions.createPage({
      path: `${title}`,
      component: require.resolve('./src/templates/blogs.js'),
    })
  })

  projects.forEach(({ node: project }) => {
    const slug = project.slug
    actions.createPage({
      path: `portfolio/${slug}/`,
      component: require.resolve('./src/templates/project.js'),
      context: { slug }
    })
  })
}