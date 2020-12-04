import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import GlobalStyle from './assets/styles/globals';
// import { MainProvider } from './contexts/Context';

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AddFlowValue from './pages/AddFlowValue'

export default function App() {
  return (
      <Router>
          <GlobalStyle />
          <Switch>
            <Route exact path="/">
              <Redirect to="/sign-in" />
            </Route>
            <Route exact path="/sign-in">
              <SignIn />
            </Route>
            <Route exact path="/sign-up">
              <SignUp />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/add-flow">
              <AddFlowValue />
            </Route>
          </Switch>
      </Router>
    );
}
