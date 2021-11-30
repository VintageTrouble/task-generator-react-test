import { combineReducers } from 'redux';
import tasks from './tasks' 
import taskTypes from './taskTypes' 

const rootReducer = combineReducers({
    tasks,
    taskTypes
});

export default rootReducer;