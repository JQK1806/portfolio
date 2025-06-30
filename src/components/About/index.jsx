import React from "react";
import './index.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <h2>About Me</h2>
                <p>This is the About section...</p>
                <div className="about-details">
                    <div className="about-card">
                        <h3>Background</h3>
                        <p>Background info...</p>
                    </div>
                    <div className="about-card">
                        <h3>Skills</h3>
                        <p>Skills...</p>
                    </div>
                    <div className="about-card">
                        <h3>Interests</h3>
                        <p>Interests...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
