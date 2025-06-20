import React from "react";
import logo from '../../assets/react.svg'
import './index.css'

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">
                Connect with me
            </div>
        </div>
    )
}

export default Navbar;