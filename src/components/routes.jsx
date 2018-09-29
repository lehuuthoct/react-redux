// init dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// init components
import App from './App';
import Error404 from './Error/Error404';
import Home from './Home/Home';

// init routes
const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
