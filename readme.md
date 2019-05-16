# Portfolio - Version 4 (V4)

### Technologies used:

- GatsbyJS / React
- GraphQL
- SCSS
- CSS Grid
- Contentful CMS
- React-Typed

### Reasons for technology usage:

- GatsbyJS
- I wanted something fast, something that used React, and something that was flexible. I could have used [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) but I ultimately went with Gatsby for the simple reason that it's just so fast.

- GraphQL
- GraphQL was used here for a few reasons. First, it's included with Gatsby projects. Not making use of it would seem like an unwise decision on my part. Second, I didn't want to create pages for every piece of information, so (as stated below) I use the createPages function and GraphQL to pull out information. Finally, I just wanted to use it because it's cool.

- SCSS
- SCSS was used because I wanted to use a CSS preprocessor and I'm most familiar with it. Modularity is amazing. :thumbsup:

- CSS Grid
- Because CSS Grid is the future. Anytime I'm able to use it, I will, just because it's so flexible (heh) and diverse.

- Contenful CMS
- About halfway through the recreation of this, I decided I wanted to use a CMS, since I never had before. Contentful was my first choice, because I picked one at random.

- react-typed
- I'm terrible at CSS Animations and wanted something simple. This is that.

### Technology usage:

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

Using the above, I'm able to create pages on the fly from the data that is provided. I'm extracting the data from both the data folder and the Contentful CMS (which is provided via .env variables) to render the information.

The [createPages function](https://www.gatsbyjs.org/docs/node-apis/) was essential in the creation of the data and pages. I had previously created pages for each project. I can now simply use a json file to extract information from.

With the addition of GraphQL, I was able to make internal queries to fetch the requested data (as seen above) and render it.

- GraphQL
  As stated above, GraphQL is installed with each new Gatsby project. Since I've been wanting to focus on React as well as GraphQL, this was the perfect opportunity to use both. The flexibility of GraphQL in this case was invaluable.

- SCSS
  Like previously mentioned, having modularity in a project, not just in the JS, but the (S)CSS as well, is too powerful. Nested selectors, (good) global variables, and a plethora of other features makes this the obvious choice.

- CSS Grid
  I can't expand on this too much. CSS Grid is the future. It's amazing, everyone should use it. It's super great.

- Contentful CMS
  I mentioned this above: I randomly picked a CMS. It's nice I can name the fields of a blog post so I can manually include an excerpt.

- react-typed
  I'm awful at CSS Animations, this proved to be valuable in that it does the job I wanted it to.
