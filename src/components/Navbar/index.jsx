import React from "react";
import './index.css'

function Navbar() {
    return (
        <div className="navbar">
            <h1 className="nav-logo">Joseph<span>.</span></h1>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projects</li>
            </ul>
            <div className="nav-connect">
                Connect with me
            </div>
        </div>
    )
}

export default Navbar;