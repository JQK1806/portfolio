import React from "react";
import './index.css'

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 10;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="navbar">
            <h1 className="nav-logo" onClick={() => scrollToSection('home')}>Joseph<span>.</span></h1>
            <ul className="nav-menu">
                <li onClick={() => scrollToSection('home')}>Home</li>
                <li onClick={() => scrollToSection('about')}>About</li>
                <li onClick={() => scrollToSection('experience')}>Experience</li>
                <li onClick={() => scrollToSection('projects')}>Projects</li>
            </ul>
            <div className="nav-connect">
                Connect with me
            </div>
        </div>
    )
}

export default Navbar;