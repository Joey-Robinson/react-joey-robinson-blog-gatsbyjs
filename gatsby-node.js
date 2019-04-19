const path = require('path')

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const result = await graphql(`
//     {
//       allProjectsJson {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `);

//   if (result.error) {
//     reporter.panic('There was a problem loading your projects!');
//     return;
//   }

//   const projects = result.data.allProjectsJson.edges;

//   projects.forEach(({ node: project }) => {
//     const slug = project.slug;

//     actions.createPage({
//       path: `/${slug}/`,
//       component: require.resolve('./src/templates/project.js'),
//       context: { slug }
//     });
//   });
// };


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/blogPost.js')

  return graphql(`
    {
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
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}