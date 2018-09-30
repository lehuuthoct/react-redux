/* eslint react/jsx-filename-extension: 'off' */

// import { App } from './components/App';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
// Provider - store
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './shared/redux/configureStore';
// init root component
const rootComponent = document.getElementById('root');

// hide unmount message
const msgNode = document.getElementById('unmountMessage');
msgNode.style.display = 'none';

// init unmount button
const unmountBtn = document.getElementById('unmount');
function unmount() {
  ReactDOM.unmountComponentAtNode(rootComponent);
  msgNode.style.display = 'block';
  unmountBtn.style.display = 'none';
}
unmountBtn.addEventListener('click', unmount);

// init store
const store = configureStore(window.initialState);
console.log('store', store);

render(
  <Provider store={store}>
    <Router>
      <AppRoutes />
      {/* <App /> */}
    </Router>
  </Provider>,
  rootComponent
);

// ReactDOM.render(<App />, rootComponent );
registerServiceWorker();
