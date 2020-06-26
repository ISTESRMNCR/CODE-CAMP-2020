import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { SocialIcon } from 'react-social-icons';
import socialIcon from "react-social-icons/dist/social-icon";
import '../styles/styles.css'
import Bio from '../components/bio'
import Sponsors from '../components/sponsor'

const HomePage = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1 className="main-heading"
        style={{
          ...scale(1),
          marginBottom: rhythm(0.5),
          marginTop: 0,
          textAlign:"center",
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
    <div style={{ backgroundColor:"#2E3440" }}>
      <header style={{ backgroundColor:"#434C5E", textAlign:"right"}}>{header}</header>
      
      <main
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        padding: `${rhythm(1.5)} ${rhythm(1 / 4)}`,
      }}
      >{children}</main>
        <Sponsors />
    
      <footer style={{ textAlign:"center", paddingTop: 5, paddingBottom:20, marginBottom:0, bottom:0, backgroundColor:"#434C5E"}}>
       <p style={{ fontSize: 20,marginTop:20}}> © {new Date().getFullYear()} | 👨‍💻 with 🧡 by Developers @{` `}
        <a style={{ fontSize: 20 }} href="https://www.istesrmncr.com">ISTE Student's Chapter SRM NCR</a></p>
      </footer>
    </div>
  )
}

export default HomePage
