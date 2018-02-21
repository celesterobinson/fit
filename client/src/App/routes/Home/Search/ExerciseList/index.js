import React, { Component } from 'react';
import Exercise from "./Exercise";
import { connect } from 'react-redux';
import { getExercise } from '../../../../redux/exercises';
import "../../../../styles/ExerciseList.css";

class ExerciseList extends Component {
    render() {
        let { data, loading, filter} = this.props;
        console.log(data);
        const exercises = data
            .filter(exercise => {
                if(!exercise.name.toLowerCase().includes(filter.name)) return false;
                if((exercise.category !== filter.category) && filter.category !== "All") return false;
                return true;  
            })
            .map(exercise => {
                return <Exercise key={exercise._id}{...exercise}/>
               
            })          
        return (
            !loading? <div className="ex-list-wrapper"><div className="exercise-list">{exercises}</div></div>: null
        )
    }
}
const mapStateToProps = (state => {
    return state.exercises
})

export default connect(mapStateToProps, { getExercise })(ExerciseList);
