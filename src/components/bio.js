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
        flexDirection: `row`,
       }}
    >
    {/* <h2 style={{ marginRight: 30 }}>About 👋</h2> */}
    <h1 style={{backgroundColor:"#ffcb74", color:"white" ,padding:10, borderRadius:20, textAlign:"center", marginBottom:0 , paddingRight: 0,  boxShadow: "1px 3px 7px grey" }}>Code 👨‍💻</h1> 
    <h1 style={{backgroundColor:"#ffcb74", color:"white" ,padding:10, borderRadius:20, textAlign:"center", marginBottom:0 , paddingRight: 0, boxShadow: "1px 3px 7px grey"  }}>Debug 🐞</h1> 
    <h1 style={{backgroundColor:"#ffcb74", color:"white" ,padding:10, borderRadius:20, textAlign:"center", marginBottom:0 , paddingRight: 0,  boxShadow: "1px 3px 7px grey" }}>Learn 📚</h1> 
    <h1 style={{backgroundColor:"#ffcb74", color:"white" ,padding:10, borderRadius:20, textAlign:"center", marginBottom:0 , paddingRight: 0, boxShadow: "1px 3px 7px grey"  }}>Contribute 🤝</h1> 
    <h1 style={{backgroundColor:"#ffcb74", color:"white" ,padding:10, borderRadius:20, textAlign:"center", marginBottom:0 , paddingRight: 0,  boxShadow: "1px 3px 7px grey"}}>Win 🏆</h1> 
    </div>
  )
}

export default Bio
