import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { SocialIcon } from 'react-social-icons';
import socialIcon from "react-social-icons/dist/social-icon";
import '../styles/styles.css'
import Bio from '../components/bio'
import Sponsors from '../components/sponsor'
import CodeCamp from '../sponsorsLogo/codecamp.png'
import Iste from '../sponsorsLogo/Iste.png'
import Srm from '../sponsorsLogo/Srm.png'
import mountain from '../sponsorsLogo/mountain.jpg'

const HomePage = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1 className="main-heading"
        style={{
          ...scale(1),
          marginBottom: rhythm(0),
          marginTop: 0,
         color:"#000",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
            textAlign:"left",
             color:"white"
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  
  }
  return (
    <div style={{ backgroundColor:"#000" }}>
      <header style={{ backgroundColor:"#000", display:"flex", flexDirection:"row"}}>
        <h1 style={{ width: "100%",textAlign:"center"}}>
        <p style={{ padding: 20, paddingTop:0}}>
          <img src={CodeCamp}  width="200" />
        </p>
        </h1>
      </header>
    <div>
       <img className="cover" src={mountain} alt="To do mountain" />
    </div>
      <main
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(1 / 4)}`,
      }}
      >{children}</main>
        <Sponsors />
    
      <footer style={{ textAlign:"center", paddingTop: 5, paddingBottom:20, marginBottom:0, bottom:0, backgroundColor:"#fff"}}>
       <p style={{ fontSize: 20,marginTop:20}}> © {new Date().getFullYear()} | 👨‍💻 with 🧡 by Developers @{` `}
        <a style={{ fontSize: 20 }} href="https://www.istesrmncr.com">ISTE Student's Chapter SRM NCR</a></p>
      </footer>
    </div>
  )
}

export default HomePage
