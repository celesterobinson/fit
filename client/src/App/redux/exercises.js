import axios from 'axios';

axios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

const exerciseUrl = '/api/exercise/';

export const getExercise = () => {
    return dispatch => {
        axios.get(exerciseUrl)
            .then(response => {
                let { data } = response;
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
                ...prevState,
                loading: false,
                data: [...prevState.data, action.data]
            }
        case "EDIT_EXERCISE":
            return {
                ...prevState,
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
        default:
            return prevState
    }
}
export default exerciseReducer;