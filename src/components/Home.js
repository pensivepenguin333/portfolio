import "./Home.css";
import Intro from './Intro'
import Projects from './Projects'

export default function Home() {
    return  (
        <div className="Home">
            <Intro />
            <Projects />
        </div>
    )
}