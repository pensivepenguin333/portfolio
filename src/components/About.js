import "./About.css";
import cat from './img/cat.jpeg'; 

export default function About() {
    return  (
        <div className="About">
            <div class="child">
                <img src={cat} />
            </div>
            <div className="child">
                <h2>
                    Hi, I'm pensivepenguin333! 💭
                </h2>
                <p className="info">
                    🐧 I'm a student at Brown University studying Applied 
                    Mathematics-Computer Science. Specifically, my interests 
                    are in software engineering and design.
                </p>
                <p className="info">
                    ⭐ I was an Undergraduate Teaching Assistant at Brown 
                    University for 3 semesters for CSCI111 (Computing Foundations: 
                    Data) and CSCI220 (Introduction to Discrete Structures and 
                    Probability).
                </p>
                <p className="info">
                    ☕ Outside of work, you can find me exploring new cafes in 
                    Providence, discovering new music, and taking photos of 
                    any cute pet I encounter (like the cat you see to the left)!
                </p>

            </div>

        </div>
    )
}