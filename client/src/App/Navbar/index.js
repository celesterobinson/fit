import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/auth";
import "../styles/Navbar.css";

class Navbar extends Component {
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div className="nav">
                <div className="title">
                    <h1>Fit</h1>
                </div>
                
                <div className="nav-link-wrapper">
                    {isAuthenticated ? null : <div className="links"><Link to="/signup">Sign Up</Link></div>}
                    {isAuthenticated ? null : <div className="links"><Link to="/">Login</Link></div>}
                    {isAuthenticated ? <div className="links"><Link to="/home">Home</Link></div> : null}
                    {isAuthenticated ? <div className="links"><Link to="/workouts">Workouts</Link></div> : null}
                    {isAuthenticated ? <div><button onClick={this.props.logout}>Logout</button></div> : null}
                </div>
            </div>
        )
    }
}


export default connect(state => state.user, { logout })(Navbar)
