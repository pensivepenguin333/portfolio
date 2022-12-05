// import "./Intro.css";
import {Link, useMatch, useResolvedPath} from 'react-router-dom';

export default function Project(props) {
    const proj = props.proj;
    return  (
        
        <div className="Project">
            <Link to="/proj1">
                <img src={proj.cover}/>
            </Link>
            {/* <img src={proj.cover}/> */}
            {/* <div className="info">
                <div className="name">
                    {proj.name}
                </div>
                <div className="artist">
                    {proj.description}
                </div>
            </div> */}
            {/* <div className="length">
                {Math.floor(song.length/60) + ":" + (song.length % 60)} 
            </div>
            <div className="favorite">
                {icon}
            </div> */}
        </div>
    )
}