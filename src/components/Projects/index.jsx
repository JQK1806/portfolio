import React from "react";
import './index.css';
import useImageCarousel from './useImageCarousel';

import huskyDoctorHome from '../../assets/HuskyHealth/doctor_home.png';
import huskyDoctorHome2 from '../../assets/HuskyHealth/doctor_home2.png';
import huskyPatientHome from '../../assets/HuskyHealth/patient_home.png';
import huskyPatientHome2 from '../../assets/HuskyHealth/patient_home2.png';
import huskyProviderHome from '../../assets/HuskyHealth/provider_home.png';
import huskySignin from '../../assets/HuskyHealth/signin.png';
import shortStackCommunityHome from '../../assets/ShortStack/community_home.png';
import shortStackCommunityPoll from '../../assets/ShortStack/community_poll.png';
import shortStackCommunityQuestion from '../../assets/ShortStack/community_question.png';
import shortStackHome from '../../assets/ShortStack/home.png';
import shortStackProfileRewards from '../../assets/ShortStack/profile_rewards.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "HuskyHealth",
            description: "A comprehensive healthcare platform connecting patients, doctors, and providers with secure communication and appointment management.",
            technologies: ["Python", "SQL", "Flask", "Docker"],
            images: [
                huskySignin,
                huskyPatientHome,
                huskyPatientHome2,
                huskyDoctorHome,
                huskyDoctorHome2,
                huskyProviderHome
            ],
            githubUrl: "https://github.com/JQK1806/Husky-Health-CS3200",
            liveUrl: null
        },
        {
            id: 2,
            name: "ShortStack",
            description: "A social Q&A platform for users to ask and answer question, join communities, and gain cosmetic profile rewards through interaction",
            technologies: ["TypeScript", "React.js", "Node.js", "MongoDB", "Express.js"],
            images: [
                shortStackHome,
                shortStackCommunityHome,
                shortStackCommunityQuestion,
                shortStackCommunityPoll,
                shortStackProfileRewards
            ],
            githubUrl: "https://github.com/neu-cs4530/shortstack",
            liveUrl: "https://cs4530-f24-808.onrender.com/"
        }
    ];

    const ImageCarousel = ({ images, projectName }) => {
        const { 
            currentImageIndex, 
            nextImage, 
            prevImage, 
            goToImage, 
            hasMultipleImages 
        } = useImageCarousel(images);

        return (
            <div className="project-image-carousel">
                <img 
                    src={images[currentImageIndex]} 
                    alt={`${projectName} screenshot ${currentImageIndex + 1}`}
                    className="carousel-image"
                />
                {hasMultipleImages && (
                    <>
                        <button 
                            className="carousel-btn carousel-btn-prev"
                            onClick={prevImage}
                            aria-label="Previous image"
                        >
                            ❮
                        </button>
                        <button 
                            className="carousel-btn carousel-btn-next"
                            onClick={nextImage}
                            aria-label="Next image"
                        >
                            ❯
                        </button>
                        <div className="carousel-indicators">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => goToImage(index)}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        );
    };

    const handleLinkClick = (url) => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <section id="projects" className="projects-section">
            <div className="projects-content">
                <h2>Projects</h2>
                <p>Here are some of my projects using various technologies and skills.</p>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <ImageCarousel images={project.images} projectName={project.name} />
                            </div>
                            <div className="project-info">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <button 
                                        onClick={() => handleLinkClick(project.liveUrl)}
                                        disabled={!project.liveUrl}
                                        className={!project.liveUrl ? 'disabled' : ''}
                                    >
                                        View Live
                                    </button>
                                    <button 
                                        onClick={() => handleLinkClick(project.githubUrl)}
                                        disabled={!project.githubUrl}
                                        className={!project.githubUrl ? 'disabled' : ''}
                                    >
                                        View Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
