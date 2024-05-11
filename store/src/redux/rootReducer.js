import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./icecream/icecreamReducer";

export const rootReducer = combineReducers({
    cake: cakeReducer, 
    icecream: icecreamReducer
})
