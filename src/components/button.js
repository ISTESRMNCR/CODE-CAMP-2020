/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Button = (props) => {
  const data = useStaticQuery(graphql`
    query ButtonQuery {
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
         marginLeft:"60%",
       alignItems:'center',
        flexDirection: `row`,
       }}
    >
   
    <p style={{backgroundColor:"#ea907a", color:"white" , borderRadius:20, textAlign:"center" }}>{props.headings}</p> 

    </div>
  )
}

export default Button
