import React, { Component } from "react";
import { connect } from "react-redux";
import WorkoutList from "./WorkoutList";
import { getWorkouts } from "../../redux/workouts";
import { getExercise } from "../../redux/exercises";
import "../../styles/Workout.css";

class Workouts extends Component {
    componentDidMount() {
        this.props.getWorkouts();
        this.props.getExercise();
    }

    render() {
        return (
            <div className="workout-page">
                <h2>Welcome, {this.props.user.username}! Pick one of your workouts and get to work!</h2>
                <WorkoutList workouts={this.props.workouts.data} />
            </div>
        )
    }
}

export default connect(state => state, { getWorkouts, getExercise })(Workouts);
