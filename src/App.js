import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fridge from './pageComponents/Fridge';
import Meal from './pageComponents/Meal'; 
import Home from './pageComponents/Home';
import NotFound from './pageComponents/NotFound';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { comment } from 'postcss'

const routes = () =>(
  <BrowserRouter>
  <div>
  <nav className="navbar is-primary" role="navigation">
  <div className="navbar-brand">
  <Link to="/" className="navbar-item title is-3">Leftovers</Link>
  </div>
  </nav>
  <Switch>
  <Route path="/" component={Home} exact={true}/>
  <Route path="/Recipes" component={Fridge}/>
  <Route path="/Meal" component={Meal}/>
  <Route component={NotFound}/>
  </Switch>
  </div>
  </BrowserRouter>
)
export default routes;

