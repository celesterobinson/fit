import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Workouts from "./pages/Workouts";
import Footer from "./Footer";
import Navbar from "./Navbar";

import "./styles/App.css";

function App(Props) {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/profile" component={Profile} />
                <Route path="/workouts" component={Workouts} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;
