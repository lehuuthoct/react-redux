// dependencies
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// import root reducer
import rootReducer from '../reducers';

// init initial state => window.initialState (index.html)

// init store
export default function configureStore(initialState) {
  // init middlewares
  const middleware = [thunk];

  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
