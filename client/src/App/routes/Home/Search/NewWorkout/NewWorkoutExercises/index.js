import React, { Component } from 'react';
import NewWorkoutExercise from "./NewWorkoutExercise";

class NewWorkoutExercises extends Component {
    render() {
        let {exercises} = this.props;
        const newWorkoutExercises = exercises.map((exercise, id) => {
            return <NewWorkoutExercise key={id}{...exercise}/>
        })
        return (
            <div>   
                {newWorkoutExercises}
            </div>
        )
    }
}

export default NewWorkoutExercises;
