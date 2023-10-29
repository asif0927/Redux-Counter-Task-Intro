import {combineReducers} from "redux";
import counterReducer from "./CounterReducer";

const reducers=combineReducers({
    counterReducer,
})

export default reducers;