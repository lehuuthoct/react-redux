// dependencies
import { combineReducers } from 'redux';
import coin from '../../reducers/coinReducers';
// shared reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  device,
  coin
});

export default rootReducer;
