import "./Personas.css";

export default function Personas() {
    return  (
        <div className="Personas">
            <h1>
                <span>Personas and Storyboarding</span>
            </h1>
            <h2>
                Introduction
            </h2>
            <p className="content">
                For this project, we were asked to choose observe users 
                interacting with our chosen interface, interview the users, 
                create personas based on our observations, and illustrate a 
                storyboard depicting one of these personas.
            </p>
            <h2>
                Overview
            </h2>
            <p className="content">
                I chose the projector dashboards, which have pervaded nearly 
                every large lecture hall at Brown: Smitty-B, Friedman, MacMillan, 
                and of course, the beloved CIT. Acting as the connector between 
                the user's content and the projector, these dashboards consist 
                of multiple screens. The user is first presented with the "Basic 
                Mode" screen, providing the option to choose which source their 
                content will come from. On the same screen, the right hand panel 
                provides additional display and volume options, as shown below:
            </p>
            <div className="sketch">
                <img src="images/sketch.png" />
            </div>
        </div>
    )
}