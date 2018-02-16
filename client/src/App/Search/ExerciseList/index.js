import React, { Component } from 'react';
import Exercise from "./Exercise";
import { connect } from 'react-redux';
import { getExercise } from '../../redux/exercises';

class ExerciseList extends Component {
    

    render() {
        let { data, loading} = this.props;
        let { name, category } = this.props;
        console.log(this.props.data);
        const exercises = data
            // .filter(exercise => {
            //     return exercise.name.tolowercase().includes();  
            // })
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
