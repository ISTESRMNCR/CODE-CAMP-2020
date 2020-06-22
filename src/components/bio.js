/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/Iste.png/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
       marginTop: 0
      }}
    >
   <h3>Code Camp is a Virtual Hackathon</h3>
    </div>
  )
}

export default Bio



//
// <Image
//   fixed={data.avatar.childImageSharp.fixed}
//   alt={author.name}
//   style={{
//     marginRight: rhythm(1 / 2),
//     marginBottom: 0,
//     minWidth: 50,
//     borderRadius: `100%`,
//   }}
//   imgStyle={{
//     borderRadius: `50%`,
//   }}
// />
// <p>
//   Presented By <strong>{author.name}</strong> {author.summary}
//    {` `}
//   <a href={`https://twitter.com/${social.twitter}`}>
//         hello
//   </a>
// </p>
