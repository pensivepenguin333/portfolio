import "./Iterative.css";
import sketches from './img/sketches.jpg'; 
import lofi from './img/it-lofi.png'; 
import hifi from './img/it-hifi.mov'; 
import test1 from './img/test1.mov'; 
import test2 from './img/test2.mov'; 
import test3 from './img/test3.mov'; 

export default function Iterative() {
    return  (
        <div className="Iterative">
            <h1 className="iterative">
                <span>Iterative Design</span>
            </h1>
            <h2>
                Introduction
            </h2>
            <p className="content">
                For this project, we were asked to design an interactive 
                interface for an <span>emerging startup</span> and gain insight 
                into the full process of mocking up and <span>designing a 
                solution</span> to the startup's concept. 
            </p>
            <h2>
                Overview
            </h2>
            <p className="content">
                We decided to create a mobile prototype 
                for <a href="https://www.ycombinator.com/companies/lovecast">
                Lovecast</a>, an app for <span>celebrating events digitally</span>. 
                Users have the opportunity to <span>interact</span> and <span>form 
                memories</span> with their guests, regardless of where they are 
                in the world; from birthday parties to weddings, the options 
                are truly endless. 
            </p>
            <h2>
                Sketches
            </h2>
            <p className="content">
                Together, we brainstormed a few different design options
                for the Lovecast app. We focused on three key pages of 
                this app: the <span>home</span> page, <span>livestream</span> page, 
                and <span>invitations</span> page. We came up with the 
                following <span>four designs</span>:
                <div class="sketches">
                    <img src={sketches} />
                </div>
            </p>
            <h2>
                Lo-Fi Wireframes
            </h2>
            <p className="content">
                To acheive Lovecast's goal of <span>hosting various events</span>, 
                we decided that having <span>event templates</span> on the home 
                page would make creating events a seamless process for 
                the user. Furthermore, since "guests can <span>join</span> [these events] 
                from <span>anywhere in the world</span>," we made use of a clearly laid
                out <span>invitations page</span> and also featured <span>upcoming events</span> on 
                the home page so they would be easily accessible for 
                guests. To make the event <span>interactive</span> for all participants, 
                we included a <span>livestream</span> with a 
                <span>chat box</span> and <span>emoticon reactions</span>. 
                <div class="lofi">
                    <img src={lofi} />
                </div>
            </p>
            <h2>
                Hi-Fi Critiques
            </h2>
            <p className="content">
                Before finalizing our hi-fi prototype, we received the 
                following <span>critiques from our peers</span> to consider:
                <ul>
                    <li>Increasing the <span>small text</span>, which could've 
                        caused readibility issues for some users
                    </li>
                    <li>Increasing the <span>color contrast</span> between the 
                        originally light pink button on top of the 
                        purple background 
                    </li>
                    <li>Having the <span>chat box</span> in the livestream 
                        be <span>collapsable</span>
                    </li>
                    <li>Making the <span>"Create Your Own Event"</span> template <span>stand 
                        out</span> more 
                    </li>
                    <li>Making the <span>Pre-Stream Checklist icons</span> more 
                        apparent that they should be <span>clicked on </span>  
                    </li>
                    <li>Putting the <span>"Upload your own image" option 
                        before the built-in photos</span>, since it makes more 
                        sense for users to add their own photos for 
                        personal events  
                    </li>
                    <li>Including both a <span>"Join" and "Details" 
                        button </span> for events that are about to start, as 
                        opposed to just "Join"
                    </li>
                    <li>Adding <span>clarity</span> to the fact that more guests 
                        can be invited to an event 
                    </li>
                </ul>
            </p>
            <h2>
                Hi-Fi Prototype
            </h2>
            <p className="content">
                Taking our peers' critiques into consideration, 
                we <span>updated our hi-fi prototype</span>. A video demo of 
                our prototype is as follows:
                <div class="hifi">
                    <video controls>
                        <source src={hifi} />
                    </video>
                </div>
            </p>
            <h2>
                User Testing
            </h2>
            <p className="content">
                <p class="sub-p">
                    We then went through a second round of feedback by 
                    submitting our updated prototype to UserTesting, 
                    where <span>three testers</span> would <span>complete a 
                    task</span> and <span>provide feedback</span> on how the 
                    process went for them.
                </p>
                <p class="sub-p">
                    The first task was to <span>start the Tea Party</span> event. None 
                    of the three testers had trouble finding the "Start" 
                    button and clicking the "Go Live" button. They all 
                    rated the task as 5 (very easy). This was in line with 
                    our expectations since we intentionally made the "Start" 
                    button for the upcoming events green and right below the 
                    event name so that it was easy for users to recognize 
                    and find.
                </p>
                <p class="sub-p">
                    The next task was to <span>check that the camera, audio, 
                    and connection settings work</span>. Users were able to successfully 
                    open the popup for each setting and also all rated the 
                    task as 5 (very easy). This matched our expectations 
                    since we had icons as buttons that represented each 
                    setting option, along with text labeling the setting 
                    so users would have a smooth experience understanding 
                    and adjusting the appropriate settings.
                </p>
                <p class="sub-p">
                    The last task was to <span>end the stream</span>. All users were able 
                    to quickly find the "Exit Stream" button and leave the 
                    page. All testers rated the task as 5 (very easy). This 
                    aligned with our expectations because we made the 
                    "Exit Stream" button red and at the top left of the screen, 
                    where people generally expect quit buttons, so they can 
                    easily exit the stream. 
                </p>
                <p className="sub-p">
                    Based on just our UserTesting results and 
                    feedback, we wouldn't change much about our interface, 
                    as all users <span>gave positive feedback</span> and didn't have any 
                    struggles. There were <span>no unexpected behaviors</span>. The 
                    unnecessary clicks that users made (if any) were only 
                    due to the fact that they were given a Figma mockup, 
                    which users on this site aren't used to experiencing. 
                    This resulted in users trying to click on buttons that 
                    we never added functionality to, so the next step 
                    would likely be adding more screens and 
                    interactive windows to the mockup.
                </p>
            </p>
            <div class="tests">
                <video controls>
                    <source src={test1} />
                </video>
            </div>
            <div class="tests">
                <video controls>
                    <source src={test2} />
                </video>
            </div>
            <div class="tests">
                <video controls>
                    <source src={test3} />
                </video>
            </div>
            <h2>
                Conclusion
            </h2>
            <p className="content">
                Designing the Lovecast app gave us the opportunity to 
                not only <span>explore various design choices</span>, but 
                also <span>improve</span> upon our first iteration of our 
                prototype <span>based on the feedback we received</span>. There 
                are many nuances that come with creating an intuitive interface 
                for users, making it imperative to thoroughly test a design 
                and continue improving upon it. 
            </p>
        </div>
    )
}