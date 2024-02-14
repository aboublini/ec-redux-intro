import taskReducer from "./taskReducer";
import { combineReducers } from "redux";

// Combine all reducers to a single root reducer
const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
