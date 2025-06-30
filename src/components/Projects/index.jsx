import React from "react";
import './index.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-content">
                <h2>Projects</h2>
                <p>This is the Projects section...</p>
                <div className="projects-grid">
                    <div className="project-card">
                        <div className="project-image">
                            <div className="project-placeholder">Project Image</div>
                        </div>
                        <div className="project-info">
                            <h3>Project Name 1</h3>
                            <p>Description of project and the technologies used...</p>
                            <div className="project-tech">
                                <span>React</span>
                                <span>Node.js</span>
                                <span>CSS</span>
                            </div>
                            <div className="project-links">
                                <button>View Live</button>
                                <button>View Code</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <div className="project-image">
                            <div className="project-placeholder">Project Image</div>
                        </div>
                        <div className="project-info">
                            <h3>Project Name 2</h3>
                            <p>Description...</p>
                            <div className="project-tech">
                                <span>Vue.js</span>
                                <span>Python</span>
                                <span>MongoDB</span>
                            </div>
                            <div className="project-links">
                                <button>View Live</button>
                                <button>View Code</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
