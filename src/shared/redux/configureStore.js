// dependencies
import { createStore } from 'redux';
// import root reducer
import rootReducer from '../reducers';

// init initial state => window.initialState (index.html)

// init store
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
