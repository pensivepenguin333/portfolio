import "./Nav.css";
import {Link, useMatch, useResolvedPath} from 'react-router-dom'

export default function Nav() {
    return  (
        <nav className="nav">
            <Link to="/portfolio2" className="name">pensivepenguin333</Link>
            <ul>
                <CustomLink to="/portfolio2"> work2 </CustomLink>
                <CustomLink to="/about"> about </CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}