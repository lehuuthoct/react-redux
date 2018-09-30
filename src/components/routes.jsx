// init dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// init components
import App from './App';
import Error404 from './Error/Error404';
import Home from './Home/Home';
import NoteDetail from './Notes/NoteDetail';
import Numbers from './Numbers/Numbers';
import Todo from './Todo/Todo';

// init routes
const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/todo" component={Todo} exact />
      <Route path="/numbers" component={Numbers} exact />
      <Route path="/note/:noteID" component={NoteDetail} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
