import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainProvider } from './contexts/Context';

export default function App() {
  return (
    <MainProvider>
      <Router>
        <>
          {/* <Header /> */}
          <Switch>
          </Switch>
        </>
      </Router>
    </MainProvider>
  );
}
