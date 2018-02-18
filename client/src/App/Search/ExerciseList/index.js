import React, { Component } from 'react';
import Exercise from "./Exercise";
import { connect } from 'react-redux';
import { getExercise } from '../../redux/exercises';

class ExerciseList extends Component {
    

    render() {
        let { data, loading, filter} = this.props;
        // let { name, category } = this.props;
        // console.log(data);
        const exercises = data
            .filter(exercise => {
                if(!exercise.name.toLowerCase().includes(filter.name)) return false;
                if((exercise.category !== filter.category) && filter.category !== "All") return false;
                return true;  
                // only return true if there is a match between the filter object and exercise
            })
            .map(exercise => {
                return <Exercise key={exercise._id}{...exercise}/>
               
            })
        //    console.log(exercises)            
        return (
            !loading? <div>{exercises}</div>: null
        )
    }
}
const mapStateToProps = (state => {
    return state.exercises
})

export default connect(mapStateToProps, { getExercise })(ExerciseList);