import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';

import Navigation from './components/layouts/Navigation';
import history from './history';

import HomePage from './pages/Home';
import NavPage from './pages/Nav';
import SkillsPage from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/skills">
            <SkillsPage />
          </Route>
          <Route path="/nav">
            <NavPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
