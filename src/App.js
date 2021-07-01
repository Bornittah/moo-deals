import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar.js';
import Home from './components/Home.js';
import Cattles from './components/Cattles.js';
import Footer from './components/Footer.js';
import EachCattle from './components/EachCattle.js';
import Register from './components/Register.js';
import Login from './components/Login.js';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
   <Router>
    <div className="App">
     <NavigationBar/>
     <Home/>
     <Cattles/>
     {/* <EachCattle/> */}
     <Footer/>
    </div>
    <Switch>
        <Route path="/cattle-for-sale" component={EachCattle} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </Switch>
   </Router>
  );
}

export default App;
