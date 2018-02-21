import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux"

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./routes/Home";
import Workouts from "./routes/Workouts";
import Signup from "./routes/Signup";
import Login from "./routes/Login/LoginForm";
import ProtectedRoute from "./routes/ProtectedRoute";

import "./styles/App.css";

class App extends Component {
    render() {
        const isAuthenticated = this.props.user.isAuthenticated;
        return (
            <div className="app-wrapper">
                <Navbar />
                <div className="background">
                <div className="main">
                    <Switch>
                        <Route exact path="/" render={(props) => {
                            return isAuthenticated ?
                                <Redirect to="/workouts" /> :
                                <Login {...props} />
                        }} />
                        <Route path="/signup" render={(props) => {
                            return isAuthenticated ?
                                <Redirect to="/home" /> :
                                <Signup {...props} />
                        }} />
                        <ProtectedRoute path="/workouts" component={Workouts} />
                        <ProtectedRoute path="/home" component={Home} />
                    </Switch>
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(state => state, {})(App));
