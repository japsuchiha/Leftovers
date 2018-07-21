import React, { Component } from 'react';
import EnterCalorie from '../components/EnterCalorie'
import MealData from '../components/MealData';

export default class Meal extends Component {
    render(){
      return(
        <div>
        <EnterCalorie/>
        <MealData/>
        </div>
      )
    }
  }