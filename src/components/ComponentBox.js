import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import index from '../pages/index'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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
    <h1 style={{ marginRight: 30 }}>{headline}</h1>
    <p style={{backgroundColor:"#ffffff", color:"grey" ,padding:10, borderRadius:20, textAlign:"justify",  }}>
      {info}  
     </p>
      
    <p style={{backgroundColor:"#ffffff", color:"grey" ,padding:10, borderRadius:20,}}>
    {/* <a href={buttonLink}>
      <Button  
        headings={subInfo}
       
      />
      </a> */}
            <Button variant="contained" color="secondary" href={buttonLink} >
        {subInfo}
      </Button>
     </p>

    </div>
  )
}

export default ComponentBox
