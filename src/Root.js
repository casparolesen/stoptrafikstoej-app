import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Frontpage from './pages/Frontpage';
import Petition from './pages/Petition';

const history = createHistory();

const Root = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Frontpage} />
      <Route path="/underskriv" exact component={Petition} />
    </Switch>
  </Router>
);

export default Root;
