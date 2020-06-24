import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Head = () => {
  const data = useStaticQuery(graphql`
    query HeadQuery {
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
    <div class="topnav">
    <a href="#"><img  class="icon-spin" src="https://img.icons8.com/nolan/96/coronavirus.png" width="50" /></a>
    <a className="space" href="#">COVID-19</a>
    <div className="spacer">          
    <a className="space" href="https://www.who.int/">WHO</a>
    <a className="space" href="https://www.mohfw.gov.in/">Government Helplines</a>
    </div>
    </div>
  )
}

export default Head
