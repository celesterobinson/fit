import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux"

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Signup from "./Signup";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

import "./styles/App.css";

class App extends Component {
    render() {
        const isAuthenticated = this.props.isAuthenticated;
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" render={(props)=>{
                        return isAuthenticated ?
                        <Redirect to="/workouts" /> :
                        <Login {...props} />
                    }}/>
                    <Route path="/signup" render={(props)=>{
                        return isAuthenticated ?
                        <Redirect to="/home" /> :
                        <Signup {...props} />
                    }}/>
                    <ProtectedRoute path="/workouts" component={Workouts} />
                    <ProtectedRoute path="/home" component={Home} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(state => state, {})(App));
