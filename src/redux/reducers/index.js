import counterReducer from '../reducers/counterReducer'
import authReducer from "../reducers/authReducer";
import credentialsReducer from '../reducers/credentialsReducer'
import { combineReducers } from "redux";
import {blogsReducer,postReducer}  from '../reducers/blogsreducer';


const allReducers = combineReducers({
  counterReducer,
  authReducer,
  credentialsReducer,
  blogsReducer,
  postReducer
});
export default allReducers;