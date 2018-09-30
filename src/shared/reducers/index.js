// dependencies
import { combineReducers } from 'redux';
// shared reducers
import deviceReducer from './deviceReducer';

const rootReducer = combineReducers(deviceReducer);

export default rootReducer;
