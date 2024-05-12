//create a strore with createstore hook in react
import { applyMiddleware } from "redux";
import {logger} from "redux-logger"
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from "redux-thunk"
import { rootReducer } from './rootReducer';





const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))
export default store;
