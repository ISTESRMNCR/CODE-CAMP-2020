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
      <header style={{ backgroundColor:"#000", textAlign:"center",boxShadow:"1px 3px 7px A9A9A9", paddingTop: 16, marginBottom:1, paddingBottom:5}}>{header}</header>
      <main
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(25),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
      >{children}</main>
      <footer style={{ textAlign:"center", paddingTop: 5, paddingBottom:20, marginBottom:0, bottom:0, backgroundColor:"#fff"}}>
       <p className="expand" style={{ fontSize: 20,marginTop:20 }}> © {new Date().getFullYear()} | 👨‍💻 with 🧡 by <a style={{ fontSize: 20, boxShadow:"none" }} href="https://github.com/Uyadav207">Utkarsh Yadav </a> {` `}@
        <a  style={{ fontSize: 20, boxShadow:"none" }} href="https://www.istesrmncr.com">ISTE Students' Chapter SRM NCR</a> Technical Team</p>
      </footer>
    </div>
  )
}

export default Layout
