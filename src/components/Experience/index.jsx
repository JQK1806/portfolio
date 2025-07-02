import React from "react";
import './index.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="experience-content">
                <h2>Experience</h2>
                <p></p>
                <div className="experience-timeline">
                    <div className="experience-item">
                        <div className="experience-date">June 2024 - August 2024</div>
                        <div className="experience-details">
                            <h3>Software Engineer Intern</h3>
                            <h4>Reality AI Lab</h4>
                            <p>
                                Reduced educator preparation time by 60% through developing a Python microservice on Google Cloud Platform (GCP) using LangChain and FastAPI to automate multiple-choice quiz creation. 
                                Created custom file loaders and parsers for over 5 file types using pandas, improving flexibility for diverse input formats. 
                                Boosted file parsing speed by 10% by enhancing existing parsing methods, supporting rapid data ingestion and accelerating quiz generation speed.
                                Collaborated with cross-functional teams to deploy microservices using Docker and Git, enhancing scalability and deployment efficiency
                            </p>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-date">July 2022 - December 2022</div>
                        <div className="experience-details">
                            <h3>Pharmaceutical Science Data Analyst Co-op</h3>
                            <h4>Sanofi</h4>
                            <p>
                                Automated data workflows by building ETL pipelines using Python with Pandas and NumPy, reducing manual processing time by 50%.
                                Optimized pharmaceutical R&D by analyzing experimental data with Excel and Tableau, identifying trends and communicating insights through advanced functions and visualizations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
