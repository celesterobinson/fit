import axios from "axios";
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
    console.log(value);
    return dispatch => {
        dispatch({
            type: "UPDATE_EXERCISE",
            id,
            name,
            value
        })
    }
}

const workoutUrl = `/api/workout/`;

export const saveWorkout = (workout) => {
    console.log(workout);    
    return dispatch => {
        axios.post(workoutUrl, workout)
            .then(response => {
                console.log(response);
                let { data } = response;
                dispatch({
                    type: "SAVE_WORKOUT",
                    data
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
        default:
            return workouts;
    }
}

export default workoutReducer;