import React from 'react';

function WorkoutExercise(props) {
    console.log("workoutexercise", props);
    const { name, sets, reps, weight } = props;
    return (
        <div className="workout-exercise">
            <h1>{name}</h1>
            <h3>Sets: {sets}</h3>
            <h3>Reps: {reps}</h3>
            <h3>Weight: {weight} lbs</h3>
        </div>
    )
}

export default WorkoutExercise;
