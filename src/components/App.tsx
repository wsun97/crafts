import React from 'react';
import logo from './assets/logo.svg';
import {Route, Switch} from 'react-router-dom';
import Router from '../router';
import Main from '../pages/main'

function App() {
  return (
    <div>
      <Router></Router>
    </div>
  );
}

export default App;
