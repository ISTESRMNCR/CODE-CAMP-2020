import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import index from '../pages/index'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import styles from '../styles/styles.css'

// import Button from "../components/button"

const ComponentBox = ({headline, info, subInfo, buttonLink}) => {
  const data = useStaticQuery(graphql`
    query ComponentBoxQuery {
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
    <h1 className="headings" style={{ marginRight: 30, color:"#fff" }}>{headline}</h1>
    <p style={{backgroundColor:"#eee", color:"#000" ,padding:20, borderRadius:20, textAlign:"justify",fontWeight:10 ,fontSize:24}}>
      {info}  
      <a className="image-container" href={buttonLink} style={{ paddingLeft: 10 }}>
        {subInfo}
      </a>
     </p>
  

    </div>
  )
}

export default ComponentBox
