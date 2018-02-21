import React, { Component } from "react";
import { connect } from "react-redux";
import WorkoutList from "./WorkoutList";
import { getWorkouts } from "../../redux/workouts";
import "../../styles/Workout.css";

class Workouts extends Component {
    componentDidMount() {
        this.props.getWorkouts();
    }

    render() {
        return (
            <div className="workout-page">
                <h2>Welcome, {this.props.user.username}! Checkout your workouts below.</h2>
                <WorkoutList workouts={this.props.workouts.data}/>
            </div>
        )
    }
}

export default connect(state => state, { getWorkouts })(Workouts);
