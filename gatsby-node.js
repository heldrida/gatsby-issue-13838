/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      wpcms {
        posts {
          edges {
            node {
              slug
            }
          }
        }
      }
    }
  `)
  data.wpcms.posts.edges.forEach(data => {
    actions.createPage({
      path: `${data.node.slug}`,
      component: path.resolve(`./src/templates/Blog/Post/index.js`),
      context: {
        slug: data.node.slug
      }
    })
  })
}
