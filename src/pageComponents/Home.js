
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
export default class Home extends Component {
    render() {
      return (
        <div className="container">
        <div className="content">
          <h1 className="title">Welcome to Leftovers!</h1>
          <h2 className="sub-title">We help you convert waste to</h2>
          <h2>healthy dishes</h2>
          </div>
          <Link className="btn-left button is-primary is-outlined" to="/Recipes">Leftovers in Fridge!</Link>
          <Link className="btn-right button is-primary is-outlined" to="/Meal">Meal Plan</Link>
        </div>
      );
    }
  }