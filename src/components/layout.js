import * as React from "react"
import { Link } from "gatsby"
import Nav from "./nav"

const Layout = ({ location, title, children, menuLinks }) => {
  
  const rootPath = `${__PATH_PREFIX__}/`
  
  const links = menuLinks.map(x=> x.link);
  
  // const isRootPath = location.pathname === rootPath
  const isRootPath = links.indexOf(location.pathname) >= 0;
  

  let header
  
  if (isRootPath) {
    header = (
      <div>
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      Ham Radio
      </div>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <Nav menuLinks={menuLinks}/>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Justin Calvert,
        {` `}
        <a href="mailto:justin@w0abe.com">Contact Me</a>
      </footer>
    </div>
  )
}
export default Layout
