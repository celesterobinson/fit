import axios from 'axios';
let exerciseAxios = axios.create();

exerciseAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const exerciseUrl = '/api/exercise/';

export const getExercise = () => {
    return dispatch => {
        axios.get(exerciseUrl)
            .then(response => {
                let { data } = response;
                // console.log(data)
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
    return dispatch => {
        axios.post(exerciseUrl, inputs)
            .then(response => {
                let { data } = response;
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
export const populateFilter = (search) => {
    return dispatch => {
        dispatch({
            type: 'SEARCH_FILTER',
            search
        })
    }
}
//populateFilter function
//this is an action creator that dispatches the inputs object from the search form component

const exerciseReducer = (prevState = { loading: true, data: [], filter: { name: "", category: "All" } }, action) => {
    switch (action.type) {
        case "GET_EXERCISE":
            return {
                ...prevState,
                data: action.data,
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
        case "SEARCH_FILTER":
            return {
                ...prevState,
                filter: action.search
            }
        // handle a populate filter case
        // return a new state containing the filter object sent from the action
        default:
            return prevState
    }
}
export default exerciseReducer;