import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" keywords={[
            `challenges`,
            `hackathons`,
            `full-stack`,
            `javascript`,
            `covid-19`,
          ]}/>
          <main style={{ marginBottom:30, }}>
       <Bio />
          </main>
    </Layout>
  )
}

// const headingText = StyleSheets.Create({
//
// })


export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }

        }
      }
    }
  }
`
// {posts.map(({ node }) => {
//   const title = node.frontmatter.title || node.fields.slug
//   return (
//     <article key={node.fields.slug}>
//       <header>
//         <h3
//           style={{
//             marginBottom: rhythm(1 / 4),
//           }}
//         >
//           <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//             {title}
//           </Link>
//         </h3>
//         <small>{node.frontmatter.date}</small>
//       </header>
//       <section>
//         <p
//           dangerouslySetInnerHTML={{
//             __html: node.frontmatter.description || node.excerpt,
//           }}
//         />
//       </section>
//     </article>
//   )
// })}
//   frontmatter {
  //   date(formatString: "MMMM DD, YYYY")
  //   title
  //   description
  // }
