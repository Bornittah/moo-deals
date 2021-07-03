import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import EachCattle from './components/EachCattle.js';
import Register from './components/Register.js';
import Login from './components/Login.js';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App"></div>

    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cattle-for-sale" component={EachCattle} /> 
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
    </Switch>

    </Router>
  );
}

export default App;
