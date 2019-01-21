// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   const projectTemplate = path.resolve(`./src/templates/project.js`)
//   return graphql(
//     `
//       {
//         allMarkdownRemark(limit: 1000) {
//           edges {
//             node {
//               html
//               id
//               frontmatter {
//                 path
//                 title
//               }
//             }
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     projects.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: projectTemplate,
//       })
//     })
//   })
// }