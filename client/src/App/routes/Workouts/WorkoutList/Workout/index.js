import React from 'react';
import { connect } from "react-redux";
import "../../../../styles/Workout.css";

function Workout(props) {
    let { name } = props;
    // console.log(props);

    return (
        <div className="individual-workout">
            <h1>{name}</h1>
        </div>
    )
}

export default connect(state => state, {})(Workout);
