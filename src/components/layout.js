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
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 1,
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
    <div>
      <header style={{ backgroundColor:"#9818d6", textAlign:"center", padding:20, paddingBottom:1, margin:0,  boxShadow: "1px 3px 7px grey" }}>{header}</header>
      <main
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
      >{children}</main>
      <footer style={{ textAlign:"center", paddingTop: 20, paddingBottom:20, marginBottom:0, bottom:0 }}>
        © {new Date().getFullYear()}, 👨‍💻 with 💝 by Developers @
        {` `}
        <a href="https://www.istesrmncr.com">ISTE Student's Chapter SRM NCR</a>
      </footer>
    </div>
  )
}

export default Layout
