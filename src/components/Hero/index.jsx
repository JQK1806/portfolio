import React from "react";
import './index.css'
import logo from '../../assets/react.svg'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-about">
                <h1>Hello I'm <span>Joseph King</span></h1>
                <h2>Placeholder...</h2>
            </div>
            {/* TEMP IMG */}
            <img src={logo} alt="Joseph King - Developer" />
        </div>
    )
}

export default Hero;