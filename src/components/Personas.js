import "./Personas.css";
import personas from './img/two-personas.png'; 
import sketch from './img/sketch.png'; 
import storyboard from './img/storyboard.png'; 

export default function Personas() {
    return  (
        <div className="Personas">
            <h1 className="personas">
                <span>Personas and Storyboarding</span>
            </h1>
            <h2>
                Introduction
            </h2>
            <p className="content">
                For this project, we were asked to choose <span>observe 
                users</span> interacting with our chosen interface, <span>interview 
                the users</span>, <span>create personas</span> based on our 
                observations, and <span>illustrate a storyboard</span> depicting 
                one of these personas.
            </p>
            <h2>
                Overview
            </h2>
            <p className="content">
                I chose the <span>projector dashboards</span>, which have pervaded nearly 
                every large lecture hall at Brown: Smitty-B, Friedman, MacMillan, 
                and of course, the beloved CIT. Acting as the <span> connector 
                between the user's content and the projector</span>, these dashboards consist 
                of multiple screens. The user is first presented with the "Basic 
                Mode" screen, providing the option to choose which source their 
                content will come from. On the same screen, the right hand panel 
                provides additional display and volume options, as shown below:
            </p>
            <div className="sketch">
                <img src={sketch} />
            </div>
            <h2>
                Observations
            </h2>
            <p className="content">
                What do users' experience with the projector dashboard look
                like? To reveal this, I first <span>observed three different 
                individuals</span> trying to connect their desired content to see 
                how intuitive (or unintuitive) the interface was for them.
                I noticed that:
                <ul>
                    <li>Some users seemed more <span>confident</span> in the 
                        process, knowing exactly what step should come next, 
                        while others were <span>unsure</span> and got stuck 
                        when something didn't go as expected
                    </li>
                    <li>Adjustments to the volume weren't a problem for 
                        anyone; it was mostly having the <span>content 
                        projected</span> on the screen that took the <span>most 
                        time</span>
                    </li>
                    <li>The different <span>plugs and cables</span> were a bit 
                        of a <span>hassle</span> to find
                    </li>
                    <li>If the display didn't change after pressing the 
                        intended button, <span>other buttons would be 
                        pressed</span> to see if anything would change
                    </li>
                    <li>There were <span>pauses</span> at times to determine which 
                        button should be pressed next
                    </li>
                </ul>
                        
                I then asked the same users the following <span>questions</span> to 
                gain a bit more insight:
                <ul>
                    <li>Have you tried to project something <span>this 
                        month</span>?
                    </li>
                    <li>Who is the <span>audience</span> you're trying to 
                        project your content for?
                    </li>
                    <li>What <span>method</span> do you use to connect your 
                        device (ie, AirPlay, AirMedia, plugging in, etc)?
                    </li>
                    <li>What <span>challenges</span> do you encounter when 
                        trying to connect your device?
                    </li>
                    <li>Does the content you display require you to adjust 
                        the <span>audio settings</span>?
                    </li>
                    <li>Was there anything about the interface that 
                        was <span>surprising</span> to you?
                    </li>
                    <li>What part of the interface is <span>easy to 
                        navigate</span>?
                    </li>
                </ul>
                After asking the three users these questions, the <span>main 
                points</span> I gathered were that:
                <ul>
                    <li>Projecting content is mostly intended for <span>students 
                        the users are TAing for</span> and <span>themselves</span> (for 
                        entertainment purposes) 
                    </li>
                    <li>The dashboard's behavior can sometimes 
                        be <span>unpredictable</span> (ie, randomly disconnects, buttons 
                        don't seem to have any effect)
                    </li>
                    <li><span>Connecting</span> one's device is the greatest source 
                        of <span>frustration</span> (ie, AirPlay code not working, 
                        Crestron Media app must be downloaded, finding the
                        right cable to connect)
                    </li>
                    <li>Having <span>clearer instructions</span> on how to 
                        navigate the interface would be helpful, especially for 
                        first-time users
                    </li>
                    <li>The interface is <span>relatively simple</span>, and you can 
                        easily experiment to determine how it functions
                    </li>
                </ul>
            </p>
            <h2>
                Empathy Maps
            </h2>
            <p className="content">
                Based on the observations outlined in the previous section,
                I created <span>two possible personas</span>. The first 
                represents users who are <span>first-time TAs at Brown</span>, 
                and the second represents users who use the projector 
                dashboards to <span>enhance their entertainment experience</span>:
                <div class="two-personas">
                    <img src={personas} />
                </div>
            </p>
            <h2>
                Storyboard
            </h2>
            <p className="content">
                Using the <span>"Entertained Elaine"</span> persona, I created 
                the following storyboard to depict Elaine's journey 
                in <span>connecting her Switch to the projector</span>:
                <div className="storyboard">
                    <img src={storyboard} />
                </div>
            </p>
            <h2>
                Conclusion
            </h2>
            <p className="content">
                This project truly highlighted the importance of <span>asking 
                objective questions</span>, <span>making observations without
                assuming</span> anything, and <span>creating both a persona 
                and storyboard</span> that are clear enough to help better 
                understand an interaction with a given interface. By doing so, 
                we can better improve an interface for its users.
            </p>
        </div>
    )
}