import axios from 'axios';

const exerciseUrl = '/exercise/';

export const getExercise = () => {
    return dispatch => {
        axios.get(exerciseUrl)
            .then(response => {
                let { data } = response;
                console.log(data)
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

export const addExercise = (inputs) => {
    console.log("got to here");
    return dispatch => {     
        axios.post(exerciseUrl, inputs)
            .then(response => {
                let { data } = response;
                console.log(data);
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
export const editExercise = (updatedExercise, id) => {
    return dispatch => {
        axios.put(exerciseUrl + id, updatedExercise)
            .then(response => {
                dispatch({
                    type: 'EDIT_EXERCISE',
                    updatedExercise: response.data,
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
                    type: 'DELETE_EXERCISE',
                    id
                })
            })
    }
}

const exerciseReducer = (prevState = { loading: true, data: [] }, action) => {
    switch (action.type) {
        case "GET_EXERCISE":
            return {
                ...prevState,
                loading: false
            }
        case "ADD_EXERCISE":
            return {
                loading: false,
                data: [...prevState.data, action.data]
            }
        case "EDIT_EXERCISE":
            return {
                loading: false,
                data: prevState.data.map((exercise) => {
                    if (exercise._id === action.id) {
                        return action.updatedExercise
                    } else {
                        return exercise
                    }
                })
            }
        case "DELETE_EXERCISE":
            return {
                loading: false,
                data: prevState.data.filter((exercise) => {
                    return exercise._id !== action.id
                })
            }
        default:
            return prevState
    }
}
export default exerciseReducer;