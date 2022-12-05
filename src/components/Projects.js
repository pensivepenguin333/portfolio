import "./Projects.css";
import projData from "../assets/project-data.json";
import Project from './Project'

export default function Projects() {
    return  (
        <div className='list'>
            <div className="projects">
                {projData.map((proj, index) => ( 

                <Project proj={proj} />
                ))}
            </div>
        </div>
    )
}