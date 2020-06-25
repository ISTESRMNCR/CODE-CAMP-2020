import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const SassyButtons = ({head,link}) => {
  const data = useStaticQuery(graphql`
    query SassyButtonsQuery {
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
    <div>
    <a href={link} style={{ textalign:"center" }}>
    <h2 style={{backgroundColor:"#663399", color:"white" ,padding:10, borderRadius:20, textAlign:"center", marginBottom:0 , paddingRight: 0, margin:"20%", boxShadow: "1px 3px 7px #000"}}>{head}</h2> 
   </a>
    </div>
  )
}

export default SassyButtons
