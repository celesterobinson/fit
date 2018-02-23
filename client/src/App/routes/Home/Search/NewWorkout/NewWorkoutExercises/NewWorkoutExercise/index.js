import React, { Component } from 'react';
import { connect } from "react-redux";
import { removeExercise, updateExercise } from "../../../../../../redux/workouts";

class NewWorkoutExercise extends Component {

    render() {
        let { exerciseId, data, removeExercise, updateExercise, reps, sets, weight } = this.props;
        const currentEx = data.filter(exercise => exercise._id === exerciseId)[0];
        return (
            <div className="new-workout-exercise">
                <div className="new-workout-title">
                    <span className="new-workout-details"><h1>{currentEx.name}</h1><h3>{currentEx.category}</h3></span>
                    <button onClick={(e) => { e.preventDefault(); removeExercise(exerciseId) }}>X</button>
                </div>
                
                <div className="ex-details">
                    Sets: <input onChange={(e) => { let { name, value } = e.target; updateExercise(exerciseId, name, value) }} name="sets" value={sets} type="number" placeholder="Sets" />
                    Reps: <input onChange={(e) => { let { name, value } = e.target; updateExercise(exerciseId, name, value) }} name="reps" value={reps} type="number" placeholder="Reps" />
                    Weight: <input onChange={(e) => { let { name, value } = e.target; updateExercise(exerciseId, name, value) }} name="weight" value={weight} type="number" placeholder="Weight" />
                </div>
            </div>
        )
    }
}

export default connect(state => state.exercises, { updateExercise, removeExercise })(NewWorkoutExercise);
