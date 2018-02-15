import axios from 'axios';

const exerciseUrl = '/exercises/'

export const getExercise = () => {
    return dispatch => {
        axios.get(exerciseUrl) 
        .then(response => {
            let {data} = response
            dispatch({
                type: 'GET_EXERCISE',
                data
            }) 
        })
        .catch(err => {
            console.log(err);
        })
    }
}
export const addExercise = () => {
    return dispatch => {
        axios.post(exerciseUrl)
        .then(response => {
            let {data} = response
            dispatch({
                type: 'ADD_EXERCISE',
                data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}
export const editExercise = (updateExercise, id) => {
    return dispatch => {
        axios.put(exerciseUrl + id, updateExercise)
        .then(response => {
            dispatch({
                type: 'EDIT_EXERCISE',
                updateExercise,
                id
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}
export const deleteExercise = (id) => {
    return dispatch => {
        axios.delete(exerciseUrl + id, id)
        .then(response => {
            dispatch({
                type: 'REMOVE_EXERCISE',
                id
            })
        })
    }
}
export default exerciseReducer;