import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const LayoutPost = ({ title, children }) => {
  const header = (
    <h1
      style={{
        ...scale(0.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
        padding: 10,
        textAlign: "center",
        color:"white"
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h1>
  )

  return (
    <div style={{ backgroundColor:"#fff" }}>
      <header
        style={{
          backgroundColor: "#000",
          boxShadow:"1px 3px 6px A9A9A9"
        }}
      >
        {header}
      </header>
      <main
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          backgroundColor:"#fff"
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default LayoutPost
