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
      avatar: file(absolutePath: { regex: "/Iste.jpg/" }) {
        childImageSharp {
          fixed(width: 500, height: 100) {
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
        alignItems:'center',
        flexDirection: `row`}}
    >
    <h2 style={{ marginRight: 30 }}>About 👋</h2>
    <p style={{ marginLeft: 30 }}><strong>Code Camp</strong> is a Virtual Hackathon present by Our Team <strong>Indian Society for Technical Education
      <em>, SRM</em>
    </strong></p>
    <p style={{ marginLeft: 30 }} >Code Camp is <strong>11 Days</strong> Open Source Virtual Hackathon, will be held on GitHub.The Event is 11 days Long and will help the programmers all over the world to thing upon the real-world problem,
    and giving an Application Solution for the Particular Theme or problem statements.
    </p>
      <p style={{ marginLeft: 30 }} >We choose GitHub as the Platform as GitHub is well known for forming a Great Environment to bring Developers and Engineers together and contribute to the project. So it can also serve the very purpose.</p>
    </div>
  )
}

export default Bio
