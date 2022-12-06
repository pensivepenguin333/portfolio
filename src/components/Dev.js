import "./Dev.css";
// import sketches from './img/sketches.jpg'; 
// import lofi from './img/it-lofi.png'; 
// import hifi from './img/it-hifi.mov'; 
// import test1 from './img/test1.mov'; 
// import test2 from './img/test2.mov'; 
// import test3 from './img/test3.mov'; 

export default function Dev() {
    return  (
        <div className="Dev">
            <h1 className="dev">
                <span>Development</span>
            </h1>
            <h2>
                Introduction
            </h2>
            <p className="content">
                For this project, we were asked to design an interactive 
                interface for an emerging startup and gain insight into 
                the full process of mocking up and designing a solution 
                to the startup's concept. 
            </p>
            <h2>
                Overview
            </h2>
            <p className="content">
                We decided to create a mobile prototype 
                for <a href="https://www.ycombinator.com/companies/lovecast">
                Lovecast</a>, an app for celebrating events digitally. 
                Users have the opportunity to interact and form memories with 
                their guests, regardless of where they are in the world; from 
                birthday parties to weddings, the options are truly endless. 
            </p>
        </div>
    )
}