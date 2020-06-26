import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          textAlign:"center",
         color:"white"
         
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
            textAlign:"center",
             color:"white"
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
            textAlign:"center",
             color:"white"
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div style={{ backgroundColor:"#eee" }}>
      <header style={{ backgroundColor:"#2E3440", textAlign:"center",boxShadow: "1px 3px 7px grey", paddingTop: 16, marginBottom:1, paddingBottom:5}}>{header}</header>
      <main
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
      >{children}</main>
      <footer style={{ textAlign:"center", paddingTop: 20, paddingBottom:20, marginBottom:0, bottom:0 }}>
       <p style={{ fontSize: 20, padding: 5,}}> © {new Date().getFullYear()} | 👨‍💻 with 🧡 by Developers @{` `}
        <a style={{ fontSize: 20, color:"#fff" }} href="https://www.istesrmncr.com">ISTE Student's Chapter SRM NCR</a></p>
      </footer>
    </div>
  )
}

export default Layout
