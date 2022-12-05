import "./Projects.css";
import {Link, useMatch, useResolvedPath} from 'react-router-dom'

export default function Projects() {
    return  (
        <div>
            <CustomLink to="/"> work </CustomLink>
            <CustomLink to="/proj1"> proj1 </CustomLink>
        </div>

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