import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import exercises from "./exercises";

const rootReducer = (
    combineReducers({
        exercises
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