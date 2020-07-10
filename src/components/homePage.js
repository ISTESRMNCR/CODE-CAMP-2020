import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import '../styles/styles.css'

import Sponsors from '../components/sponsor'
import CodeCamp from '../sponsorsLogo/codecamp.png'

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
    <div className="back" style={{ backgroundColor:"#000" }}>
    <div>
       <img className="cover" src={CodeCamp} alt="To do mountain" />
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

        <footer style={{ textAlign:"center", paddingTop: 5, paddingBottom:20, marginBottom:0, bottom:0, backgroundColor:"#eee"}}>
       <p className="expand" style={{ fontSize: 20,marginTop:20, opacity: 0.7 }}> © {new Date().getFullYear()} || An OpenSource Website Created by <a target="_blank" style={{ fontSize: 20, boxShadow:"none", opacity: 0.7 }} href="https://github.com/Uyadav207">Utkarsh </a> {` `} _Developer/ 
        <a target="_blank" style={{ fontSize: 20, boxShadow:"none", opacity:0.7 }} href="https://www.istesrmncr.com">@ISTE Students' Chapter SRM NCR</a></p>
      </footer>
    </div>
  )
}

export default HomePage
