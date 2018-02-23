import React, { Component } from 'react';
import { connect } from "react-redux";
import NewWorkoutExercises from "./NewWorkoutExercises";
import { saveWorkout } from "../../../../redux/workouts";
import "../../../../styles/NewWorkout.css";

class NewWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                name: ""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.inputs.name)
        this.props.saveWorkout({ ...this.props.workouts.currentWorkout, name: this.state.inputs.name });
        this.clearInputs();
    }

    handleChange(e) {
        let { value } = e.target;
        this.setState({
            inputs: {
                name: value
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                name: ""
            }
        })
    }

    render() {
        console.log(this.props);
        let { name } = this.state.inputs;
        return (
            <div className="new-workout" >
                <div className="workout-input">
                    <input className="input" onChange={this.handleChange} value={name} type="text" placeholder="New Workout Name" />
                </div>
                <form className="workout-form">
                    <NewWorkoutExercises className="new-workout-exercise-list" exercises={this.props.workouts.currentWorkout.exercises} />
                </form>
                    <button className="workout-button" onClick={this.handleSubmit}>Save Workout</button>
            </div>
        )
    }
}

export default connect(state => state, { saveWorkout })(NewWorkout);
