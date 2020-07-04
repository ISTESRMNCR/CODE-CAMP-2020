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
    <div style={{ backgroundColor:"#fff" }}>
      <header style={{ backgroundColor:"#000", textAlign:"center",boxShadow:"1px 3px 7px A9A9A9", paddingTop: 16, marginBottom:1, paddingBottom:5}}>{header}</header>
      <main
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(25),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
      >{children}</main>
    </div>
  )
}

export default Layout
