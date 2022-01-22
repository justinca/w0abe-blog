import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

export default function nav({menuLinks}) {
  return (
    <div>
    <ul className="nav-bar">
    {menuLinks.map(x=><Link key={x.link} to={x.link} className="nav-bar-li-a"><li className="nav-bar-li">{x.name}</li></Link>)}
    </ul>
    <hr/>
    </div>
  )
}
