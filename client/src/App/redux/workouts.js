import axios from "axios";
const workoutUrl = `/api/workout/`;

axios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export const addExToWorkout = id => {
    return dispatch => {
        dispatch({
            type: "ADD_EX_TO_WORKOUT",
            id
        })
    }
}

export const removeExercise = id => {
    return dispatch => {
        dispatch({
            type: "REMOVE_EXERCISE",
            id
        })
    }
}

export const updateExercise = (id, name, value) => {
    return dispatch => {
        dispatch({
            type: "UPDATE_EXERCISE",
            id,
            name,
            value
        })
    }
}


export const saveWorkout = (workout) => {
    return dispatch => {
        axios.post(workoutUrl, workout)
            .then(response => {
                let { data } = response;
                dispatch({
                    type: "SAVE_WORKOUT",
                    data
                })
            })
    }
}

export const getWorkouts = () => {
    return dispatch => {
        axios.get(workoutUrl)
            .then(response => {
                let { data } = response;
                dispatch({
                    type: "GET_WORKOUTS",
                    data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const deleteWorkout = (id) => {
    return dispatch => {
        axios.delete(workoutUrl + id, id)
            .then(response => {
                dispatch({
                    type: 'DELETE_WORKOUT',
                    id
                })
            })
    }
}

const workoutReducer = (workouts = { loading: true, data: [], currentWorkout: { name: "", exercises: [] } }, action) => {
    switch (action.type) {
        case "ADD_EX_TO_WORKOUT":
            return {
                ...workouts,
                loading: false,
                currentWorkout: {
                    ...workouts.currentWorkout,
                    exercises: [...workouts.currentWorkout.exercises, { reps: 0, sets: 0, weight: 0, exerciseId: action.id }]
                }
            }
        case "REMOVE_EXERCISE":
            return {
                ...workouts,
                currentWorkout: {
                    ...workouts.currentWorkout,
                    exercises: workouts.currentWorkout.exercises.filter(ex => ex.exerciseId !== action.id)
                }
            }
        case "UPDATE_EXERCISE":
            return {
                ...workouts,
                currentWorkout: {
                    ...workouts.currentWorkout,
                    exercises: workouts.currentWorkout.exercises.map(ex => {
                        if (ex.exerciseId === action.id) {
                            return {
                                ...ex,
                                [action.name]: Number(action.value)
                            }
                        } else {
                            return ex
                        }
                    })
                }
            }
        case "SAVE_WORKOUT":
            return {
                ...workouts,
                loading: false,
                data: [...workouts.data, action.data],
                currentWorkout: { name: "", exercises: [] }
            }
        case "GET_WORKOUTS":
            return {
                ...workouts,
                loading: false,
                data: action.data,
            }
        case "DELETE_WORKOUT":
            return {
                ...workouts,
                loading: false,
                data: workouts.data.filter((workout) => {
                    return workout._id !== action.id
                })
            }
        default:
            return workouts;
    }
}

export default workoutReducer;