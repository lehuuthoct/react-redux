// dependencies
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import coins from '../../reducers/coinReducers';
// shared reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  device,
  coins,
  form: formReducer
});

export default rootReducer;
