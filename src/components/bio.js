/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styles from '../styles/styles.css'
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
        marginRight:20,
        marginLeft:"20"
       }}
    >
    {/* <h2 style={{ marginRight: 30 }}>About 👋</h2> */}
    <h1 className="headings" style={{backgroundColor:"#3B4252", color:"white" ,padding:10, borderRadius: 10, textAlign:"center", marginTop:0 }}>Code 👨‍💻</h1> 
    <h1 className="headings" style={{backgroundColor:"#3B4252", color:"white" ,padding:10, borderRadius: 10, textAlign:"center", marginTop:0 }}>Learn 📚</h1> 
    <h1 className="headings" style={{backgroundColor:"#3B4252", color:"white" ,padding:10, borderRadius: 10, textAlign:"center",marginTop:0 }}>Contribute 🤝</h1> 
    <h1 className="headings" style={{backgroundColor:"#3B4252", color:"white" ,padding:10, borderRadius: 10, textAlign:"center",marginTop:0  }}>Win 🏆</h1> 
    </div>
  )
}

export default Bio
