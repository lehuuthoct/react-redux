// dependencies
import { combineReducers } from 'redux';
// shared reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  device
});

export default rootReducer;
