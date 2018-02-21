import React from 'react';
import Workout from "./Workout";
import { connect } from "react-redux";

function WorkoutList(props) {
    let { workouts} = props;
    const workoutList = workouts
        .filter(workouts => workouts.user === props._id)
        .map((workout, id) => {
        return <Workout key={id}{...workout} />
    })
    console.log(workoutList[0]);
    // const workoutExercises = workoutList.filter(exercises => exer)
    return (
        <div className="workout-list">
            {workoutList}
        </div>
    )
}

export default connect(state => state.user, {})(WorkoutList);

