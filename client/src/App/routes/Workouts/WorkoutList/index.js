import React from 'react';
import Workout from "./Workout";
import { connect } from "react-redux";

function WorkoutList(props) {
    let { workouts } = props;
    const workoutList = workouts.map((workout, id) => {
            return <Workout key={id}{...workout} />
        })
    return (
        <div className="workout-list">
            {workoutList}
        </div>
    )
}

export default connect(state => state.user, {})(WorkoutList);

