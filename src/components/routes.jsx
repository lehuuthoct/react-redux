// init dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Animation from './Animation/Animation';
// init components
import App from './App';
import Coins from './Coins';
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
      <Route path="/animation" component={Animation} exact />
      <Route path="/numbers" component={Numbers} exact />
      <Route path="/coins" component={Coins} exact />
      <Route path="/note/:noteID" component={NoteDetail} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;
