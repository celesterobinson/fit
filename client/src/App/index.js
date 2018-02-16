import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";

import "./styles/App.css";

function App(Props) {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/workouts" component={Workouts} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;
