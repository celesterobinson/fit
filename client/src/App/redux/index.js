import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import exercises from "./exercises";
import user from "./auth";

const rootReducer = (
    combineReducers({
        exercises,
        user
    })
);

let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

store.subscribe(() => {
    // console.log(store.getState());
})

export default store;