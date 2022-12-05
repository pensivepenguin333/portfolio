import "./Responsive.css";
// import personas from './img/two-personas.png'; 
// import sketch from './img/sketch.png'; 
// import storyboard from './img/storyboard.png'; 

export default function Responsive() {
    return  (
        <div className="Responsive">
            <h1 className="responsive">
                <span>Responsive Redesign</span>
            </h1>
            <h2>
                Introduction
            </h2>
            <p className="content">
                For this project, we were asked to redesign a website by 
                identifying flaws in the interface, creating low-fidelity and 
                high-fidelity prototypes for various screen sizes, and building
                a responsive website according to these prototypes.
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
        </div>
    )
}