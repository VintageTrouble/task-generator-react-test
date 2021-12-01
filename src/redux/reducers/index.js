import { combineReducers } from 'redux';
import taskTypesReducer from './taskTypesReducer' 

const rootReducer = combineReducers({
    taskTypes: taskTypesReducer
});

export default rootReducer;