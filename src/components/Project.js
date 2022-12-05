import "./Project.css";
import {Link} from 'react-router-dom';

export default function Project(props) {
    const proj = props.proj;
    const pathway = "/" + proj.path;
    // console.log(pathway);
    return  (
        <div className="Project">
            <Link to={pathway}>
                <div className='overlay'>
                    {proj.name}
                </div>
            </Link>
            <Link to={pathway}>
                <img src={proj.cover}/>
            </Link>
        </div>
    )
}