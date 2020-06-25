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
    <p style={{backgroundColor:"#000", color:"grey" ,padding:20, borderRadius:20, textAlign:"justify"}}>
      {info}  
      <Button variant="outlined" color="secondary" href={buttonLink} >
        {subInfo}
      </Button>
     </p>
  

    </div>
  )
}

export default ComponentBox
