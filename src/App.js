import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar.js';
import HomePage from './components/HomePage';
import EachCattle from './components/EachCattle.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import EachCategory from './components/EachCategory';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <NavigationBar/>
    </div>

    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cattle-for-sale" component={EachCattle} /> 
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/cattle-category" component={EachCategory} />
    </Switch>

    </Router>
  );
}

export default App;
