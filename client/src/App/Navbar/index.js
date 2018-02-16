import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar(props) {
    return (
        <div className="nav">
            <div className="title">
                <h1>Fit</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/workouts">Workouts</Link>
            </div>
            <button>Logout</button>
        </div>
    )
}

export default Navbar
