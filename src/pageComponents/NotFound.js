
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
export default class NotFound extends Component{
    render(){
      return(
        <p>404 Not found <Link to="/Home">Back to Home</Link></p>
      )
    }
  }