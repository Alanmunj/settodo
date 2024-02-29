import {Link, useMatch, useResolvedPath} from "react-router-dom"
import "./style.css"

export default function NaviBar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Settodo
            </Link>
            <ul>
                <CustomLink to="/list">My List</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    )
}
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
}