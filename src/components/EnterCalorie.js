
import React, { Component } from 'react';
export default class EnterCalorie extends Component{
    render(){
        return(
            <div>
                <h1>Tell us your Calorie Intake!</h1>
                <h3>We will recommend the best meal plan</h3>
                <input className="calorieInput" type="text" placeholder="enter calories"/>
            </div>
        )
    }
}