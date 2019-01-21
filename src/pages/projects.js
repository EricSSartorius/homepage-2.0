import React from 'react'
// import { Link } from 'gatsby'
// import Img from 'gatsby-image'
import Layout from '../components/layout'

const ProjectsPage = ({ data, location }) => (
  <Layout location={location}>
    <div className="projects">
      <h1 className="title">Dev Projects</h1>
      <div className="center">
        <h3>Under Construction</h3>
      </div>
      {/* <div className="project-grid">
        {data.allMarkdownRemark.edges.map(project => (
          <div key={project.node.frontmatter.path} className="project-single">
            <Link
              key={project.node.id}
              to={project.node.frontmatter.path} >
              <Img sizes={project.node.frontmatter.thumbnail.childImageSharp.sizes} className="project-image" />
              <div className="overlay">
                <h2 className="" key={project.node.frontmatter.title}>
                  {project.node.frontmatter.title}
                </h2>
              </div>
            </Link >
          </div>
        ))}
      </div> */}
    </div>
  </Layout>
)

export default ProjectsPage

// export const pageQuery = graphql`
//   query ProjectsQuery {
//     allMarkdownRemark(limit: 10) {
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//             title
//             thumbnail {
//               childImageSharp {
//                 sizes(
//                   maxWidth: 850
//                   quality: 90
//                   traceSVG: { color: "#f3f3f3" }
//                 ) {
//                   ...GatsbyImageSharpSizes_withWebp_tracedSVG
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `


