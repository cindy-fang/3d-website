import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
    return (
        <div className="about-container"> {/* Apply the container class */}
            <h2>About BooLingo</h2>
            <section>
                <h3>What is BooLingo?</h3>
                <p>
                    BooLingo is an innovative learning platform that redefines the educational experience by combining the thrill of horror with the joy of mastering new skills. Inspired by the iconic Duolingo bird meme, BooLingo takes users on a captivating journey where learning becomes an immersive adventure.
                </p>
            </section>

            <section>
                <h3>Features</h3>
                <ul>
                    <li>Immersive Learning Environment</li>
                    <li>Expansive Subject Coverage Beyond Languages</li>
                    <li>Voice Recognition for Pronunciation and Comprehension</li>
                    <li>Real-Time Feedback with Light-Hearted Encouragement</li>
                    <li>Cross-Platform VR Experience</li>
                </ul>
            </section>

            <section>
                <h3>Click to View Demo Here</h3>
                <iframe
                    src="https://player.vimeo.com/video/914102102"
                    width="640"
                    height="360"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                    title="BooLingo Demo"
                ></iframe>
            </section>
        </div>
    );
};

export default About;
