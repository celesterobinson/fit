import React from 'react';
import "../../../../../styles/Exercise.css";

function Exercise(props) {
    let { name, category } = props
    return (
        <div className="exercise">
            <div className="info">
                <h3>{name}</h3>
                <h5>{category}</h5>
            </div>
            <div className="buttons">
                <button>Details</button>
                <button>Add</button>
            </div>
        </div>
    )
}

export default Exercise;
