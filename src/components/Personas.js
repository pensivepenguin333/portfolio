import "./Personas.css";
import personas from './img/two-personas.png'; 

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
            <h2>
                Observations
            </h2>
            <p className="content">
                What do users' experience with the projector dashboard look
                like? To reveal this, I first observed three different 
                individuals trying to connect their desired content to see 
                how intuitive (or unintuitive) the interface was for them.
                I noticed that:
                <ul>
                    <li>Some users seemed more confident in the process, 
                        knowing exactly what step should come next, while 
                        others were unsure and got stuck when something 
                        didn't go as expected
                    </li>
                    <li>Adjustments to the volume weren't a problem for 
                        anyone; it was mostly having the content projected
                        on the screen that took the most time
                    </li>
                    <li>The different plugs and cables were a bit of a 
                        hassle to find
                    </li>
                    <li>If the display didn't change after pressing the 
                        intended button, other buttons would be pressed 
                        to see if anything would change
                    </li>
                    <li>There were pauses at times to determine which 
                        button should be pressed next
                    </li>
                </ul>
                        
                I then asked the same users the following questions to 
                gain a bit more insight:
                <ul>
                    <li>Have you tried to project something this 
                        month?
                    </li>
                    <li>Who is the audience you're trying to project your 
                        content for?
                    </li>
                    <li>What method do you use to connect your device (ie, 
                         AirPlay, AirMedia, plugging in, etc)?
                    </li>
                    <li>What challenges do you encounter when trying to 
                        connect your device?
                    </li>
                    <li>Does the content you display require you to adjust 
                        the audio settings?
                    </li>
                    <li>Was there anything about the interface that was 
                        surprising to you?
                    </li>
                    <li>What part of the interface is easy to 
                        navigate?
                    </li>
                </ul>
                After asking the three users these questions, the main points 
                I gathered were that:
                <ul>
                    <li>Projecting content is mostly intended for students 
                        the users are TAing for and themselves (for entertainment
                        purposes) 
                    </li>
                    <li>The dashboard's behavior can sometimes be 
                        unpredictable (ie, randomly disconnects, buttons 
                        don't seem to have any effect)
                    </li>
                    <li>Connecting one's device is the greatest source 
                        of frustration (ie, AirPlay code not working, 
                        Crestron Media app must be downloaded, finding the
                        right cable to connect)
                    </li>
                    <li>Having clearer instructions on how to navigate 
                        the interface would be helpful, especially for 
                        first-time users
                    </li>
                    <li>The interface is relatively simple, and you can 
                        easily experiment to determine how it functions
                    </li>
                </ul>
            </p>
            <h2>
                Empathy Maps
            </h2>
            <p className="content">
                Based on the observations outlined in the previous section,
                I created two possible personas. The first represents users 
                who are first-time TAs at Brown, and the second represents
                users who use the projector dashboards to enhance their 
                entertainment experience:
                <div class="two-personas">
                    <img src={personas} />
                </div>
            </p>
            <h2>
                Storyboard
            </h2>
            <p className="content">
                Using the "Entertained Elaine" persona, I created the following 
                storyboard to depict Elaine's journey in connecting her Switch 
                to the projector:
            </p>
        </div>
    )
}