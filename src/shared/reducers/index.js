// dependencies
import { combineReducers } from 'redux';
import coins from '../../reducers/coinReducers';
// shared reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  device,
  coins
});

export default rootReducer;
