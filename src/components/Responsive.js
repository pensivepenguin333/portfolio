import "./Responsive.css";
import annotations from './img/orig-annotated.png'; 
import lofi from './img/lofi.png'; 
import style from './img/style-guide.png'; 
import desktop from './img/desktop-annotated.png'; 
import tablet from './img/tablet-annotated.png'; 
import mobile from './img/mobile-annotated.png'; 
import redesign from './img/redesign.png'; 
import redesign2 from './img/redesign2.png'; 


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
                I stumbled upon Elke's Market Cafe, a local cafe in 
                Allen, TX that provides food, market, and catering 
                services. Looking at their <a href="https://www.elkesmarketcafe.com/">
                website</a>, I felt as though the formatting was not intuitive, 
                and it was overall a very busy website. Thus, I decided to focus 
                on improving the clarity of the home page to improve 
                its <span>learnability</span>, <span>memorability</span>, 
                and <span>efficiency</span> for users.
            </p>
            <h2>
                Problems
            </h2>
            <p className="content">
                Focusing on the <span>usability concepts</span> discussed 
                in class (learnability, memorability, and efficiency) to drive 
                this redesign, I came up with the following key issues in the 
                original website:
                <div class="annotations">
                    <img src={annotations} />
                </div>
                
                <span>Learnability:</span>
                <ul>
                    <li>The user first sees a massive logo, 
                        navigation bar, and a photo of food with the 
                        text “fresh;” without scrolling quite a bit, 
                        the user doesn't immediately know what the site 
                        entails <span>(1)</span>
                    </li>
                    <li>The navigation bar is a bit cluttered with 8 
                        categories, so it's difficult to find which 
                        option you want without reading through them 
                        all; it's not as simple as just a glance <span>(2)</span>
                        <ul>
                            <li>“Wine Club" and "Events/Blog” could be 
                                grouped together
                            </li>
                            <li>The “Visit” tab could be renamed as 
                                “Feedback,” since “Visit” seems to 
                                imply it has to do with the cafe's 
                                location, but it's actually a place to 
                                submit questions and comments
                            </li>
                        </ul>
                    </li>
                    <li>There's a random “Log in” button in the bottom 
                        right corner of the webpage; not only is it 
                        easy to miss, but it also doesn't seem that 
                        relevant, as it's not clear on the website what 
                        purpose logging in serves (plus you can't make 
                        an account anywhere) <span>(3)</span>
                    </li>
                    <li>The intent of the home page is not clear, and 
                        it feels very chaotic with so much information 
                        (a description of the place, menu items, a wine 
                        club, etc) <span>(4)</span>
                    </li>
                </ul>
                        
                <span>Memorability:</span>
                <ul>
                    <li>The pronunciation of the place is a unique 
                        addition, but it's not visually 
                        obvious that it is a pronunciation/definition 
                        (until you read it) <span>(5)</span>
                    </li>
                    <li>The section with exploring the cafe, market, 
                        and catering is also not visually obvious that 
                        these are meant to redirect you to other parts 
                        of the site; they're also visually overwhelming 
                        with how large they are <span>(6)</span>
                    </li>
                </ul>

                <span>Efficiency:</span>
                <ul>
                    <li>The headers of the page are not necessarily the 
                        largest font size on the page (ie, the random 
                        menu items are much larger), making it 
                        difficult to instantly know when you've 
                        encountered a desired section and should stop 
                        scrolling <span>(7)</span>
                    </li>
                    <li>There are a lot of excessively large images, 
                        which requires the user to scroll quite a bit 
                        before encountering a different section <span>(8)</span>
                    </li>
                </ul>
                Using <a href="https://wave.webaim.org/">WebAIM WAVE</a>, 
                I discovered that the web page also had a 
                few <span>accessibility</span> issues:
                <ul>
                    <li>A lot of the text throughout the page has a 
                        “very low contrast between text and background 
                        colors” — I agree that some of the color 
                        choices are not the most ideal, specifically 
                        the orange text being used to highlight the 
                        special menu items
                        <ul>
                            <li>The section headers also have this 
                                issue; especially with the font being 
                                as small as it is, it is not 
                                immediately legible 
                            </li>
                        </ul>
                    </li>
                    <li>The “Home” link is redundant, as it goes to the 
                        same URL as clicking on the logo — I agree with 
                        this, as it is quite common for the logo of a 
                        site to redirect the user to the home page, so 
                        that is built into the user's conceptual model, 
                        making the “Home” tab a bit unnecessary
                    </li>
                    <li>There are multiple images missing alternative text</li>
                    <li>There is an empty link (“link contains no text”) 
                        near their “Wedding and Party” icons; the user 
                        may get redirected to a different page by 
                        clicking on a white area of the page 
                    </li>
                </ul>
            </p>
            <h2>
                Lo-Fi Wireframes
            </h2>
            <p className="content">
                Based on the problems outlined in the previous section,
                I created 3 different low-fidelity wireframes for 
                a <span>desktop</span>, <span>tablet</span>, 
                and <span>mobile</span> screen size. Each number 
                has a corresponding problem from the previous section 
                that my redesign fixes:
                <div class="lofi">
                    <img src={lofi} />
                </div>
                <ol>
                    <li>I drastically minimized the <span>amount of 
                        space the logo and navigation bar took up</span> 
                        and also <span>removed the "fresh" photo</span>, 
                        so the user would be able to see more of the 
                        page's introduction as soon as they are on the page
                    </li>
                    <li>I reduced the <span>number of categories in the
                        navigation bar</span> from 8 to 6, by removing 
                        the "Home" tab (which can be accessed through 
                        the logo) and combining the "Wine Club" and 
                        "Events/Blog" tab; I also <span>renamed</span> the "Visit"
                        tab as "Feedback," since it was more in line
                        with the content of that page; this makes 
                        utilizing the navigation bar much clearer and 
                       simpler
