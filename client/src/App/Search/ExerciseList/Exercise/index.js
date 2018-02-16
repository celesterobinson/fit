import React from 'react';

function Exercise(props) {
    let { name, category, instructions } = props
    return (
        <div>
            <h1>{name}</h1>
            <h3>{category}</h3>
            <p>{instructions}</p>
        </div>
    )
}

export default Exercise;
