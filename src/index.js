/* eslint react/jsx-filename-extension: 'off' */

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// init Routes
import AppRoutes from './components/routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

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

render(
  <Router>
    <AppRoutes />
  </Router>,
  rootComponent
);

// ReactDOM.render(<App />, rootComponent );
registerServiceWorker();