``                  </li>
                    <li>I removed the <span>awkwardly placed "Log in"</span>
                        button, as it was not serving a purpose for the 
                        users in the original design
                    </li>
                    <li>I simplified the <span>content of the page</span> 
                        to include the original design's key points (the 
                        place's description and the 3 main categories 
                        they have to offer: cafe, market, catering); 
                        this will help the user to better compartmentalize 
                        what Elke's Market Cafe entails
                    </li>
                    <li>I added a <span>volume/speaker icon</span> beside 
                        the definition of Elke's to give the user a visual
                        cue that this section will define and introduce
                        the place; the format is also very similar to 
                        the definitions that appear in Google, which 
                        may be familiar to many users
                    </li>
                    <li>I included an <span>image behind the 3 different 
                        categories</span> (cafe, market, catering) to 
                        visually indicate to the user what clicking on 
                        them will take them to, as the photos will be 
                        related to the text on top of them
                    </li>
                    <li>I increased the <span>size of the main headers</span> 
                        to highlight to the user what the key sections 
                        of the page are
                    </li>
                    <li>I removed a lot of the <span>photos on the 
                        original page</span>, as they didn't feel 
                        purposeful, took up a lot of space, and weren't 
                        cohesive with each other; by doing so, the user 
                        will have an easier time scrolling through the page
                    </li>
                </ol>
            </p>
            <h2>
                Visual Style Guide
            </h2>
            <p className="content">
                Before starting my high-fidelity prototypes, I created
                a visual design style guide to showcase the <span>main
                colors</span>, <span>typography</span>, 
                and <span>resuable components</span> of the redesigned page:
                <div class="style-guide">
                    <img src={style} />
                </div>
            </p>
            <h2>
                Hi-Fi Prototypes
            </h2>
            <p className="content">
                I created 3 high-fidelity prototypes based on the 
                low-fidelity wireframes and the visual design style 
                guide from the previous section. 
                The <span>desktop</span> prototype is as follows:
                <div class="desktop">
                    <img src={desktop} />
                </div>
                <ol>
                    <li>The <span>navigation bar elements</span> have 
                        a <span>10px margin</span> on the <span>left/right</span> to 
                        add space between them, but it is <span>0</span> for 
                        the <span>logo</span> and the <span>rightmost 
                        element</span> ("About")
                    </li>
                    <li>For screens at least <span>2000px in width</span>,
                        the <span>max width</span> is <span>1500px</span>,
                        leaving whitespace on both sides of the content
                    </li>
                    <li>All content on the page should <span>align</span> with 
                        the <span>horizontal rule element</span> (hr)
                    </li>
                    <li>Even horizontal space between the photos 
                        with <span>justify content (space-between)</span>
                    </li>
                    <li><span>50px header</span> text, <span>23px body</span> text 
                    to clearly show the difference in hierarchy
                    </li>
                    <li>Address and social media are adjacent to each 
                        other with <span>display (inline-block)</span>
                    </li>
                    <li><span>7px solid border</span> around photos, 
                        with rounded corners (<span>border-radius 
                        15px</span>) — see the style guide for the 
                        appropriate color
                    </li>
                </ol>
                The <span>tablet</span> prototype is as follows:
                    <div class="tablet">
                        <img src={tablet} />
                    </div>
                <ol>
                    <li>Navigation bar elements are only displayed when 
                        the user clicks on the <span>hamburger icon</span>
                    </li>
                    <li>The <span>logo</span> and <span>hamburger</span> icon 
                        have a left and right <span>margin of 7%</span>, 
                        respectively
                    </li>
                    <li>The <span>hr element</span> extends the 
                        entire <span>width of the screen</span>, so there is 
                        no extra whitespace beside the element
                    </li>
                    <li>The <span>content</span> of the page <span>aligns
                        with the logo and hamburger icon</span> 
                    </li>
                    <li>The <span>photos</span> are <span>vertically 
                        positioned</span> so they don't get cut off, as
                        they are each <span>300px</span>; done 
                        with <span>flex direction (column)</span>
                    </li>
                </ol>
                The <span>mobile</span> prototype is as follows:
                    <div class="mobile">
                        <img src={mobile} />
                    </div>
                <ol>
                    <li>Extra <span>padding</span> gets added to 
                        the <span>right</span> (<span>80px</span>) of 
                        the <span>"Let's Connect"</span> section to 
                        offset the padding on the left once it wraps 
                        onto the next line; all elements in the 
                        footer are <span>vertically centered</span>
                    </li>
                </ol>
            </p>
            <h2>
                Redesigned
            </h2>
            <p className="content">
                After creating my wireframes, visual design style guide,
                and prototypes, I used <span>HTML, CSS, and 
                JavaScript</span> to create the final, redesigned website. 
                Feel free to check it 
                out: <a href="https://pensivepenguin333.github.io/elkes-market-cafe/">
                Elke's Market Cafe (redesigned)</a>!
                <div class="desktop">
                    <img src={redesign} />
                </div>
                <div class="desktop">
                    <img src={redesign2} />
                </div>
            </p>
            <h2>
                Conclusion
            </h2>
            <p className="content">
                Redesigning this website truly put into perspective the
                amount of thought that goes into designing 
                and <span>effective</span> and <span>intuitive</span> page. By 
                focusing on the three criteria for usability (<span>learnability, 
                memorability, and efficiency</span>), a website can be 
                better designed for its users.
            </p>
        </div>
    )
}