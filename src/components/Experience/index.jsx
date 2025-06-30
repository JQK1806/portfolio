import React from "react";
import './index.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="experience-content">
                <h2>Experience</h2>
                <p>This is the Experience section...</p>
                <div className="experience-timeline">
                    <div className="experience-item">
                        <div className="experience-date">2023 - 2024</div>
                        <div className="experience-details">
                            <h3>Position...</h3>
                            <h4>Company...</h4>
                            <p>Role description...</p>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-date">2022 - 2022</div>
                        <div className="experience-details">
                            <h3>Position...</h3>
                            <h4>Company...</h4>
                            <p>Role description...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
