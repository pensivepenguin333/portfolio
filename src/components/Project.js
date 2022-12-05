import "./Project.css";
import {Link} from 'react-router-dom';

export default function Project(props) {
    const proj = props.proj;
    return  (
        
        <div className="Project">
            <Link to="/proj1">
                <div className='overlay'>
                    {proj.name}
                </div>
            </Link>
            <Link to="/proj1">
                <img src={proj.cover}/>
            </Link>
        </div>
    )
}