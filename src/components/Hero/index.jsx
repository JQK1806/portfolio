import React from "react";
import './index.css'

const Hero = () => {
    return (
        <div className="hero">
            {/* TODO : ADD PROFILE PICTURE */}
            <h1><span>I'm Joseph King,</span> software developer</h1>
            <p>I am ...</p>
            <div className="hero-action">
                <div className="hero-connect">
                    Connect with me
                </div>
                <div className="hero-resume">
                    Resume
                </div>
            </div>
        </div>
    )
}

export default Hero;